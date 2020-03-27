# Overview

There are several ways to set the running parameters of the SS CMS system:

* appsettings.json configuration file
* sscms.json configuration file
* Environment variable
* Command line arguments

::: warning NOTE
The system does not overwrite the sscms.json file when it detects a new version and performs an automatic upgrade, but the system overwrites the appsettings.json file, so do not put custom configurations in the appsettings.json file.
:::

## Configuration keys and values

SS CMS get parameters by reading configuration files, environment variables, and command-line parameter key-value pairs. Parameters are stored as key-value pairs.

Priority `Command-line` > `Environment variables` > `sscms.json` > `appsettings.json`, namely:

* Command-line parameters override settings obtained from environment variables.
* The environment variable parameters override the settings obtained from the sscms.json configuration file.
* The sscms.json parameter overrides the settings obtained from the appsettings.json configuration file.

### Configuration keys:

The configuration keys use the following conventions:

* The keys are not case sensitive. For example, `ConnectionString` and `connectionstring` are considered equivalent key.
* In the environment variable, you need to add a prefix SSCMS_. If you set a hierarchical key, you need to use double underscore (__) to separate.

### Configuration values:

The configuration values ​​use the following conventions:

* The value is a string.
* NULL values ​​cannot be stored in the configuration or bound to an object.

## appsettings.json and sscms.json

Both appsettings.json and sscms.json are system configuration files. The difference is that the system will not overwrite the sscms.json file when the system detects a new version and performs an automatic upgrade, but the system will overwrite the appsettings.json file, so custom configurations such as Database settings, access addresses, and other configuration information are stored in the sscms.json file, while system recommended settings are stored in the appsettings.json file.

Appsettings.json and sscms.json are both JSON file formats. Hierarchical key-value pair information can be stored by subordinates, for example:

```json
{
  "Position": {
      "Title": "Editor",
      "Name": "Joe Smith"
  },
  "MyKey": "My Value"
}
```

## Environment variables

The key to the SS CMS loading configuration, SS CMS read at runtime environment variables from the **`SSCMS_`** prefix environment variable, the need to lower the key __ (double underscore) segmentation.

Set the same environment variables as the configuration file above:

```bash
set SSCMS_POSITION__TITLE="Editor"
set SSCMS_POSITION__NAME="Joe Smith"
set SSCMS_MYKEY="My Value"
```

## Command-line

If the command-line parameters in `sscms` the end running the program, command line parameter overrides the configuration set by the environment and editing configuration files.

Run the same command line parameter configuration in the Windows operating system as the configuration file settings above:

```bash
./sscms.exe --Position:Title="Editor" --Position:Name="Joe Smith" --MyKey="My Value"
```

Run the same command line parameter configuration in the Linux or macOS operating system as the configuration file settings above:

```bash
./sscms --Position:Title="Editor" --Position:Name="Joe Smith" --MyKey="My Value"
```

## Security suggestions

Use the following practices to protect sensitive configuration data:

* Do not store passwords or other sensitive data in clear text in the appsettings.json configuration file or sscms.json configuration file.
* It is recommended to use environment variables and to store passwords or other sensitive data in an encrypted manner.