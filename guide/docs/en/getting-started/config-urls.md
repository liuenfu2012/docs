# Endpoint configuration

Without any configuration, SS CMS will use the default address `http://*:5000` to run as a host and port, which `*` is able to address any access to current machine, such as localhost, IP address, domain name.

The host and port will be loaded with the following settings:
- sscms.json。
- Environment variable.
- Command line parameters.

Priority: `Command-line` > `Environment variable` > `sscms.json`.

## Set the endpoint by sscms.json

Open and modify the system under the root directory of `sscms.json` file:

``` json
{
  "Urls": "http://*:5000"
}
```

The IP address or host address list is separated by semicolons in English, and each access address needs to include the protocol, host, and port for which the request is listening, such as http://localhost:123.

You can use `*` any host (for example, http://*:5000), but the protocol (http:// or https://) and port must be included in each URL.

You can set multiple endpoints, such as:

``` json
{
  "Urls": "http://*:5000;http://localhost:5001;https://hostname:5002"
}
```

## Set the endpoint by environmental variables

Environment variables **`SSCMS_URLS`** can be set to change the endpoints, such as: http://localhost:8000; http://localhost:8001.

Environment variables will take precedence over the sscms.json configuration file.

## Set the endpoint by command line parameters

Command line parameters **`--urls`** can be set to change the endpoints also.

Command line parameters take precedence over environment variables and the sscms.json configuration file.

Run on Windows:

``` bash
./sscms.exe --urls="http://localhost:8000;http://localhost:8001"
```

Run on Linux:

``` bash
./sscms --urls="http://localhost:8000;http://localhost:8001"
```