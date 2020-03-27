# 概述

本机运行 SS CMS 系统可以通过双击 `sscms.exe` 可执行文件（[Windows 系统](./using-windows.html)）或者命令行运行 `sscms` 执行程序（[Linux 系统](./using-linux.html) 及 [MacOS 系统](./using-osx.html)），但是如果希望在正式环境部署 SS CMS 系统，则需要额外的托管和部署操作。

一般而言，向托管环境部署 SS CMS 系统需执行以下操作：

* 发布到文件夹，将 SS CMS 系统部署到托管服务器上的文件夹。
* 设置反向代理，反向代理在收到请求时启动应用，并在应用发生故障或服务器重启后重新启动应用，同时将请求转发到应用。

## 发布到文件夹

.NET Core 应用可以发布为“独立式部署”，也可以发布为“依赖框架的部署”，SS CMS 系统采用的是“独立式部署”模式，运行 SS CMS 系统不需要安装 .NET Core 或者其他第三方框架，只需要将 SS CMS 系统文件夹部署至托管服务器上的文件夹即可运行。

有关详细信息，请参阅 [在 Linux 中运行 SS CMS](./using-linux.html) 以及 [在 Windows 中运行 SS CMS](./using-windows.html)。

## 设置反向代理

SS CMS 系统是一个控制台应用，在服务器启动时必须启动该应用，并且在安装插件、卸载插件或者出现故障后必须重新启动它。

反向代理服务器接收来自网络的 HTTP 请求，并将这些请求转发到 SS CMS。

SS CMS 直接与 Internet 通信，不使用反向代理服务器：

![SS CMS 直接与 Internet 通信，不使用反向代理服务器](/docs/guide/images/getting-started/host-and-deploy/sscms-to-internet.png)

SS CMS 通过反向代理服务器（如 IIS、Nginx 或 Apache）间接与 Internet 进行通信：

![SS CMS 通过反向代理服务器（如 IIS、Nginx 或 Apache）间接与 Internet 进行通信](/docs/guide/images/getting-started/host-and-deploy/sscms-to-proxy-to-internet.png)

使用反向代理，还能获得以下优势：

* 可以限制所承载的应用中的公开的公共外围应用。
* 提供额外的配置和防护层。
* 可以更好地与现有基础结构集成。
* 简化了负载均和和安全通信 (HTTPS) 配置。 仅反向代理服务器需要 X.509 证书，并且该服务器可使用普通 HTTP 在内部网络上与应用服务器通信。

::: warning 注意
正式环境下部署 SS CMS 必须采用反向代理。
:::

用于 SS CMS 系统的最常见的反向代理是：

* Linux
  * [Nginx](./deploy-linux-nginx.html)
  * [Apache](./deploy-linux-apache.html)
* Windows
  * [IIS](./deploy-windows-iis.html)