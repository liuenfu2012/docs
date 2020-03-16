# Update

System upgrade command to upgrade the SS CMS system to the latest version.

::: tip
Versions of SS CMS 6.0 and later support online upgrades, usually without the use of upgrade commands.
:::

::: tip
The system upgrade command only upgrades the database files backed up by the backup command and does not directly operate the database.
:::

## Usage

```sh
siteserver update --directory <string>
    [--content-split]
    [--help]
```

System upgrade command must contain the specified need to upgrade to the latest version of the backup data folder `--directory ` parameters.

After the system upgrade command is completed, the command will generate an **update** folder in the current folder, and store the upgraded database structure and data.

## Options

| Options          | Shorthand |                                   Description |
| ------------- | :--: | -------------------------------------: |
| --directory   |  -d  | Specify the backup data folder that needs to be upgraded to the latest version              |
| --content-split |    | Split content table |
| --help        |  -h  | Command description |

::: tip
If you use **--content-split** to split the table of contents parameters, the upgrade command will create a corresponding table of contents for each site, and import the backup data into the corresponding table of contents; the default upgrade command will keep the table of contents unchanged.
:::

## Example

### Basic

Before using the upgrade command, you need to use the backup command to back up the old version of the database to the folder:

`
siteserver backup -d 'old_version_backup'
`

After the backup is complete, you can use the upgrade command. The upgrade command will change the data structure stored in the backup file to the latest version of the data structure. After the upgrade is complete, a new folder will be generated for the recovery command.

Switch the command line to the folder where you run the backup command and run the upgrade command:

`
siteserver update -d 'old_version_backup'
`

After the upgrade command is executed, a folder named update will appear in the system root directory. This folder stores the data files after the upgrade.

Next, you can create a new empty database, modify the Web.config to the corresponding database connection string and run the database recovery command to restore the data to the specified database:

`
siteserver restore -d update
`