# 在 Windows 中运行 SS CMS

::: warning 注意
此文档针对希望在 Windows 操作系统中安装与体验 SS CMS 产品的用户，如果计划在正式的 Windows 生产环境下部署产品请参考 [使用 IIS 在 Windows 上托管 SS CMS](deploy-windows-iis.html) 来了解更多。
:::

我们以 Windows 10 为主示范如何在 Windows 中安装 SS CMS 系统，其他 Windows 版本系统安装步骤基本一致。

## 1、下载并解压安装包至指定文件夹

创建并进入 SS CMS 系统运行的文件夹，例如我们打算在 `D:/web` 中运行 SS CMS：

查看当前为64位还是32位操作系统，请对应下载x64或者x86系统安装包，其中最新的产品下载地址请进入产品官网获取。

下载安装包zip文件至 `D:/web` 文件夹中，解压安装包至当前位置并删除安装包。

## 2、修改配置文件

系统默认运行端口为 5000，如果希望修改默认端口，如80端口，请打开并修改 `sscms.json` 文件：

``` json {2}
{
  "Urls": "http://*:5000"
}
```

将Url中的5000端口修改为需要的端口。

可以设置多个访问地址，如：

``` json {2}
{
  "Urls": "http://*:5000;http://localhost:5001;https://hostname:5002"
}
```

## 3、运行 SS CMS 系统

进入解压后的文件夹，找到 `sscms.exe` 文件，双击运行。

如果希望在命令行中指定运行地址，可以运行命令：

``` bash
./sscms.exe --urls="http://localhost:8000;http://localhost:8001"
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

## 4、安装 SS CMS 系统

至此，我们可以开始正式安装 SS CMS 系统了。

::: tip 提示
如果在云服务器环境中安装，请先配置安全组，确保网站地址及端口能够被外网访问。
:::

打开浏览器，访问地址 `http://<IP地址或域名>:<5000或其他端口>/siteserver/install`，进入 SS CMS 系统安装界面：

![](/docs/guide/images/getting-started/using-windows/01.png)

勾选我已经阅读并同意此协议，进入环境监测界面：

![](/docs/guide/images/getting-started/using-windows/02.png)

点击下一步，进入数据库设置界面：

![](/docs/guide/images/getting-started/using-windows/03.png)

在此，我们选择 `SQLite` 数据库，如果希望使用其他数据库，请根据需要选择，点击下一步，进入缓存设置界面：

![](/docs/guide/images/getting-started/using-windows/04.png)

在此，我们选择 `默认缓存`，如果希望使用Redis 分布式缓存，请根据需要选择，点击下一步，进入管理员设置界面：

![](/docs/guide/images/getting-started/using-windows/05.png)

在管理员设置界面中设置超级管理员的用户名及密码，设置完成后点击下一步，系统将显示安装成功界面：

![](/docs/guide/images/getting-started/using-windows/06.png)

点击 `进入管理后台` 按钮进入后台，至此，SS CMS 系统安装完毕。

在正式的 Windows 生产环境下部署 SS CMS 请参考 [在 Windows 中部署 SS CMS](deploy.md) 来了解更多。