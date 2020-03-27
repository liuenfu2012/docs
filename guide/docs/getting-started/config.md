# 概述

可以通过多种方式设置 SS CMS 系统的运行参数：

* appsettings.json 配置文件
* sscms.json 配置文件
* 环境变量
* 命令行参数

::: warning 注意
系统检测到新版本并进行自动升级时不会覆盖 sscms.json 文件，但是系统会覆盖 appsettings.json 文件，所以不要将自定义配置放到 appsettings.json 文件中。
:::

## 运行参数约定

SS CMS 通过读取配置文件、环境变量以及命令行参数键值对的方式获取系统运行参数，系统运行参数以键值对的方式存储。

优先级为 `命令行参数` > `环境变量` > `sscms.json` > `appsettings.json`，即：

* 命令行参数会替代从环境变量中获取的设置。
* 环境变量参数会替代从sscms.json配置文件获取的设置。
* sscms.json参数会替代从appsettings.json配置文件获取的设置。

### 键

配置键采用以下约定：

* 键不区分大小写。 例如，`ConnectionString` 和 `connectionstring` 被视为等效键。
* 在环境变量中，需要添加前缀 `SSCMS_`，如果设置分层键，需要采用双下划线 (`__`)分割。

### 值

配置值采用以下约定：

* 值是字符串。
* NULL 值不能存储在配置中或绑定到对象。

## appsettings.json 与 sscms.json 配置

appsettings.json 与 sscms.json 均为系统配置文件，区别在于当系统检测到新版本并进行自动升级时不会覆盖 sscms.json 文件，但是系统会覆盖 appsettings.json 文件，所以通常将自定义配置如数据库设置、访问地址等配置信息存储在 sscms.json 文件中，而将系统推荐设置存储在 appsettings.json 文件中。

appsettings.json 与 sscms.json 均为 JSON 文件格式，可以通过上下级存储层次结构键值对信息，例如：

```json
{
  "Position": {
      "Title": "编辑器",
      "Name": "Joe Smith"
  },
  "MyKey": "My Value"
}
```

## 环境变量配置

SS CMS 将在运行时从环境变量键值对加载配置，SS CMS 读取以 **`SSCMS_`** 为前缀的环境变量，上下级键值对需要以 __（双下划线）分割。

与上面配置文件设置相同的环境变量：

```bash
set SSCMS_POSITION__TITLE="编辑器"
set SSCMS_POSITION__NAME="Joe Smith"
set SSCMS_MYKEY="My Value"
```

## 命令行参数配置

如果将命令行参数配置在 `sscms` 运行程序的末尾，命令行参数将替代由环境编辑及配置文件中设置的配置。

在 Windows 操作系统中运行与上面配置文件设置相同的命令行参数配置：

```bash
./sscms.exe --Position:Title="编辑器" --Position:Name="Joe Smith" --MyKey="My Value"
```

在 Linux 或者 macOS 操作系统中运行与上面配置文件设置相同的命令行参数配置：

```bash
./sscms --Position:Title="编辑器" --Position:Name="Joe Smith" --MyKey="My Value"
```

## 安全性建议

采用以下做法来保护敏感配置数据：

* 请勿在appsettings.json 配置文件或者sscms.json 配置文件中明文存储密码或其他敏感数据。
* 推荐使用环境变量并采用加密方式存储密码或其他敏感数据。