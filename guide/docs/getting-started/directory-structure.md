# 目录结构

## 系统目录结构

SS CMS 遵循 **“约定优于配置”** 的原则，系统安装后的目录结构如下：

::: vue
.
├── wwwroot _(**静态资源目录**)_
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
├── *.dll _(**.NET Core类库**)_
├── `appsettings.json` _(**.NET Core APP 配置文件**)_
├── `sscms.exe` _(**SS CMS 主程序**)_
└── `sscms.json` _(**SS CMS 配置文件**)_
:::

- `wwwroot`: 静态资源目录，如果存在主站将作为主站的文件夹，所有位于此文件夹内的文件均可被公开访问。
- `wwwroot/SiteFiles`: 用于存放站群公用文件，如管理员头像、站点模板文件等。
- `wwwroot/**`: 其中**代表特定的文件夹，如果在 SS CMS 中创建站点（非主站），系统将存放站点文件于指定的文件夹中。
- `wwwroot/index.html`: 系统默认使用 `index.html` 文件作为默认页面。
- `*.dll`: .NET Core类库。
- `dappsettings.json`: .NET Core APP 配置文件。
- `sscms.exe`: SS CMS 主程序，运行此文件即可启动 SS CMS 系统。
- `sscms.json`: SS CMS 配置文件，用于存放数据库连接字符串、缓存连接字符串等关键信息。

<!-- ::: warning 注意
当你想要去自定义 `templates/ssr.html` 或 `templates/dev.html` 时，最好基于 [默认的模板文件](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html) 来修改，否则可能会导致构建出错。
::: -->

<!-- **同时阅读:**

- [配置](../config/README.md)
- [主题](../theme/README.md)
- [默认主题配置](../theme/default-theme-config.md) -->

## 站点目录结构

SS CMS 是一个站群 CMS 系统，能够创建任意数量的站点，每个站点在系统根目录的 `wwwroot` 文件夹中均有一个对应的目录结构：

::: vue
.
├── wwwroot _(**静态资源目录**)_
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
├── *.dll _(**.NET Core类库**)_
├── `appsettings.json` _(**.NET Core APP 配置文件**)_
├── `sscms.exe` _(**SS CMS 主程序**)_
└── `sscms.json` _(**SS CMS 配置文件**)_
:::

- `wwwroot`: 静态资源目录，如果存在主站将作为主站的文件夹，所有位于此文件夹内的文件均可被公开访问。
- `wwwroot/SiteFiles`: 用于存放站群公用文件，如管理员头像、站点模板文件等。
- `wwwroot/**`: 其中**代表特定的文件夹，如果在 SS CMS 中创建站点（非主站），系统将存放站点文件于指定的文件夹中。
- `wwwroot/index.html`: 系统默认使用 `index.html` 文件作为默认页面。
- `*.dll`: .NET Core类库。
- `dappsettings.json`: .NET Core APP 配置文件。
- `sscms.exe`: SS CMS 主程序，运行此文件即可启动 SS CMS 系统。
- `sscms.json`: SS CMS 配置文件，用于存放数据库连接字符串、缓存连接字符串等关键信息。