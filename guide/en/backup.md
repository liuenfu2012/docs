# Backup

Database backup command to back up the database structure and data to a specified folder.

::: tip
Database backup commands support MySQL, SQLSERVER, PostgreSQL, and Oracle databases.
:::

::: tip
The database backup command can be used not only to back up the SS CMS system data, but also to any occasion where you need to back up the database to a file.
:::

## Usage

```sh
siteserver backup
    [--directory <string>]
    [--config-file <string>]
    [--includes <string>]
    [--excludes <string>]
    [--max-rows <int>]
    [--help]
```

Optional parameters can be set to control backup options.

## Options

| Options       | Shorthand |                                                                                                       Description |
| ------------- | :-------: | ----------------------------------------------------------------------------------------------------------------: |
| --directory   |    -d     |                                                            Specify the folder name where the backup file is saved |
| --config-file |    -c     |                                                       Specify the configuration file Web.config path or file name |
| --includes    |           | Specify the tables to be backed up. Multiple tables are separated by commas. By default, all tables are backed up |
| --excludes    |           |                                            Specify the tables to be excluded, multiple tables separated by commas |
| --max-rows    |           |                                       Specify the maximum number of rows for the table that needs to be backed up |
| --help        |    -h     |                                                                                               Command description |

## Example

### Basic

By default, the backup command reads the Web.config file in the current directory, obtains the database connection string from it, and then backs up the database to the backup folder.

The backup command does not currently support incremental backup. It only supports full backup. That is, the backup command will back up all the data stored in the database to a folder. If the amount of data in the database is too large, please do not use the backup command frequently to avoid affecting the database. performance.

For example, we want to back up the specified SS CMS system, find the path to the folder where the system is located, switch the command line to this folder, and run the backup command:

```
PS C:\Windows\system32> cd E:\wwwroot\
PS E:\wwwroot> siteserver backup
```

You can see the command to start the database backup operation, the interface will display the backup progress:

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

The backup command will traverse the tables in the database one by one, and completely export the contents of the table to the file. After the backup is finished, open the folder path and you will see a backup folder under the root directory. You can see the folder inside. The structure is roughly as follows:

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

By default, the backup command stores the backup in a folder named after the current date in the backup folder, so that it can be found after multiple backups.

Each table in the database has a folder named after the table name, where **\_metadata.json** stores the structure information of the table, **1.json** , **2.json** and other files store table data information.

### Specify the Web.config file

If the database information to be backed up is stored in another file, you can specify the config file by adding `-c` or `--config-file=` adding a file name.

The following figure shows two folders in the config file, backup.config and restore.config, which store the database connection string for which you want to back up data and the database connection string for which you want to restore data:

![](/assets/backup/01.png)

Switch the command line to this folder and run:

`siteserver backup -c backup.config`

After opening the folder after the command, you can see that the backup folder backup:

![](/assets/backup/03.png)

### Specify the backup storage folder

If you need to store the backup file in another folder, you can specify the backup storage folder by adding `-d` or `--directory=` adding the folder name.

`siteserver backup -c backup.config -d mydir`

After opening the folder after the command, you can see that the backup folder mydir:

![](/assets/backup/2.png)
