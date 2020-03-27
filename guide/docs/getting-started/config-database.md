# 数据库配置

SS CMS 系统支持主流数据库类型，包括 MySql、SQLServer、PostgreSQL、Oracle、本地SQLite数据库，可以根据需要采用不同的数据库。

数据库连接信息存储在环境变量或者 `sscms.json` 配置文件中，如果是正式环境，通常会对数据库连接信息进行加密之后再存储，如果是本地测试环境，可以不加密以明文存储。

如果选择本地SQLite数据库，不需要提前安装数据库，系统会自动创建SQLite数据库。其他类型的数据库需要提前安装，通常数据库与 SS CMS 系统会安装在不同的服务器中。数据库详细安装文档请参考对应数据库的官方文档。

## 在安装向导中配置数据库

::: warning 注意
如果选择 MySQL 数据库，最低版本为 5.5，推荐使用最新的 8.0 版本。
如果选择 SQLServer 数据库，最低版本为 SQLServer 2012。
:::

在 SS CMS 的安装的界面中选择数据库类型：

![选择数据库类型](/docs/guide/images/getting-started/config-database/mysql.png)

* 如果数据库端口采用了非默认端口，请选择并设置自定义端口。
* 如果选择 SQLite 数据库，不需要设置数据库连接字符串，数据库默认位于 wwwroot/SiteFiles/database.sqlite，可以通过修改环境变量或者 sscms.json 配置文件修改默认路径。

点击下一步，选择 SS CMS 系统运行的数据库，接下来进入管理员设置界面，如果是正式环境，请勾选底部的 `是否加密配置文件`，加密数据库连接字符串：

![加密数据库连接字符串](/docs/guide/images/getting-started/config-database/security.png)

## 在 sscms.json 中配置数据库

系统安装后，SS CMS 系统将把数据库连接信息存放于 `sscms.json` 配置文件中：

* IsProtectData：数据库连接是否加密存储
* SecurityKey：加密秘钥，系统随机生成
* Database:Type：数据库类型
* Database:ConnectionString：数据库连接字符串

如果未勾选 `加密配置文件`，数据库连接信息将以明文存储：

```json
{
  "IsProtectData": false,
  "SecurityKey": "fe400641210913e7",
  "Database": {
    "Type": "MySql",
    "ConnectionString": "Server=rm-2vc9sql.cn-beijing.rds.aliyuncs.com;Port=3306;Uid=sscms;Pwd=sscms;Database=sscms;SslMode=Preferred;CharSet=utf8;"
  }
}
```

如果勾选 `加密配置文件`，系统将加密数据库连接信息，加密秘钥为系统随机生成的 `SecurityKey`：

```json
{
  "IsProtectData": true,
  "SecurityKey": "a82c6dd438ee2fe1",
  "Database": {
    "Type": "yfc27y7LKj00equals00secret0",
    "ConnectionString": "GT3SoYYd4YmhPb0add0RghRyvNjTkp47OjDc6tk2Ukw2664yFGDkZuNbGDfOhb0slash0sFG1zk5V4lkZ0add0eS9LVYW880slash0mp0add0g0equals00equals00secret0"
  }
}
```

如果数据库连接有变化，需要修改配置文件以使 SS CMS 能够正确连接数据库。

## 在环境变量中配置数据库

推荐使用环境变量存储数据库连接信息：

```bash
set SSCMS_ISPROTECTDATA="False"
set SSCMS_SECURITYKEY="fe400641210913e7"
set SSCMS_DATABASE__TYPE="MySql"
set SSCMS_DATABASE__CONNECTIONSTRING="Server=rm-2vc9sql.cn-beijing.rds.aliyuncs.com;Port=3306;Uid=sscms;Pwd=sscms;Database=sscms;SslMode=Preferred;CharSet=utf8;"
```

在环境变量中设置数据库连接信息后，可以将 `sscms.json` 中的对应值设置为空，系统将优先从环境变量中获取数据库连接信息。