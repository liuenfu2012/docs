# 使用 Apache 在 Linux 上托管 SS CMS

使用本指南，了解如何在 [CentOS 7](https://www.centos.org/) 上将 [Apache](https://httpd.apache.org/) 设置为反向代理服务器，以将 HTTP 流量重定向到 SS CMS 系统。 Ubuntu 以及其他版本的 Linux 操作系统的部署流程与本文类似。

## 安装 Apache

将 CentOS 包更新为其最新稳定版本：

```bash
sudo yum update -y
```

使用单个 `yum` 命令在 CentOS 上安装 Apache Web 服务器：

```bash
sudo yum -y install httpd mod_ssl
```

运行该命令后的示例输出：

```bash
Downloading packages:
httpd-2.4.6-40.el7.centos.4.x86_64.rpm               | 2.7 MB  00:00:01
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
Installing : httpd-2.4.6-40.el7.centos.4.x86_64      1/1 
Verifying  : httpd-2.4.6-40.el7.centos.4.x86_64      1/1 

Installed:
httpd.x86_64 0:2.4.6-40.el7.centos.4

Complete!
```

::: warning 注意
在此示例中，输出反映了 httpd.86_64，因为 CentOS 7 版本是 64 位的。 若要验证 Apache 的安装位置，请从命令提示符运行 `whereis httpd`。
:::

## 配置 Apache

Apache 的配置文件位于 `/etc/httpd/conf.d/` 目录内。 除了 `/etc/httpd/conf.modules.d/` 中的模块配置文件外（其中包含加载模块所需的任何配置文件），将对任何带 .conf  扩展名的文件按字母顺序进行处理。

为应用创建名为 sscms.conf  的配置文件：

```
<VirtualHost *:*>
    RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
</VirtualHost>

<VirtualHost *:80>
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:5000/
    ProxyPassReverse / http://127.0.0.1:5000/
    ServerName www.example.com
    ServerAlias *.example.com
    ErrorLog ${APACHE_LOG_DIR}sscms-error.log
    CustomLog ${APACHE_LOG_DIR}sscms-access.log common
</VirtualHost>
```

`VirtualHost` 块可以在服务器上的一个或多个文件中多次出现。 在前面的配置文件中，Apache 接受端口 80 上的公共流量。 正在向域 `www.example.com` 提供服务，`*.example.com` 别名解析为同一网站。 有关详细信息，请参阅[基于名称的虚拟主机支持](https://httpd.apache.org/docs/current/vhosts/name-based.html)。 请求会通过代理从根位置转到 127.0.0.1 处的服务器的端口 5000。 对于双向通信，需要 `ProxyPass` 和 `ProxyPassReverse`。 若要更改 SS CMS 的 IP/端口，请参阅 [访问地址配置](./config-urls.html)。

::: warning 注意
未能指定 VirtualHost  块中的正确 [ServerName 指令](https://httpd.apache.org/docs/current/mod/core.html#servername)会公开应用的安全漏洞。 如果可控制整个父域（区别于易受攻击的 `*.com`），则子域通配符绑定（例如，`*.example.com`）不具有此安全风险。 有关详细信息，请参阅 [rfc7230 第 5.4 条](https://tools.ietf.org/html/rfc7230#section-5.4)。
:::

可以使用 `ErrorLog` 和 `CustomLog` 指令配置每个 `VirtualHost` 的日志记录。 `ErrorLog` 是服务器记录错误的位置，`CustomLog` 则设置文件名和日志文件的格式。 在这种情况下，这是记录请求信息的位置。 每个请求将各占一行。

保存文件，并测试配置。 如果一切正常，响应应为 `Syntax [OK]`。

```bash
sudo service httpd configtest
```

重新启动 Apache：

```bash
sudo systemctl restart httpd
sudo systemctl enable httpd
```

## 监视应用

Apache 现在已设置为将对 `http://localhost:80` 发起的请求转发到运行在 `http://127.0.0.1:5000` 处的 SS CMS 系统。 但是，未将 Apache 设置为管理 SS CMS 进程。 使用 systemd ，并创建服务文件以启动和监视基础 Web 应用。 systemd  是一个 init 系统，可以提供用于启动、停止和管理进程的许多强大的功能。

### 创建服务文件

创建服务定义文件：

```bash
sudo nano /etc/systemd/system/sscms.service
```

应用的一个示例服务文件：

```
[Unit]
Description=Example SS CMS App running on CentOS 7

[Service]
WorkingDirectory=/var/www
ExecStart=/var/www/sscms
Restart=always
# Restart service after 10 seconds if the sscms service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=sscms-example
User=apache

[Install]
WantedBy=multi-user.target
```

在前面的示例中，管理服务的用户由 `User` 选项指定。 用户 (`apache`) 必须存在并且拥有正确应用文件的所有权。

使用 `TimeoutStopSec` 配置在收到初始中断信号后等待应用程序关闭的持续时间。 如果应用程序在此时间段内未关闭，则将发出 SIGKILL 以终止该应用程序。 提供作为无单位秒数的值（例如，`150`）、时间跨度值（例如，`2min 30s`）或 `infinity` 以禁用超时。 `TimeoutStopSec` 默认为管理器配置文件（*systemd-system.conf*、*system.conf.d*、*systemd-user.conf*、*user.conf.d*）中 `DefaultTimeoutStopSec` 的值。 大多数分发版的默认超时时间为 90 秒。

```
# The default value is 90 seconds for most distributions.
TimeoutStopSec=90
```

保存该文件并启用该服务：

```bash
sudo systemctl enable sscms.service
```

启动该服务，并确认它正在运行：

```bash
sudo systemctl start sscms.service
sudo systemctl status sscms.service

● sscms.service - Example SS CMS App running on CentOS 7
    Loaded: loaded (/etc/systemd/system/sscms.service; enabled)
    Active: active (running) since Thu 2016-10-18 04:09:35 NZDT; 35s ago
Main PID: 9021 (dotnet)
    CGroup: /system.slice/sscms.service
            └─9021 /var/www/sscms
```

在配置了反向代理并通过 systemd  管理 SS CMS 后，Web 应用现已完全配置，并能在本地计算机上的浏览器中从 `http://localhost` 进行访问。 检查响应标头，服务器  标头表示 SS CMS 应用由 Kestrel 提供服务：

```
HTTP/1.1 200 OK
Date: Tue, 11 Oct 2016 16:22:23 GMT
Server: Kestrel
Keep-Alive: timeout=5, max=98
Connection: Keep-Alive
Transfer-Encoding: chunked
```

### 查看日志

由于使用 SS CMS 的 Web 应用是通过 systemd  进行管理的，因此事件和进程将记录到集中日志。 但是，此日志包含由 systemd  管理的所有服务和进程的条目。 若要查看特定于 `sscms.service` 的项，请使用以下命令：

```bash
sudo journalctl -fu sscms.service
```

若要进行时间筛选，请使用命令指定时间选项。 例如，使用 `--since today` 筛选出当天或 `--until 1 hour ago` 来查看前一小时的条目。 有关详细信息，请参阅 [journalctl 手册页](https://www.unix.com/man-page/centos/1/journalctl/)。

```bash
sudo journalctl -fu sscms.service --since "2016-10-18" --until "2016-10-18 04:00"
```

## 保护应用

### 配置防火墙

*Firewalld* 是管理防火墙的动态守护程序，支持网络区域。 仍可以使用 iptable 管理端口和数据包筛选。 默认情况下应安装 *Firewalld*。 `yum` 可用于安装包或验证是否已安装。

```bash
sudo yum install firewalld -y
```

使用 `firewalld` 仅打开应用所需的端口。 在此示例中，使用的是端口 80 和 443。 以下命令将端口 80 和 443 永久设置为打开：

```bash
sudo firewall-cmd --add-port=80/tcp --permanent
sudo firewall-cmd --add-port=443/tcp --permanent
```

重新加载防火墙设置。 检查默认区域中可用的服务和端口。 通过检查 `firewall-cmd -h` 获取可用选项。

```bash
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```

```bash
public (default, active)
interfaces: eth0
sources: 
services: dhcpv6-client
ports: 443/tcp 80/tcp
masquerade: no
forward-ports: 
icmp-blocks: 
rich rules: 
```

### HTTPS 配置

配置反向代理，以便进行安全 (HTTPS) 客户端连接 

若要为 Apache 配置 HTTPS，请使用 mod_ssl  模块。 安装了 httpd  模块时，也会安装了 mod_ssl  模块。 如果未安装，请使用 `yum` 将其添加到配置。

```bash
sudo yum install mod_ssl
```

若要强制使用 HTTPS，请安装 `mod_rewrite` 模块以启用 URL 重写：

```bash
sudo yum install mod_rewrite
```

修改 sscms.conf  文件以启用 URL 重写和端口 443 上的安全通信：

```
<VirtualHost *:*>
    RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
</VirtualHost>

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} !=on
    RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</VirtualHost>

<VirtualHost *:443>
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:5000/
    ProxyPassReverse / http://127.0.0.1:5000/
    ErrorLog /var/log/httpd/sscms-error.log
    CustomLog /var/log/httpd/sscms-access.log common
    SSLEngine on
    SSLProtocol all -SSLv2
    SSLCipherSuite ALL:!ADH:!EXPORT:!SSLv2:!RC4+RSA:+HIGH:+MEDIUM:!LOW:!RC4
    SSLCertificateFile /etc/pki/tls/certs/localhost.crt
    SSLCertificateKeyFile /etc/pki/tls/private/localhost.key
</VirtualHost>
```

::: warning 注意
此示例中使用了本地生成的证书。 SSLCertificateFile  应为域名的主证书文件。 SSLCertificateKeyFile  应为创建 CSR 时生成的密钥文件。 SSLCertificateChainFile  应为证书颁发机构提供的中间证书文件（如有）。
:::

保存文件，并测试配置：

```bash
sudo service httpd configtest
```

重新启动 Apache：

```bash
sudo systemctl restart httpd
```

## 其他 Apache 建议

### 其他标头

为了防止恶意攻击，应对一些标头进行修改或添加一些标头。 确保已安装 `mod_headers` 模块：

```bash
sudo yum install mod_headers
```

#### 保护 Apache 免受点击劫持攻击

[点击劫持](https://blog.qualys.com/securitylabs/2015/10/20/clickjacking-a-common-implementation-mistake-that-can-put-your-websites-in-danger)（也称为 *UI 伪装攻击*）是一种恶意攻击，其中网站访问者会上当受骗，从而导致在与当前要访问的页面不同的页面上单击链接或按钮。 使用 `X-FRAME-OPTIONS` 可保护网站。

缓解点击劫持攻击：

1. 编辑 *httpd.conf* 文件：

   ```bash
   sudo nano /etc/httpd/conf/httpd.conf
   ```

   添加行 `Header append X-FRAME-OPTIONS "SAMEORIGIN"`。
1. 保存该文件。
1. 重启 Apache。

#### MIME 类型探查

`X-Content-Type-Options` 标头阻止 Internet Explorer 进行 *MIME 探查*（从文件内容中确定文件的 `Content-Type`）。 如果服务器通过设置 `nosniff` 选项将 `Content-Type` 标头设置为 `text/html`，则不管文件内容为何，Internet Explorer 都会将内容呈现为 `text/html`。

编辑 *httpd.conf* 文件：

```bash
sudo nano /etc/httpd/conf/httpd.conf
```

添加行 `Header set X-Content-Type-Options "nosniff"`。 保存该文件。 重启 Apache。

### 负载平衡

此示例演示如何在同一实例计算机上的 CentOS 7 和 Kestrel 上设置和配置 Apache。 为了不出现单一故障点；使用 mod_proxy_balancer  并修改 VirtualHost  可实现在 Apache 代理服务器后方管理 Web 应用的多个实例。

```bash
sudo yum install mod_proxy_balancer
```

在下面所示的配置文件中，`sscms` 的其他实例设置为在端口 5001 上运行。 “代理”  部分设置了具有两个成员的均衡器配置，以便对 byrequests  进行负载均衡。

```
<VirtualHost *:*>
    RequestHeader set "X-Forwarded-Proto" expr=%{REQUEST_SCHEME}
</VirtualHost>

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} !=on
    RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L]
</VirtualHost>

<VirtualHost *:443>
    ProxyPass / balancer://mycluster/ 

    ProxyPassReverse / http://127.0.0.1:5000/
    ProxyPassReverse / http://127.0.0.1:5001/

    <Proxy balancer://mycluster>
        BalancerMember http://127.0.0.1:5000
        BalancerMember http://127.0.0.1:5001 
        ProxySet lbmethod=byrequests
    </Proxy>

    <Location />
        SetHandler balancer
    </Location>
    ErrorLog /var/log/httpd/sscms-error.log
    CustomLog /var/log/httpd/sscms-access.log common
    SSLEngine on
    SSLProtocol all -SSLv2
    SSLCipherSuite ALL:!ADH:!EXPORT:!SSLv2:!RC4+RSA:+HIGH:+MEDIUM:!LOW:!RC4
    SSLCertificateFile /etc/pki/tls/certs/localhost.crt
    SSLCertificateKeyFile /etc/pki/tls/private/localhost.key
</VirtualHost>
```

### 速率限制

使用 httpd  模块中包含的 mod_ratelimit  ，客户端的带宽可以限制为：

```bash
sudo nano /etc/httpd/conf.d/ratelimit.conf
```

示例文件将根位置下的带宽限制为 600 KB/秒：

```
<IfModule mod_ratelimit.c>
    <Location />
        SetOutputFilter RATE_LIMIT
        SetEnv rate-limit 600
    </Location>
</IfModule>
```

### 较长的请求标头字段

代理服务器默认设置通常将请求标头字段限制为 8190 字节。 如果需要更长的字段，则代理服务器的 [LimitRequestFieldSize](https://httpd.apache.org/docs/2.4/mod/core.html#LimitRequestFieldSize) 指令需要进行调整。 要应用的值具体取决于方案。 有关详细信息，请参见服务器文档。

::: warning 注意
除非必要，否则不要提高 `LimitRequestFieldSize` 的默认值。 提高该值将增加缓冲区溢出的风险和恶意用户的拒绝服务 (DoS) 攻击风险。
:::
