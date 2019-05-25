# Install

System installation command to install the SiteServer CMS system to the specified database.

::: tip
Before running the system installation command, you need to ensure that the latest version of the SiteServer CMS system exists in the current folder, and the database type and database connection string are set in Web.config.
:::

## Usage

``` sh
siteserver install --userName <string> --password <string>
    [--config-file <string>]
    [--help]
```

System installation command must include the installation of a new system of super administrator `--userName userName` and `--password password` parameters.

## Options

| Options          | Shorthand |                                 Description |
| ------------- | :--: | -----------------------------------: |
| --config-file |  -c  | Specify the configuration file Web.config path or file name |
| --userName    |  -u  |                     Super administrator username |
| --password    |  -p  |                       Super administrator password |
| --help        |  -h  |                             Command description |

::: tip
The system installation command will detect the connection string in Web.config. If the SiteServer CMS data table already exists in the corresponding database, the command will terminate execution and prompt the system to be installed.
:::

## Example

First download the latest version of the SiteServer CMS system, extract the Web.config file after unzipping,  `DatabaseType` and `ConnectionString` modify it to the database type and connection string that you need to install the system.

``` xml
<add key="DatabaseType" value="SqlServer" />
<add key="ConnectionString" value="Server=(local);Uid=sa;Pwd=123456;Database=cms_to_install;" />
```

Run the system installation command after the modification:

``` sh
siteserver install --userName 'admin' --password 'admin888'
```