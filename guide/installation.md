# 系统安装

系统安装命令，用于安装 SS CMS 系统至指定数据库。

::: tip
运行系统安装命令之前，需要保证当前文件夹已存在最新版本的 SS CMS 系统，同时 Web.config 中已设置好数据库类型及数据库连接字符串。
:::

## 用法

``` sh
siteserver install --userName <string> --password <string>
    [--config-file <string>]
    [--help]
```

系统安装命令必须包含新安装系统的超级管理员 `--userName 用户名` 以及 `--password 密码` 参数。

## 选项

| 选项          | 简写 |                                 说明 |
| ------------- | :--: | -----------------------------------: |
| --config-file |  -c  | 指定配置文件 Web.config 路径或文件名 |
| --userName    |  -u  |                     超级管理员用户名 |
| --password    |  -p  |                       超级管理员密码 |
| --help        |  -h  |                             命令说明 |

::: tip
系统安装命令将检测Web.config中的连接字符串，如果对应数据库已存在 SS CMS 数据表，命令将终止执行并提示系统已安装。
:::

## 示例

首先下载 SS CMS 系统最新版本，解压后修改Web.config文件，将`DatabaseType`以及`ConnectionString`修改为需要安装系统的数据库类型及连接字符串。

``` xml
<add key="DatabaseType" value="SqlServer" />
<add key="ConnectionString" value="Server=(local);Uid=sa;Pwd=123456;Database=cms_to_install;" />
```

修改完毕后运行系统安装命令：

``` sh
siteserver install --userName 'admin' --password 'admin888'
```