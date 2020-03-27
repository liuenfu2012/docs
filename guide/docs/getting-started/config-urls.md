# 访问地址配置

如果没有任何配置，SS CMS 默认将使用地址 http://*:5000 作为运行主机与端口，其中 `*` 为任何能够访问到当前机器的地址，如 `localhost`、IP地址、域名。

系统将通过以下设置加载运行主机与端口：
- sscms.json。
- 环境变量。
- 命令行参数。

优先级为 `命令行参数` > `环境变量` > `sscms.json`。

## 通过 sscms.json 设置访问地址

请打开并修改系统根目录下的 `sscms.json` 文件：

``` json
{
  "Urls": "http://*:5000"
}
```

其中 IP 地址或主机地址列表采用英文分号分隔，每个访问地址均需要包含请求侦听的协议、主机以及端口，例如 http://localhost:123。

可以使用`*`代表任意主机（例如 http://*:5000），但是协议（http:// 或 https://）以及端口必须包含在每个 URL 中。

可以设置多个访问地址，如：

``` json
{
  "Urls": "http://*:5000;http://localhost:5001;https://hostname:5002"
}
```

## 通过环境变量设置访问地址

可以通过环境变量 **`SSCMS_URLS`** 来设置系统访问地址，规则与 sscms.json 相同，如：http://localhost:8000;http://localhost:8001。

环境变量的优先级将高于 sscms.json 配置文件。

## 通过命令行参数设置访问地址

可以通过命令行参数 **`--urls`** 来设置系统访问地址，规则与 sscms.json 相同。

命令行参数的优先级将高于环境变量以及 sscms.json 配置文件。

在 Windows 系统中运行：

``` bash
./sscms.exe --urls="http://localhost:8000;http://localhost:8001"
```

在 Linux 系统中运行：

``` bash
./sscms --urls="http://localhost:8000;http://localhost:8001"
```