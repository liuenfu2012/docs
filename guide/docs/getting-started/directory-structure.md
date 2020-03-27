# 目录结构

## 系统目录结构

SS CMS 遵循 **“约定优于配置”** 的原则，系统安装后的目录结构如下：

::: vue
.
├── log _(**运行日志目录**)_
├── assets _(**后台资源文件目录**)_
├── wwwroot _(**网站对外访问目录**)_
│   ├── SiteFiles _(**站群公用文件**)_
│   │   ├── Administrators _(**管理员文件夹**)_
│   │   ├── Users _(**用户文件夹**)_
│   │   ├── SiteTemplates _(**站点模板**)_
│   │   ├── TemporaryFiles _(**临时文件**)_
│   │   └── database.sqlite _(**本地数据库，可选**)_
│   │ 
│   ├── ** _(**子站点文件夹**)_
│   └── index.html _(**默认页**)_
│ 
├── `appsettings.json` _(**.NET Core APP 配置文件**)_
├── `sscms.exe` _(**SS CMS 主程序**)_
├── `sscms.json` _(**SS CMS 配置文件**)_
└── `web.config` _(**非IIS部署可以删除**)_
:::

- `log`: 运行日志目录，系统运行日志，可以通过appsettings.json进行配置。
- `assets`: 后台运行需要的资源文件，如css、js等，其中包含menus文件夹，用于存储后台权限与菜单配置。
- `wwwroot`: 静态资源目录，如果存在主站将作为主站的文件夹，所有位于此文件夹内的文件均可被公开访问。
- `wwwroot/SiteFiles`: 用于存放站群公用文件，如管理员头像、站点模板文件等。
- `wwwroot/**`: 其中**代表特定的文件夹，如果在 SS CMS 中创建站点（非主站），系统将存放站点文件于指定的文件夹中。
- `wwwroot/index.html`: 系统默认使用 `index.html` 文件作为默认页面。
- `*.dll`: .NET Core类库。
- `appsettings.json`: .NET Core APP 配置文件。
- `sscms.exe`: SS CMS 主程序，运行此文件即可启动 SS CMS 系统。
- `sscms.json`: SS CMS 配置文件，用于存放数据库连接字符串、缓存连接字符串等关键信息。
- `web.config`: Windows操作系统下IIS部署使用，非IIS部署可以删除。

## 站点目录结构

SS CMS 是一个站群 CMS 系统，能够创建任意数量的站点，每个站点在系统根目录的 `wwwroot` 文件夹中均有一个对应的目录结构：

::: vue
.
└── siteDir _(**站点目录**)_
    ├── Template _(**站点模板**)_
    │   └── Content _(**站点内容模板**)_
    │ 
    ├── T_系统首页模板.html _(**站点首页模板**)_
    └── index.html _(**站点首页**)_
:::

- `siteDir`: 站点目录，由系统在新增站点时创建，如果站点为主站，站点目录为 `wwwroot`，否则站点目录为  `wwwroot` 目录的下级文件夹。
- `Template`: 用于存放除首页模板之外的其他模板。
- `Template/Content`: 用于存放站点内容模板。
- `T_系统首页模板.html`: 站点首页模板，系统将通过站点首页模板生成 `index.html` 文件。
- `index.html`: 站点首页文件。