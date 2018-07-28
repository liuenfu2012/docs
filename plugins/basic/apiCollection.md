# SiteServer CMS 接口调用

SiteServer CMS 共提供了十种Api调用接口，为插件调用系统功能与数据提供支持：

| Api调用接口                        | 说明                    |
| ---------------------------------- | ----------------------- |
| [AdminApi](sdk/IAdminApi.md)       | 管理员及权限Api接口。   |
| [ChannelApi](sdk/IChannelApi.md)   | 栏目Api接口。           |
| [ConfigApi](sdk/IConfigApi.md)     | 插件及系统配置Api接口。 |
| [ContentApi](sdk/IContentApi.md)   | 内容Api接口。           |
| [DatabaseApi](sdk/IDatabaseApi.md) | 数据库操作Api接口。     |
| [ParseApi](sdk/IParseApi.md)       | STL解析Api接口。        |
| [PluginApi](sdk/IPluginApi.md)     | 插件Api接口。           |
| [SiteApi](sdk/ISiteApi.md)         | 站点Api接口。           |
| [UserApi](sdk/IUserApi.md)         | 用户Api接口。           |
| [UtilsApi](sdk/IUtilsApi.md)       | 工具类Api接口。         |

## AdminApi

管理员及权限Api接口。

| 名称                                                            | 说明                                            |
| --------------------------------------------------------------- | ----------------------------------------------- |
| [AdminName](sdk/IAdminApi/AdminName.md)                         | 表示当前登录系统的管理员用户名。 此字段为只读。 |
| [HasChannelPermissions](sdk/IAdminApi/HasChannelPermissions.md) | 表示当前管理员是否有指定的栏目权限。            |
| [HasSitePermissions](sdk/IAdminApi/HasSitePermissions.md)       | 表示当前管理员是否有指定的站点权限              |
| [HasSystemPermissions](sdk/IAdminApi/HasSystemPermissions.md)   | 表示当前管理员是否有指定的系统权限。            |
| [IsAdminNameExists](sdk/IAdminApi/IsAdminNameExists.md)         | 查看管理员是否存在。                            |

## ChannelApi

栏目Api接口。

| 名称                                                                          | 说明                                                           |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [Delete](sdk/IChannelApi/Delete.md)                                           | 删除栏目。                                                     |
| [GetChannelId](sdk/IChannelApi/GetChannelId.md)                               | 通过站点Id以及栏目索引获取栏目Id。                             |
| [GetChannelIdList](sdk/IChannelApi/GetChannelIdList.md)                       | 通过站点Id获取此站点下的所有栏目Id的列表。 (2 methods)         |
| [GetChannelIdListByAdminName](sdk/IChannelApi/GetChannelIdListByAdminName.md) | 通过站点Id以及管理员用户名获取此管理员拥有权限的栏目Id的列表。 |
| [GetChannelInfo](sdk/IChannelApi/GetChannelInfo.md)                           | 通过站点Id以及栏目Id获取对应的栏目实例。                       |
| [GetChannelName](sdk/IChannelApi/GetChannelName.md)                           | 通过站点Id以及栏目Id获取栏目名称。                             |
| [GetChannelUrl](sdk/IChannelApi/GetChannelUrl.md)                             | 获取栏目Url访问地址。                                          |
| [Insert](sdk/IChannelApi/Insert.md)                                           | 新增栏目。                                                     |
| [NewInstance](sdk/IChannelApi/NewInstance.md)                                 | 实例化指定站点Id的栏目对象。                                   |
| [Update](sdk/IChannelApi/Update.md)                                           | 修改栏目。                                                     |

## ConfigApi

插件及系统配置Api接口。

| 名称                                              | 说明                                 |
| ------------------------------------------------- | ------------------------------------ |
| [SystemConfig](sdk/IConfigApi/SystemConfig.md)    | 获取 SiteServer CMS 的系统配置字典。 |
| [GetConfig&lt;T&gt;](sdk/IConfigApi/GetConfig.md) | 获取当前插件的配置信息。             |
| [RemoveConfig](sdk/IConfigApi/RemoveConfig.md)    | 删除当前插件的配置信息。             |
| [SetConfig](sdk/IConfigApi/SetConfig.md)          | 存储当前插件的配置信息。 (2 methods) |

## ContentApi

内容Api接口。

| 名称                                                        | 说明                                                                    |
| ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| [Delete](sdk/IContentApi/Delete.md)                         | 删除内容。                                                              |
| [GetContentIdList](sdk/IContentApi/GetContentIdList.md)     | 获取指定栏目的所有内容Id的列表。                                        |
| [GetContentInfo](sdk/IContentApi/GetContentInfo.md)         | 获取内容实例。                                                          |
| [GetContentInfoList](sdk/IContentApi/GetContentInfoList.md) | 获取满足条件的翻页内容列表。 配合GetCount方法，能够实现内容的翻页效果。 |
| [GetContentUrl](sdk/IContentApi/GetContentUrl.md)           | 获取内容Url访问地址。                                                   |
| [GetContentValue](sdk/IContentApi/GetContentValue.md)       | 获取内容的属性值。                                                      |
| [GetCount](sdk/IContentApi/GetCount.md)                     | 获取满足条件的内容总数。                                                |
| [GetTableColumns](sdk/IContentApi/GetTableColumns.md)       | 通过站点Id以及栏目Id获取此栏目关联的内容表字段列表。                    |
| [GetTableName](sdk/IContentApi/GetTableName.md)             | 通过站点Id以及栏目Id获取此栏目关联的内容表名称。                        |
| [Insert](sdk/IContentApi/Insert.md)                         | 新增内容。                                                              |
| [NewInstance](sdk/IContentApi/NewInstance.md)               | 实例化内容对象。                                                        |
| [Update](sdk/IContentApi/Update.md)                         | 修改内容。                                                              |

## DatabaseApi

数据库操作Api接口。

| 名称                                                                         | 说明                                                                  |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [ExecuteCurrentId](sdk/IDatabaseApi/ExecuteCurrentId.md)                     | 获取当前数据库类型INSERT SQL语句执行后表生成的自增长Id。 (3 methods)  |
| [ExecuteDataset](sdk/IDatabaseApi/ExecuteDataset.md)                         | 对连接字符串中指定的数据库执行命令并返回DataSet。 (6 methods)         |
| [ExecuteNonQuery](sdk/IDatabaseApi/ExecuteNonQuery.md)                       | 对连接字符串中指定的数据库执行命令。 (6 methods)                      |
| [ExecuteNonQueryAndReturnId](sdk/IDatabaseApi/ExecuteNonQueryAndReturnId.md) | 执行INSERT SQL命令并返回自增长Id的值。 (2 methods)                    |
| [ExecuteReader](sdk/IDatabaseApi/ExecuteReader.md)                           | 对连接字符串中指定的数据库执行SQL 命令并返回IDataReader。 (6 methods) |
| [ExecuteScalar](sdk/IDatabaseApi/ExecuteScalar.md)                           | 对连接字符串中指定的数据库执行SQL 命令并返回值。 (6 methods)          |
| [GetBoolean](sdk/IDatabaseApi/GetBoolean.md)                                 | 获取数据库布尔类型值。 (2 methods)                                    |
| [GetConnection](sdk/IDatabaseApi/GetConnection.md)                           | 返回给定连接字符串的IDbConnection对象。                               |
| [GetDateTime](sdk/IDatabaseApi/GetDateTime.md)                               | 获取数据库日期/时间类型值。 (2 methods)                               |
| [GetDecimal](sdk/IDatabaseApi/GetDecimal.md)                                 | 获取数据库小数类型值。 (2 methods)                                    |
| [GetInt](sdk/IDatabaseApi/GetInt.md)                                         | 获取数据库整数类型值。 (2 methods)                                    |
| [GetPageSqlString](sdk/IDatabaseApi/GetPageSqlString.md)                     | 获取当前数据库类型的能够分页的SQL语句。                               |
| [GetParameter](sdk/IDatabaseApi/GetParameter.md)                             | 获取用于SQL命令的IDataParameter。                                     |
| [GetString](sdk/IDatabaseApi/GetString.md)                                   | 获取数据库字符串类型值。 (2 methods)                                  |
| [ToBooleanSqlString](sdk/IDatabaseApi/ToBooleanSqlString.md)                 | 将布尔值转换为当前数据库类型能够识别的布尔SQL语句。                   |
| [ToDateSqlString](sdk/IDatabaseApi/ToDateSqlString.md)                       | 将日期/时间值转换为当前数据库类型能够识别的日期SQL语句。              |
| [ToDateTimeSqlString](sdk/IDatabaseApi/ToDateTimeSqlString.md)               | 将日期/时间值转换为当前数据库类型能够识别的时间SQL语句。              |
| [ToMinusSqlString](sdk/IDatabaseApi/ToMinusSqlString.md)                     | 获取当前数据库类型的减操作符SQL语句。                                 |
| [ToNowSqlString](sdk/IDatabaseApi/ToNowSqlString.md)()                       | 获取当前数据库类型代表当前时间的SQL语句。                             |
| [ToPlusSqlString](sdk/IDatabaseApi/ToPlusSqlString.md)                       | 获取当前数据库类型的加操作符SQL语句。                                 |

## ParseApi

STL解析Api接口。

| 名称                                                        | 说明                           |
| ----------------------------------------------------------- | ------------------------------ |
| [GetCurrentUrl](sdk/IParseApi/GetCurrentUrl.md)             | 获取当前生成的静态页面的地址。 |
| [GetStlElements](sdk/IParseApi/GetStlElements.md)           | 获取html中的指定STL标签。      |
| [Parse](sdk/IParseApi/Parse.md)                             | 解析HTML中的STL标签。          |
| [ParseAttributeValue](sdk/IParseApi/ParseAttributeValue.md) | 解析Html标签属性中的STL实体。  |

## PluginApi

插件Api接口。

| 名称                                              | 说明                                         |
| ------------------------------------------------- | -------------------------------------------- |
| [PluginApiUrl](sdk/IPluginApi/PluginApiUrl.md)    | 当前插件的Rest Api访问Url地址。              |
| [GetPlugin&lt;T&gt;](sdk/IPluginApi/GetPlugin.md) | 通过插件Id获取插件实例。                     |
| [GetPluginPath](sdk/IPluginApi/GetPluginPath.md)  | 获取当前插件文件夹下的目录/文件路径。        |
| [GetPluginUrl](sdk/IPluginApi/GetPluginUrl.md)    | 获取当前插件文件夹下的目录/文件访问Url地址。 |

## SiteApi

站点Api接口。

| 名称                                                                 | 说明                                        |
| -------------------------------------------------------------------- | ------------------------------------------- |
| [GetSiteIdByFilePath](sdk/ISiteApi/GetSiteIdByFilePath.md)           | 通过目录/文件的绝对路径获取站点Id。         |
| [GetSiteIdList](sdk/ISiteApi/GetSiteIdList.md)()                     | 获取系统中的所有站点的Id列表。              |
| [GetSiteIdListByAdminName](sdk/ISiteApi/GetSiteIdListByAdminName.md) | 返回指定管理员有权限管理的站点的Id列表。    |
| [GetSiteInfo](sdk/ISiteApi/GetSiteInfo.md)                           | 通过站点Id获取指定站点的对象实体。          |
| [GetSitePath](sdk/ISiteApi/GetSitePath.md)                           | 获取站点文件夹绝对路径。 (2 methods)        |
| [GetSiteUrl](sdk/ISiteApi/GetSiteUrl.md)                             | 获取站点访问Url地址。 (2 methods)           |
| [GetSiteUrlByFilePath](sdk/ISiteApi/GetSiteUrlByFilePath.md)         | 根据文件的绝对地址计算此文件的访问Url地址。 |

## UserApi

用户Api接口。

| 名称                                                           | 说明                                                |
| -------------------------------------------------------------- | --------------------------------------------------- |
| [AddLog](sdk/IUserApi/AddLog.md)                               | 添加用户日志。                                      |
| [ChangePassword](sdk/IUserApi/ChangePassword.md)               |                                                     |
| [GetLogs](sdk/IUserApi/GetLogs.md)                             | 获取用户日志列表。                                  |
| [GetUserInfoByAccount](sdk/IUserApi/GetUserInfoByAccount.md)   | 通过用户账号获取用户对象实例。                      |
| [GetUserInfoByEmail](sdk/IUserApi/GetUserInfoByEmail.md)       | 通过用户邮箱获取用户对象实例。                      |
| [GetUserInfoByMobile](sdk/IUserApi/GetUserInfoByMobile.md)     | 通过用户手机获取用户对象实例。                      |
| [GetUserInfoByUserId](sdk/IUserApi/GetUserInfoByUserId.md)     | 通过用户Id获取用户对象实例。                        |
| [GetUserInfoByUserName](sdk/IUserApi/GetUserInfoByUserName.md) | 通过用户名获取用户对象实例。                        |
| [Insert](sdk/IUserApi/Insert.md)                               |                                                     |
| [IsEmailExists](sdk/IUserApi/IsEmailExists.md)                 | 判断用户邮箱是否存在。                              |
| [IsMobileExists](sdk/IUserApi/IsMobileExists.md)               | 判断用户手机是否存在。                              |
| [IsPasswordCorrect](sdk/IUserApi/IsPasswordCorrect.md)         |                                                     |
| [IsUserNameExists](sdk/IUserApi/IsUserNameExists.md)           | 判断用户名是否存在。                                |
| [NewInstance](sdk/IUserApi/NewInstance.md)()                   | 初始化 [`IUserInfo`](sdk/IUserInfo.md) 类的新实例。 |
| [Update](sdk/IUserApi/Update.md)                               | 修改用户属性。                                      |
| [Validate](sdk/IUserApi/Validate.md)                           | 验证                                                    |

## UtilsApi

工具类Api接口。

| 名称                                                            | 说明                                        |
| --------------------------------------------------------------- | ------------------------------------------- |
| [AddWaterMark](sdk/IUtilsApi/AddWaterMark.md)                   | 根据后台设置为图片添加水印。                |
| [CreateZip](sdk/IUtilsApi/CreateZip.md)                         | 压缩文件夹。                                |
| [Decrypt](sdk/IUtilsApi/Decrypt.md)                             | 根据Web.config中设置的SecretKey解密字符串。 |
| [Encrypt](sdk/IUtilsApi/Encrypt.md)                             | 根据Web.config中设置的SecretKey加密字符串。 |
| [ExtractZip](sdk/IUtilsApi/ExtractZip.md)                       | 解压缩文件夹。                              |
| [FilterSql](sdk/IUtilsApi/FilterSql.md)                         | 防Sql注入过滤。                             |
| [FilterXss](sdk/IUtilsApi/FilterXss.md)                         | 防XSS攻击过滤。                             |
| [GetAdminDirectoryUrl](sdk/IUtilsApi/GetAdminDirectoryUrl.md)   | 获取管理后台文件访问Url地址。               |
| [GetRootUrl](sdk/IUtilsApi/GetRootUrl.md)                       | 获取系统根目录访问Url地址。                 |
| [GetTemporaryFilesPath](sdk/IUtilsApi/GetTemporaryFilesPath.md) | 获取系统临时文件夹的绝对路径。              |
| [GetUploadFilePath](sdk/IUtilsApi/GetUploadFilePath.md)         | 根据后台设置获取指定文件名的上传路径。      |
| [MoveFiles](sdk/IUtilsApi/MoveFiles.md)                         | 跨站转移文件。                              |