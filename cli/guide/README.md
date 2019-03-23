# 介绍

SiteServer 命令行工具（SiteServer CLI）是一个可执行的 exe 文件（siteserver.exe），需要[单独下载](https://www.siteserver.cn/cms/)，可以放到任意文件夹中，通过命令行执行。

要使用命令行工具，请打开命令窗口或 bash shell，然后运行 siteserver，后面跟着命令和适当的选项，如 siteserver version（查看命令行版本）。

使用 SiteServer 命令行工具的主要目的是执行一些基础性的功能，如一键备份、一键还原、6.0 版本之前的老版本升级以及切换系统至不同类型的数据库等功能。

::: tip
此文档反映了 SiteServer CLI 命令行的最新版本。
:::

### 命令列表

| 命令    |                                    说明                                     |
| ------- | :-------------------------------------------------------------------------: |
| install |           系统安装命令，用于安装 SiteServer CMS 系统至指定数据库            |
| backup  |          数据库备份命令，用于备份数据库结构以及数据至指定文件夹中           |
| restore |       数据库恢复命令，用于从备份文件中恢复数据结构及数据至指定数据库        |
| update  |           系统升级命令，用于将 SiteServer CMS 系统升级至最新版本            |
| version | 查看当前版本命令，用于查看 SiteServer CLI/SiteServer CMS 版本以及数据库信息 |

### 命令参数

可以在命令中带参数 `--help` 或者 `-h` 以显示此命令的使用说明，如 `siteserver backup --help`，使用`siteserver --help`能够获取所有命令的使用说明。

命令通常还包括以下参数：

- **`--directory` 或者 `-d`：** 指定文件夹名称。
- **`--config-file` 或者 `-c`：** 指定配置文件 Web.config 的文件路径或文件名。
