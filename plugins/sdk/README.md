# SDK 参考

支持平台：

.NET Framework 4.0，.NET Framework 4.5，.NET Core 2.0。

源码地址：

[https://github.com/siteserver/SiteServer.Plugin](https://github.com/siteserver/SiteServer.Plugin)

最新版本：

[![NuGet](https://img.shields.io/nuget/v/SiteServer.Plugin.svg)](https://www.nuget.org/packages/SiteServer.Plugin)

| public type | description |
| --- | --- |
| class [ContentEventArgs](sdk/ContentEventArgs.md) | 为内容操作事件提供数据 |
| class [ContentFormLoadEventArgs](sdk/ContentFormLoadEventArgs.md) | 为内容编辑（新增）页面的载入事件提供数据。 |
| delegate [ContentFormLoadEventHandler](sdk/ContentFormLoadEventHandler.md) | 表示将用于处理内容编辑（新增）页面的载入事件的方法。 |
| class [ContentFormSubmitEventArgs](sdk/ContentFormSubmitEventArgs.md) | 为内容编辑（新增）页面的提交事件提供数据。 |
| class [ContentTranslateEventArgs](sdk/ContentTranslateEventArgs.md) | 为内容转移事件提供数据 |
| class [DatabaseType](sdk/DatabaseType.md) | 系统支持的数据库类型 |
| class [DataType](sdk/DataType.md) | 系统支持的数据库数据类型 |
| class [DataTypeConverter](sdk/DataTypeConverter.md) |  |
| interface [IAdminApi](sdk/IAdminApi.md) | 管理员及权限Api接口 |
| interface [IAdministratorInfo](sdk/IAdministratorInfo.md) | 管理员实体接口。 对应数据库中的siteserver_Administrator表。 |
| interface [IApiCollection](sdk/IApiCollection.md) | 插件可调用的Api集合接口。 |
| interface [IAttributes](sdk/IAttributes.md) | 可扩展属性的对象接口。 系统以键/值对的方式存储数据，键不区分大小写。 |
| interface [IChannelApi](sdk/IChannelApi.md) | 栏目Api接口。 |
| interface [IChannelInfo](sdk/IChannelInfo.md) | 栏目实体接口。 对应数据库中的siteserver_Channel表。 |
| interface [IConfigApi](sdk/IConfigApi.md) | 插件及系统配置Api接口。 |
| interface [IContentApi](sdk/IContentApi.md) | 内容Api接口。 |
| interface [IContentContext](sdk/IContentContext.md) | 内容事件关联的上下文。 |
| interface [IContentInfo](sdk/IContentInfo.md) | 内容实体接口。 内容表默认名称为model_Content，SiteServer CMS 后台可以新建新的内容表，或者修改现有内容表的字段。 |
| interface [IDatabaseApi](sdk/IDatabaseApi.md) | 数据库操作Api接口。 |
| interface [IEnvironment](sdk/IEnvironment.md) | 插件运行环境接口。 |
| interface [IJobContext](sdk/IJobContext.md) | 包含SiteServer Cli命令行执行任务时的上下文信息。 |
| interface [ILogInfo](sdk/ILogInfo.md) | 日志实体接口。 |
| interface [IMetadata](sdk/IMetadata.md) | 插件元数据接口。 |
| class [Initializer](sdk/Initializer.md) | 插件初始化类，此类的方法由系统调用，在插件开发时请勿直接使用。 |
| class [InputListItem](sdk/InputListItem.md) | 表示列表中的数据项。 |
| class [InputStyle](sdk/InputStyle.md) | 表示表单的输入样式。 |
| class [InputType](sdk/InputType.md) | 表单的输入类型。 |
| interface [IParseApi](sdk/IParseApi.md) | STL解析Api接口。 |
| interface [IParseContext](sdk/IParseContext.md) | STL解析上下文。 |
| interface [IPluginApi](sdk/IPluginApi.md) | 插件Api接口。 |
| interface [IRequest](sdk/IRequest.md) | 访问插件时的认证请求。 |
| interface [IService](sdk/IService.md) | 插件服务注册接口。 插件服务注册接口是插件机制的核心，用于定义插件能够提供的各种服务，一个方法对应一个事件或者一个功能。 |
| interface [ISiteApi](sdk/ISiteApi.md) | 站点Api接口。 |
| interface [ISiteInfo](sdk/ISiteInfo.md) | 站点实体接口。 对应数据库中的siteserver_Site表。 |
| interface [IUserApi](sdk/IUserApi.md) | 用户Api接口。 |
| interface [IUserInfo](sdk/IUserInfo.md) | 用户实体接口。 |
| interface [IUtilsApi](sdk/IUtilsApi.md) | 工具类Api接口。 |
| class [Menu](sdk/Menu.md) | 插件菜单。 插件菜单可显示在系统头部、左侧或者内容列表中。 |
| class [ParseEventArgs](sdk/ParseEventArgs.md) | 为STL解析事件提供数据。 |
| abstract class [PluginBase](sdk/PluginBase.md) | 插件父类，所有插件必须继承此类并实现Startup方法。 |
| class [RestApiEventArgs](sdk/RestApiEventArgs.md) | Rest Api |
| delegate [RestApiEventHandler](sdk/RestApiEventHandler.md) | 表示将用于处理Rest Api请求事件的方法。 |
| class [TableColumn](sdk/TableColumn.md) | 数据库表字段信息。 |
| class [TemplateType](sdk/TemplateType.md) | 系统支持的模板类型。 |
| class [ValidateType](sdk/ValidateType.md) | 表单输入的验证规则类型。 |
