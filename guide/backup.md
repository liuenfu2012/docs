# 数据库备份

数据库备份命令，用于备份数据库结构以及数据至指定文件夹中。

::: tip
数据库备份命令支持MySQL、SQLSERVER、PostgreSQL 以及 Oracle数据库。
:::

::: tip
数据库备份命令不仅可以用于备份 SS CMS 系统数据，还可用于任何需要备份数据库至文件的场合。
:::

## 用法

``` sh
siteserver backup
    [--directory <string>]
    [--config-file <string>]
    [--includes <string>]
    [--excludes <string>]
    [--max-rows <int>]
    [--help]
```

可以设置可选参数控制备份选项。

## 选项

| 选项          | 简写 |                                   说明 |
| ------------- | :--: | -------------------------------------: |
| --directory   |  -d  | 指定保存备份文件的文件夹名称              |
| --config-file |  -c  | 指定配置文件 Web.config 路径或文件名 |
| --includes    |      | 指定需要备份的表，多个表用英文逗号隔开，默认备份所有表 |
| --excludes    |      | 指定需要排除的表，多个表用英文逗号隔开 |
| --max-rows    |      | 指定需要备份的表的最大行数 |
| --help        |  -h  | 命令说明 |

## 示例

### 基本使用

备份命令默认读取当前目录下的 Web.config 文件，从中获取数据库连接字符串，进而将数据库备份到 backup 文件夹中。

备份命令目前还不支持增量备份，只支持完全备份，即备份命令将把数据库中所存的所有数据备份至文件夹中，如果数据库中数据量太大，请不要频繁使用备份命令，以免影响数据库性能。

例如我们希望备份指定的 SS CMS 系统，找到系统所在文件夹路径，将命令行切换到此文件夹，并运行备份命令：

```
PS C:\Windows\system32> cd E:\wwwroot\
PS E:\wwwroot> siteserver backup
```

可以看命令开始执行数据库备份操作，界面将显示备份进度：

```
PS E:\wwwroot> siteserver backup
欢迎使用 SS CMS Cli 命令行工具

数据库类型: SqlServer
连接字符串: Server=(local);Uid=sa;Pwd=123456;Database=cms;
备份文件夹: E:\wwwroot\backup\2019-01-20
-----------------------------------------------------------------------------
|                备份表名称                |                 总条数                 |
-----------------------------------------------------------------------------
|           _model_Content            |                 839                 |
|       _model_Content_Archive        |                  0                  |
|       siteserver_AccessToken        |                 28                  |
|            siteserver_Ad            |                  1                  |
|          siteserver_AdArea          |                  1                  |
|        siteserver_AdMaterial        |                  1                  |
|      siteserver_Administrator       |                  9                  |
|  siteserver_AdministratorsInRoles   |                 20                  |
|           siteserver_Adv            |                  0                  |
|          siteserver_Advert          |                  1                  |
|      siteserver_Advertisement       |                  1                  |
|     siteserver_AdvImageClassify     |                  0                  |
|     siteserver_AdvImageContent      |                  0                  |
|           siteserver_Area           |                  4                  |

...

|            ss_home_group            |                  0                  |
|         ss_home_group_user          |                  0                  |
|            ss_home_menu             |                  1                  |
|            ss_home_oauth            |                 16                  |
|              ss_input               |                  4                  |
|          ss_input_content           |                  6                  |
|           ss_input_field            |                 19                  |
|         ss_input_field_item         |                 89                  |
|               ss_jobs               |                  0                  |
|             ss_magazine             |                 17                  |
|         ss_magazine_article         |                 427                 |
|              ss_oauth               |                 412                 |
|           ss_oauth_login            |                  0                  |
|             ss_payment              |                 25                  |
|          ss_payment_record          |                 107                 |
|              ss_Photo               |                 10                  |
|               ss_poll               |                 33                  |
|            ss_poll_field            |                  9                  |
|         ss_poll_field_item          |                  0                  |
|            ss_poll_item             |                 20                  |
|             ss_poll_log             |                 13                  |
|             ss_pollitem             |                 80                  |
|             ss_polllog              |                 24                  |
|              ss_reward              |                 53                  |
|          ss_reward_record           |                 202                 |
|         ss_shopping_address         |                 50                  |
|          ss_shopping_area           |                  2                  |
|          ss_shopping_cart           |                 636                 |
|        ss_shopping_delivery         |                  5                  |
|          ss_shopping_order          |                 224                 |
|             ss_special              |                  0                  |
|          webgamex_comment           |                  0                  |
-----------------------------------------------------------------------------
恭喜，成功备份数据库至文件夹：E:\wwwroot\backup\2019-01-20！
```

备份命令将逐一遍历数据库中的表，将表中的内容完整导出至文件中，备份结束后，打开文件夹路径，将看到根目录下多了一个 backup 文件夹，可以看到里面的文件夹结构大致如下：

```
backup
└── 2019-01-20
    ├── model_Content
    |   ├── _metadata.json
    |   ├── 1.json
    |   └── 2.json
    ├── siteserver_Administrator
    ├── siteserver_AdministratorsInRoles
    ...
```

备份命令默认将备份存储在 backup 文件夹下的一个以当天日期命名的文件夹中，以方便多次备份后找到对应的备份文件。

数据库中的每个表均有一个以表名命名的文件夹，其中**\_metadata.json**存储表的结构信息，**1.json**、**2.json**等文件存储表数据信息。

### 指定 Web.config 文件

如果需要备份的数据库信息存储在其他文件中，可以通过`-c`或`--config-file=`加文件名的方式指定 config 文件。

下图显示的文件夹中有两个 config 文件，backup.config 以及 restore.config，分别存储了希望备份数据的数据库连接字符串以及希望恢复数据的数据库连接字符串：

![](/assets/backup/01.png)

将命令行切换到此文件夹，运行：

`siteserver backup -c backup.config`

命令结束后打开文件夹，可以看到多出了备份文件夹 backup：

![](/assets/backup/03.png)

### 指定备份存储文件夹

如果需要将备份文件存储在其他文件夹中，可以通过`-d`或`--directory=`加文件夹名称的方式指定备份存储文件夹。

`siteserver backup -c backup.config -d mydir`

命令结束后打开文件夹，可以看到多出了备份文件夹 mydir：

![](/assets/backup/2.png)
