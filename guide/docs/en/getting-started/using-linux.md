# 在 Linux 操作系统中使用 SS CMS

如果你在本机环境运行或者只是想体验一下 SS CMS 产品，您可以通过以下方式快速启动产品：

Linux系统，主要分Debian系列版本和RedHat系列版本，除此之外还有其它自由的发布版本。

1、RedHat系列主要有CentOS，RedHat，Fedora以及其他衍生版本；

2、Debian系列主要有Ubuntu，Debian，Mint以及其他衍生版本；

我们以用户最多的CentOS以及Ubuntu为主示范如何在Linux中安装 SS CMS 系统，其他 Linux 版本系统安装步骤基本一致。

## 1、安装zip解压程序

::: tip
如已安装解压程序，请忽略此步骤。
:::

如果是 `CentOS` 系统，运行以下命令安装zip解压程序：

``` bash
sudo yum install -y unzip
```

如果是 `Ubuntu` 系统，运行以下命令安装zip解压程序：

``` bash
sudo apt-get install -y unzip
```

## 2、下载并解压安装包至指定文件夹

创建并进入 SS CMS 系统运行的文件夹，例如我们打算在 `/var/www` 中运行 SS CMS：

创建文件夹：
``` bash
mkdir /var/www
```

下载安装包至 `/var/www` 文件夹中，其中最新的产品下载地址请进入产品官网获取：
``` bash
curl -o /var/www/sscms.zip 'https://siteserver.blob.core.chinacloudapi.cn/downloads/7.0.0/sscms-7.0.0-preview4-linux-x64.zip'
```

进入文件夹：
``` bash
cd /var/www
```

解压安装包：
``` bash
unzip sscms.zip
```

删除安装包：
``` bash
rm -fv sscms.zip
```

## 3、修改配置文件

系统默认运行端口为 5000，如果希望修改默认端口，如80端口，请打开并修改 `appsettings.json` 文件：

``` json
{
  "AllowedHosts": "*",
  "Kestrel": {
    "Endpoints": {
      "Http": {
        "Url": "http://0.0.0.0:5000"
      }
    }
  }
}
```

将Url中的5000端口修改为需要的端口，如80端口。

## 4、运行 SS CMS 系统

进入解压后的文件夹，在命令行中运行：

``` bash
./sscms
```

运行后命令行将提示如下信息：

``` bash
[12:44:44 INF] Executing ConfigureServices 'SS.CMS.Plugins.AddStaticFiles' <s:Microsoft.Extensions.DependencyInjection.IServiceCollection>
[12:44:44 INF] User profile is available. Using '/root/.aspnet/DataProtection-Keys' as key repository; keys will not be encrypted at rest. <s:Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager>
[12:44:44 INF] Creating key {9fdb3158-aa3c-451e-96f1-26bbedacd8fd} with creation date 2020-03-11 04:44:44Z, activation date 2020-03-11 04:44:44Z, and expiration date 2020-06-09 04:44:44Z. <s:Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager>
[12:44:44 WRN] No XML encryptor configured. Key {9fdb3158-aa3c-451e-96f1-26bbedacd8fd} may be persisted to storage in unencrypted form. <s:Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager>
[12:44:44 INF] Writing data to file '/root/.aspnet/DataProtection-Keys/key-9fdb3158-aa3c-451e-96f1-26bbedacd8fd.xml'. <s:Microsoft.AspNetCore.DataProtection.Repositories.FileSystemXmlRepository>
[12:44:44 INF] Executing Configure 'SS.CMS.Plugins.UseStaticFiles' <s:Microsoft.AspNetCore.Builder.IApplicationBuilder>
[12:44:44 INF] Now listening on: http://0.0.0.0:5000 <s:Microsoft.Hosting.Lifetime>
[12:44:44 INF] Application started. Press Ctrl+C to shut down. <s:Microsoft.Hosting.Lifetime>
[12:44:44 INF] Hosting environment: Production <s:Microsoft.Hosting.Lifetime>
[12:44:44 INF] Content root path: /var/www <s:Microsoft.Hosting.Lifetime>
```

## 5、安装 SS CMS 系统

至此，我们可以开始正式安装 SS CMS 系统了。

::: tip
如果在云服务器环境中安装，请先配置安全组，确保网站地址及端口能够被外网访问。
:::

打开浏览器，访问地址 `http://<IP地址或域名>:<5000或其他端口>/siteserver/install`，进入 SS CMS 系统安装界面：

![](/assets/installation-linux/01.png)

勾选我已经阅读并同意此协议，进入环境监测界面：

![](/assets/installation-linux/02.png)

点击下一步，进入数据库设置界面：

![](/assets/installation-linux/03.png)

在此，我们选择 `SQLite` 数据库，如果希望使用其他数据库，请根据需要选择，点击下一步，进入缓存设置界面：

![](/assets/installation-linux/04.png)

在此，我们选择 `默认缓存`，如果希望使用Redis 分布式缓存，请根据需要选择，点击下一步，进入管理员设置界面：

![](/assets/installation-linux/05.png)

在管理员设置界面中设置超级管理员的用户名及密码，设置完成后点击下一步，系统将显示安装成功界面：

![](/assets/installation-linux/06.png)

点击 `进入管理后台` 按钮进入后台，至此，SS CMS 系统安装完毕。

正式的生产环境下安装与部署产品请参考 [部署](deploy.md) 来了解更多。