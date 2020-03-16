# Content Table Split

We recommend setting a separate table of contents for each site. This will make the data in each table of content not too large and affect system performance.

For various reasons, the content table of all sites in the system may be the same content table. The data volume of the table has reached the level of affecting system performance. At this time, we should consider using the SS CMS CLI command line to split the content table to make each site. Have a separate table of contents.

### 1. Run the database backup command

First, using the database backup command **`siteserver backup`** to back up the database to the system folder.

Switch the command line to the folder where the SS CMS is located and run the backup command:

``` sh
siteserver backup -d backup
```

### 2. Run the system upgrade command

Then we need to use the upgrade command **`siteserver update`** and specify the **`--content-split`** split a table parameters:

``` sh
siteserver update -d backup --content-split
```

### 3. Create a new database

Next, we create an empty database (the new database type can be inconsistent with the previous database type), here we have a new database named `cms_new`.

Modify the Web.config file to store the database information:

``` xml
<add key="DatabaseType" value="SqlServer" />
<add key="ConnectionString" value="Server=(local);Uid=sa;Pwd=123456;Database=cms_new;" />
```

### 4. Recover data

We need to use the database recovery command **`siteserver resore`** data table of contents has been split backup to a new database.

``` sh
siteserver restore -d update
```

Now, the database split content table work is completed, you can delete the old database after backup.