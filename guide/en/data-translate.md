# Data Translate

The SiteServer CLI command line can be used as a general-purpose tool for database data migration.

The benefits of using SiteServer CLI as a data migration to be able to cross-database type, first of all through the database backup command **`siteserver backup`** to save the data to a folder, and then restore the database command **`siteserver resore`** to restore the data to the specified database.

**`siteserver backup`** and **`siteserver resore`** command has been specially optimized to achieve rapid bulk data import and export, also ordered through **`--includes`** and **`--excludes`** parameter specifies the need to migrate data sheet.

::: warning
You need to include command **`siteserver resore`** with **`--data-only`** parameters, otherwise the command will detect the database structure and sync database structure to the current version of SiteServer CMS data structures.
:::