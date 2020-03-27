# 使用 IIS 在 Windows 上托管 SS CMS

## 支持的操作系统

支持下列操作系统：

* Windows 7 或更高版本
* Windows Server 2012 R2 或更高版本

## IIS 配置

1. 通过“管理”  菜单或“服务器管理器”  中的链接使用“添加角色和功能”  向导。在“服务器角色”步骤中，选中“Web 服务器(IIS)”框   。

   ![在选择服务器角色步骤中选择了“Web 服务器 IIS”角色。](/docs/guide/images/getting-started/deploy-windows-iis/server-roles-ws2016.png)

1. 在“功能”  步骤后，为 Web 服务器 (IIS) 加载“角色服务” 步骤。选择所需 IIS 角色服务，或接受提供的默认角色服务。

   ![在选择角色服务步骤中选择了默认角色服务。](/docs/guide/images/getting-started/deploy-windows-iis/role-services-ws2016.png)

1. 继续执行“确认”步骤，安装 Web 服务器角色和服务。安装 Web 服务器 (IIS)  角色后无需重启服务器/IIS。

## 安装 .NET Core 托管捆绑包

IIS 配置完毕后需要安装 .NET Core 托管捆绑包（.NET Core Hosting Bundle）。

::: warning 注意
如果在 IIS 之前安装了托管捆绑包，则必须修复捆绑包安装。 在安装 IIS 后再次运行托管捆绑包安装程序。
:::

### 托管捆绑包下载地址

使用以下链接下载安装程序：

[.NET Core 托管捆绑包安装程序（直接下载）](https://dotnet.microsoft.com/permalink/dotnetcore-current-windows-runtime-bundle-installer)

### 安装托管捆绑包

1. 下载托管捆绑包后在服务器上运行安装程序。

1. 重新启动系统，或在命令行界面中执行以下命令：

   ```bash
   net stop was /y
   net start w3svc
   ```
   重启 IIS 会选取安装程序对系统 PATH（环境变量）所作的更改。

## 创建 IIS 站点

1. 在服务器上创建一个文件夹以包含解压后的 SS CMS 文件夹和文件。在接下来的步骤中，SS CMS 文件夹路径作为应用程序的物理路径提供给 IIS。

1. 在 IIS 管理器中，打开“连接”  面板中的服务器节点。 右键单击“站点”  文件夹。 选择上下文菜单中的“添加网站”  。

1. 提供网站名称，并将物理路径设置为应用的部署文件夹   。 提供“绑定”  配置，并通过选择“确定”  创建网站：

   ![在“添加网站”步骤中提供网站名称、物理路径和主机名。](/docs/guide/images/getting-started/deploy-windows-iis/add-website-ws2016.png)

  ::: warning 注意
  不应使用顶级通配符绑定（`http://*:80/` 和 `http://+:80`）  。 顶级通配符绑定可能会为应用带来安全漏洞。 此行为同时适用于强通配符和弱通配符。 使用显式主机名而不是通配符。 如果可控制整个父域（区别于易受攻击的 `*.com`），则子域通配符绑定（例如，`*.mysub.com`）不具有此安全风险。 有关详细信息，请参阅 [rfc7230 第 5.4 条](https://tools.ietf.org/html/rfc7230#section-5.4)。
  :::

1. 在服务器节点下，选择“应用程序池”  。

1. 右键单击站点的应用池，然后从上下文菜单中选择“基本设置”  。

1. 在“编辑应用程序池”  窗口中，将“.NET CLR 版本”  设置为“无托管代码”  ：

   ![将“.NET CLR 版本”设置为“无托管代码”。](/docs/guide/images/getting-started/deploy-windows-iis/edit-apppool-ws2016.png)

1. 对于 64 位 (x64) 服务器，为 32 位 (x86) 进程禁用应用池。

   在 IIS 管理器 >“应用程序池”  的“操作”  侧栏中，选择“设置应用程序池默认设置”  或“高级设置”  。 找到“启用 32 位应用程序”并将值设置为 `False`。

1. 确认进程模型标识拥有适当的权限。

   如果将应用池的默认标识（“进程模型” > “标识”）从 ApplicationPoolIdentity 更改为另一标识，请验证新标识拥有所需的权限，可访问应用的文件夹、数据库和其他所需资源。 例如，应用池需要对文件夹的读取和写入权限，以便应用在其中读取和写入文件。

## 浏览网站

将应用部署到托管系统后，向应用的一个公共终结点发出请求。

在以下示例中，站点被绑定到端口  `80` 上 `www.mysite.com` 的 IIS 主机名  中。 向 `http://www.mysite.com` 发出请求：

![SS CMS 默认页。](/docs/guide/images/getting-started/deploy-windows-iis/view-website.png)

如果系统尚未安装，点击进入管理后台按钮后系统将跳转页面至 SS CMS 系统安装向导页面。