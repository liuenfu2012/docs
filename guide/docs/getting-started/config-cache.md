# 分布式缓存配置

SS CMS 系统支持本机缓存以及 Redis 分布式缓存两种缓存方式，通过Redis，缓存能够实现分布式部署，在正式环境中推荐使用。

如果采用 Redis 缓存， Redis 连接信息存储在环境变量或者 `sscms.json` 配置文件中，如果是正式环境，通常会对 Redis 连接信息进行加密之后再存储，如果是本地测试环境，可以不加密以明文存储。

::: warning 注意
如果 SS CMS 采取API分离方式部署，则必须采用 Redis 缓存，这样才能够在后台服务器与API服务器中同步数据。
:::

## 在安装向导中配置分布式缓存

在 SS CMS 的安装的界面中选择 Redis 缓存类型：

![选择 Redis 类型](/docs/guide/images/getting-started/config-cache/redis.png)

* 如果 Redis 端口采用了非默认端口，请选择并设置自定义端口。

点击下一步进入管理员设置界面，如果是正式环境，请勾选底部的 `是否加密配置文件`，加密 Redis 连接字符串：

![加密 Redis 连接字符串](/docs/guide/images/getting-started/config-cache/security.png)

## 在 sscms.json 中配置 Redis 

系统安装后，SS CMS 系统将把 Redis 连接信息存放于 `sscms.json` 配置文件中：

* IsProtectData： Redis 连接是否加密存储
* SecurityKey：加密秘钥，系统随机生成
* Redis:ConnectionString： Redis 连接字符串

如果未勾选 `加密配置文件`， Redis 连接信息将以明文存储：

```json
{
  "IsProtectData": false,
  "SecurityKey": "31410d60633f180c",
  "Redis": {
    "ConnectionString": "localhost:6379,allowAdmin=true"
  }
}
```

如果勾选 `加密配置文件`，系统将加密 Redis 连接信息，加密秘钥为系统随机生成的 `SecurityKey`：

```json
{
  "IsProtectData": true,
  "SecurityKey": "c5524b78e134490a",
  "Redis": {
    "ConnectionString": "QscCOGmjN84oxw1Kvsa8Z4G7rg6zbz0Z2Hfs8tPaLvI0equals00secret0"
  }
}
```

如果 Redis 连接有变化，需要修改配置文件以使 SS CMS 能够正确连接 Redis 。

## 在环境变量中配置 Redis 

推荐使用环境变量存储 Redis 连接信息：

```bash
set SSCMS_ISPROTECTDATA="False"
set SSCMS_SECURITYKEY="31410d60633f180c"
set SSCMS_REDIS__CONNECTIONSTRING="localhost:6379,allowAdmin=true"
```

在环境变量中设置 Redis 连接信息后，可以将 `sscms.json` 中的对应值设置为空，系统将优先从环境变量中获取 Redis 连接信息。