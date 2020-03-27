# 使用 Nginx 在 Linux 上托管 SS CMS

使用本指南，了解如何在 Ubuntu 上将 Nginx 设置为反向代理服务器，以将 HTTP 流量重定向到 SS CMS 系统。CentOS 以及其他版本的 Linux 操作系统的部署流程与本文类似。

## 安装 Nginx

使用 `apt-get` 安装 Nginx。 安装程序将创建一个 systemd init 脚本，该脚本运行 Nginx，作为系统启动时的守护程序  。 按照以下网站上的 Ubuntu 安装说明操作：[Nginx：官方 Debian/Ubuntu 包](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/#official-debian-ubuntu-packages)。

```bash
sudo apt-get update
sudo apt-get install nginx
```

因为是首次安装 Nginx，通过运行以下命令显式启动：

```bash
sudo service nginx start
```

确认浏览器显示 Nginx 的默认登陆页。 可在 `http://<server_IP_address>/index.nginx-debian.html` 访问登陆页面。

## 配置 Nginx

安装完毕 Nginx后，请修改 /etc/nginx/sites-available/default配置文件，在文本编辑器中打开它，并将内容替换为以下内容：

```nginx
server {
    listen        80;
    server_name   example.com *.example.com;
    location / {
        proxy_pass         http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection keep-alive;
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

当没有匹配的 `server_name` 时，Nginx 使用默认服务器。 如果没有定义默认服务器，则配置文件中的第一台服务器是默认服务器。 作为最佳做法，添加指定默认服务器，它会在配置文件中返回状态代码 444。 默认的服务器配置示例是：

```nginx
server {
    listen   80 default_server;
    # listen [::]:80 default_server deferred;
    return   444;
}
```

使用上述配置文件和默认服务器，Nginx 接受主机标头 `example.com` 或 `*.example.com` 端口 80 上的公共流量。 与这些主机不匹配的请求不会转接到 SS CMS。 Nginx 将匹配的请求转接到 `http://localhost:5000` 中的 SS CMS。 有关详细信息，请参阅 [nginx 如何处理请求](https://nginx.org/docs/http/request_processing.html)。 若要更改 SS CMS 的 IP/端口，请参阅 [访问地址配置](./config-urls.html)。

::: warning 注意
未能指定正确的 [server_name 指令](https://nginx.org/docs/http/server_names.html)会公开应用的安全漏洞。 如果可控制整个父域（区别于易受攻击的 `*.com`），则子域通配符绑定（例如，`*.example.com`）不具有此安全风险。 有关详细信息，请参阅 [rfc7230 第 5.4 条](https://tools.ietf.org/html/rfc7230#section-5.4)。
:::

完成配置 Nginx 后，运行 `sudo nginx -t` 来验证配置文件的语法。 如果配置文件测试成功，可以通过运行 `sudo nginx -s reload` 强制 Nginx 选取更改。

## 监视应用

服务器设置为将对 `http://<serveraddress>:80` 发起的请求转接到在 `http://127.0.0.1:5000` 中的 SS CMS 系统。但是，未将 Nginx 设置为管理 SS CMS 进程。 systemd  可用于创建服务文件以启动和监视基础 Web 应用。 systemd  是一个 init 系统，可以提供用于启动、停止和管理进程的许多强大的功能。 

### 创建服务文件

创建服务定义文件：

```bash
sudo nano /etc/systemd/system/sscms.service
```

以下是应用的一个示例服务文件：

```ini
[Unit]
Description=Example SS CMS App running on Linux

[Service]
WorkingDirectory=/var/www
ExecStart=/var/www/sscms
Restart=always
# Restart service after 10 seconds if the sscms service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=sscms-example
User=www-data

[Install]
WantedBy=multi-user.target
```

在前面的示例中，管理服务的用户由 `User` 选项指定。 用户 (`www-data`) 必须存在并且拥有正确应用文件的所有权。

使用 `TimeoutStopSec` 配置在收到初始中断信号后等待应用程序关闭的持续时间。 如果应用程序在此时间段内未关闭，则将发出 SIGKILL 以终止该应用程序。 提供作为无单位秒数的值（例如，`150`）、时间跨度值（例如，`2min 30s`）或 `infinity` 以禁用超时。 `TimeoutStopSec` 默认为管理器配置文件（*systemd-system.conf*、*system.conf.d*、*systemd-user.conf*、*user.conf.d*）中 `DefaultTimeoutStopSec` 的值。 大多数分发版的默认超时时间为 90 秒。

```
# The default value is 90 seconds for most distributions.
TimeoutStopSec=90
```

保存该文件并启用该服务。

```bash
sudo systemctl enable sscms.service
```

启用该服务，并确认它正在运行。

```
sudo systemctl start sscms.service
sudo systemctl status sscms.service

● sscms.service - Example SS CMS App running on Linux
    Loaded: loaded (/etc/systemd/system/sscms.service; enabled)
    Active: active (running) since Thu 2016-10-18 04:09:35 NZDT; 35s ago
Main PID: 9021 (dotnet)
    CGroup: /system.slice/sscms.service
            └─9021 /var/www/sscms
```

在配置了反向代理并通过 systemd 管理 SS CMS 后，Web 应用现已完全配置，并能在本地计算机上的浏览器中从 `http://localhost` 进行访问。 也可以从远程计算机进行访问，同时限制可能进行阻止的任何防火墙。 检查响应标头，`Server` 标头显示由 Kestrel 所提供的 ASP.NET Core 应用。

```
HTTP/1.1 200 OK
Date: Tue, 11 Oct 2016 16:22:23 GMT
Server: Kestrel
Keep-Alive: timeout=5, max=98
Connection: Keep-Alive
Transfer-Encoding: chunked
```

### 查看日志

使用 SS CMS 的 Web 应用是通过 `systemd` 进行管理的，因此所有事件和进程都被记录到集中日志。 但是，此日志包含由 `systemd` 管理的所有服务和进程的全部条目。 若要查看特定于 `sscms.service` 的项，请使用以下命令：

```bash
sudo journalctl -fu sscms.service
```

有关进一步筛选，使用时间选项（如 `--since today`、`--until 1 hour ago`）或这些选项的组合可以减少返回的条目数。

```bash
sudo journalctl -fu sscms.service --since "2016-10-18" --until "2016-10-18 04:00"
```

## 保护应用

### 启用 AppArmor

Linux 安全模块 (LSM) 是一个框架，它是自 Linux 2.6 后的 Linux kernel 的一部分。 LSM 支持安全模块的不同实现。 [AppArmor](https://wiki.ubuntu.com/AppArmor) 是实现强制访问控制系统的 LSM，它允许将程序限制在一组有限的资源内。 确保已启用并成功配置 AppArmor。

### 配置防火墙

关闭所有未使用的外部端口。 通过为配置防火墙提供 CLI，不复杂的防火墙 (ufw) 为 `iptables` 提供了前端。

::: warning 注意
如果未正确配置，防火墙将阻止对整个系统的访问。 在使用 SSH 进行连接时，未能指定正确的 SSH 端口最终会将你关在系统之外。 默认端口为 22。 有关详细信息，请参阅 [ufw 简介](https://help.ubuntu.com/community/UFW)和[手册](https://manpages.ubuntu.com/manpages/bionic/man8/ufw.8.html)。
:::

安装 `ufw`，并将其配置为允许所需任何端口上的流量。

```bash
sudo apt-get install ufw

sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

sudo ufw enable
```

### 保护 Nginx

#### 更改 Nginx 响应名称

编辑 src/http/ngx_http_header_filter_module.c  ：

```
static char ngx_http_server_string[] = "Server: Web Server" CRLF;
static char ngx_http_server_full_string[] = "Server: Web Server" CRLF;
```

#### 配置选项

用其他必需模块配置服务器。 请考虑使用 [ModSecurity](https://www.modsecurity.org/) 等 Web 应用防火墙来加强对应用的保护。

#### 保护 Nginx 免受点击劫持的侵害

[点击劫持](https://blog.qualys.com/securitylabs/2015/10/20/clickjacking-a-common-implementation-mistake-that-can-put-your-websites-in-danger)（也称为 *UI 伪装攻击*）是一种恶意攻击，其中网站访问者会上当受骗，从而导致在与当前要访问的页面不同的页面上单击链接或按钮。 使用 `X-FRAME-OPTIONS` 可保护网站。

缓解点击劫持攻击：

1. 编辑 nginx.conf  文件：

   ```bash
   sudo nano /etc/nginx/nginx.conf
   ```

   添加行 `add_header X-Frame-Options "SAMEORIGIN";`。
1. 保存该文件。
1. 重启 Nginx。

#### MIME 类型探查

此标头可阻止大部分浏览器通过 MIME 方式探查来自已声明内容类型的响应，因为标头会指示浏览器不要替代响应内容类型。 使用 `nosniff` 选项后，如果服务器认为内容是“文本/html”，则浏览器将其显示为“文本/html”。

编辑 nginx.conf  文件：

```bash
sudo nano /etc/nginx/nginx.conf
```

添加行 `add_header X-Content-Type-Options "nosniff";` 并保存文件，然后重新启动 Nginx。