# Introduction

SiteServer CLI is an executable file(siteserver.exe), Need to [download separately](https://www.siteserver.cn/cms/), siteserver.exe can be placed in any folder, executed by the command line.

To use the command line tool, open a command window or bash shell, then run siteserver followed by the command and the appropriate options, such as siteserver version (see command line version).

The main purpose of using the SiteServer command line tool is to perform some basic functions, such as one-click backup, one-click restore, old version upgrade before 6.0, and switch system to different types of database.

::: tip
This document reflects the latest version of the SiteServer CLI command line.
:::

### Command list

| command    |                                    description                                     |
| ------- | :-------------------------------------------------------------------------: |
| install |           System installation command to install the SiteServer CMS system to the specified database            |
| backup  |          Database backup command to back up the database structure and data to a specified folder           |
| restore |       Database recovery command for restoring data structures and data from backup files to a specified database        |
| update  |           System upgrade command to upgrade the SiteServer CMS system to the latest version            |
| version | View current version command to view the SiteServer CLI/SiteServer CMS version and database information |

### Command parameters

You can take parameter in the command `--help` or `-h` to display the command instructions, such as `siteserver backup --help`，use `siteserver --help` can be obtained using the instructions of all commands.

The command usually also includes the following parameters:

- **`--directory` or `-d`**: Specify a folder name.
- **`--config-file` or `-c`**: Specify the file path or file name of the configuration file Web.config.
