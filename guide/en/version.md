# Version

View the current version command to view the SiteServer CLI/SiteServer CMS version and database information.

## Usage

```sh
siteserver update
    [--config-file <string>]
    [--help]
```

## Options

| Options          | Shorthand |                                   Description |
| ------------- | :--: | -------------------------------------: |
| --config-file |  -c  | Specify the configuration file Web.config path or file name |
| --help        |  -h  | Command description |

::: tip
If the current directory is the SiteServer CMS root directory or the command uses **--config-file** to specify the configuration file Web.config, the version command displays the corresponding SiteServer CMS system version and database connection string information in addition to the SiteServer CLI version information.
:::

## Example

### Basic

Run the version command in the non-SiteServer CMS system root directory:

``` sh
PS C:\Windows\system32> siteserver version
欢迎使用 SiteServer Cli 命令行工具

SiteServer CLI 版本号: 6.9.0
当前文件夹: C:\Windows\system32
```

Run the version command in the SiteServer CMS system root directory:

``` sh
PS C:\Windows\system32> cd C:\github\cms\cms-staging\SiteServer.Web
PS C:\github\cms\cms-staging\SiteServer.Web> siteserver version
欢迎使用 SiteServer Cli 命令行工具

SiteServer CLI 版本号: 6.9.0
当前文件夹: C:\github\cms\cms-staging\SiteServer.Web

SitServer CMS Version: 6.9.3-beta
数据库类型: SqlServer
连接字符串: Server=(local);Uid=sa;Pwd=123456;Database=cms;
连接字符串（加密）: 5TRGlFvX5U5gzX2Vi0sYmORh9DMNnA1MnHncFj259dJRN9l1tqf6dM30add0Zpd88Ni7bmNUsJ3G93HSJxIFoXqj0slash0Q0equals00equals00secret0
```

::: tip
Both the non-encrypted database connection string and the encrypted database connection string can be displayed simultaneously with the version command.
:::