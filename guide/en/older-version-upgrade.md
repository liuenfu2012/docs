# Old Version Upgrade

Older version can be upgraded to the latest version through the SS CMS CLI.

The currently supported versions of the upgrade command include:

- `SS CMS 3.6` Versions (3.6, 3.6.1, 3.6.2, 3.6.3, 3.6.4) are upgraded to the latest version
- `SS CMS 4.0` Upgrade to the latest version
- `SS CMS 4.1` Upgrade to the latest version
- `SS CMS 5.0` Upgrade to the latest version

Upgrade to the latest version `SS CMS 4.1` version as an example to explain how to use the upgrade command.

::: tip
Online upgrades are supported in versions of SS CMS 6.0 and later, this document is only available for pre-6.0 versions.
:::

## 1. Run the database backup command

The old version before upgrading need to use the database backup command **`siteserver backup`** to the old version of the database backup to folder, find the folder where the SS CMS system:

![](/assets/update/01.png)

Open Web.config and you can see the database information used by the current system:

``` xml
<add key="DatabaseType" value="SqlServer" />
<add key="ConnectionString" value="Server=(local);Uid=sa;Pwd=123456;Database=cms_4.1;" />
```

Switch the command line to this folder and run the backup command to back up the database data to the backup folder:

``` sh
siteserver backup -d backup
```

After the backup is complete, you can see the backup folder in the folder:

![](/assets/update/04.png)

## 2. Run the system upgrade command

Next we need to use the upgrade command **`siteserver update`** to convert the old version of the data structure and data to the new version of the data structure and data.

The upgrade command will change the data structure stored in the backup file to the latest version of the data structure. After the upgrade is completed, a new folder **update** will be generated for restoring the command.

Switch the command line to the system root directory, run the upgrade command and specify the backup folder:

``` sh
siteserver update -d backup
```

Note that the system upgrade command only converts the backup data file to a new data file, and the command does not operate on the database.

After the system upgrade command is executed, a folder named update will appear in the system root directory. This folder stores the data files after the upgrade:

![](/assets/update/06.png)

## 3. Setting up a new version of the environment

With the backup and upgrade commands, we have prepared the data needed for the new version of the system, and then we need to prepare the runtime environment for the new version.

First, we download the latest version of the SS CMS system and place the new system in a `cms_new` folder:

![](/assets/update/08.png)

Then, we create an empty database for the new version (the new version of the database type can be inconsistent with the old version), here we have a new database called `cms_new`.

Next, we modify the Web.config file to store the database information:

``` xml
<add key="DatabaseType" value="SqlServer" />
<add key="ConnectionString" value="Server=(local);Uid=sa;Pwd=123456;Database=cms_new;" />
```

Finally, we create a new IIS site, point to this folder, and add `NETWORK SERVICE` and `IIS_IUSRS` account permissions to the folder .

After completing the above steps, the environment of the new version of the system will be completed.

## 4. Recover data

We need to use the database restore command **`siteserver resore`** to restore the old version of the data to the new version.

Go to the old version folder and copy the update folder from the old version root directory to the new version root directory:

![](/assets/update/11.png)

Switch the command line to the root of the new version of the system and run the restore command (note that the restore command requires the -d parameter to be restored from the update folder):

``` sh
siteserver restore -d update
```

You can see that the command will check the data one by one and insert the data into the new version database.

Once the command is complete, you can open your browser to access the new system background:

![](/assets/update/13.png)

As you can see, the old version of the data has been transferred to the new version.

Finally, copy the site files from the old version of the system folder to the new version of the system folder, switch the domain name, and complete the version upgrade.