# SiteServer REST API

SiteServer REST API 为 SiteServer CMS 提供了一个基于 HTTP 的 API 调用，允许开发者通过发送和接收 JSON 对象来远程与站点进行交互。JSON 是一种开放的标准数据格式，它是轻量级的，而且是人类可读的。

当向 API 发送内容或请求时，响应将以 JSON 形式返回，这使开发人员能够从客户端 JavaScript 或外部应用程序创建、读取和更新 SiteServer CMS 内容，REST API 可以使用任何编程语言进行调用。

::: tip
此文档反映了 SiteServer REST API 的最新版本。
:::

### 为什么使用 REST API ?

SiteServer REST API 提供了一组易于使用的 HTTP 端点，可以让您以简单的 JSON 格式访问站点的数据，包括站点、栏目、内容等等。检索或更新数据就像发送 HTTP 请求一样简单。

SiteServer REST API 使开发者比以往更容易获取站点数据，通过使用 REST API，您可以更容易地构造您想要从 SiteServer 中获取数据的方式。使用 REST API 可以极大地简化 AJAX 调用，使您能够更少地花时间访问所需的数据，并花更多时间创建更好的用户体验。

你可以创建一个应用来为 SiteServer 提供一个全新的管理界面，或创造一个全新的交互式前端体验，任何能够生成 HTTP 请求和解释 JSON 的编程语言都可以通过 REST API 与 SiteServer 交互。

### 如何访问 REST API ?

SiteServer REST API 通过 URL 地址提供访问接口，为了测试是否能够访问 SiteServer REST API，你可以简单地用浏览器打开地址：

[http://example.com/api/v1/ping](http://example.com/api/v1/ping)（需要将example.com替换为真实域名）

如果请求成功，SiteServer REST API 将从服务器返回字符串 pong。

### 内容 API

| 操作                                        | 请求   | 地址                                  | 说明                           |
| ------------------------------------------- | ------ | ------------------------------------- | ------------------------------ |
| [新增内容](contents/create.md)              | POST   | v1/contents/{siteId}/{channelId}      | 新增内容                       |
| [修改内容](contents/update.md)              | PUT    | v1/contents/{siteId}/{channelId}/{id} | 修改内容                       |
| [删除内容](contents/delete.md)              | DELETE | v1/contents/{siteId}/{channelId}/{id} | 删除内容                       |
| [获取内容](contents/get.md)                 | GET    | v1/contents/{siteId}/{channelId}/{id} | 获取内容                       |
| [获取站点内容列表](contents/listSite.md)    | GET    | v1/contents/{siteId}                  | 获取整个网站的内容列表         |
| [获取栏目内容列表](contents/listChannel.md) | GET    | v1/contents/{siteId}/{channelId}      | 获取指定栏目下的内容列表       |
| [内容搜索](contents/search.md)              | GET    |                                       | 通过参数搜索满足条件的内容列表 |

### 栏目 API

| 操作                                        | 请求   | 地址                                  | 说明                           |
| ------------------------------------------- | ------ | ------------------------------------- | ------------------------------ |
| [新增内容](contents/create.md)              | POST   | v1/contents/{siteId}/{channelId}      | 新增内容                       |
| [修改内容](contents/update.md)              | PUT    | v1/contents/{siteId}/{channelId}/{id} | 修改内容                       |
| [删除内容](contents/delete.md)              | DELETE | v1/contents/{siteId}/{channelId}/{id} | 删除内容                       |
| [获取内容](contents/get.md)                 | GET    | v1/contents/{siteId}/{channelId}/{id} | 获取内容                       |
| [获取站点内容列表](contents/listSite.md)    | GET    | v1/contents/{siteId}                  | 获取整个网站的内容列表         |
| [获取栏目内容列表](contents/listChannel.md) | GET    | v1/contents/{siteId}/{channelId}      | 获取指定栏目下的内容列表       |
| [内容搜索](contents/search.md)              | GET    |                                       | 通过参数搜索满足条件的内容列表 |

### 站点 API

| 操作                                        | 请求   | 地址                                  | 说明                           |
| ------------------------------------------- | ------ | ------------------------------------- | ------------------------------ |
| [新增内容](contents/create.md)              | POST   | v1/contents/{siteId}/{channelId}      | 新增内容                       |
| [修改内容](contents/update.md)              | PUT    | v1/contents/{siteId}/{channelId}/{id} | 修改内容                       |
| [删除内容](contents/delete.md)              | DELETE | v1/contents/{siteId}/{channelId}/{id} | 删除内容                       |
| [获取内容](contents/get.md)                 | GET    | v1/contents/{siteId}/{channelId}/{id} | 获取内容                       |
| [获取站点内容列表](contents/listSite.md)    | GET    | v1/contents/{siteId}                  | 获取整个网站的内容列表         |
| [获取栏目内容列表](contents/listChannel.md) | GET    | v1/contents/{siteId}/{channelId}      | 获取指定栏目下的内容列表       |
| [内容搜索](contents/search.md)              | GET    |                                       | 通过参数搜索满足条件的内容列表 |

### 管理员 API

| 操作                                        | 请求   | 地址                                    | 说明               |
| ------------------------------------------- | ------ | --------------------------------------- | ------------------ |
| [新增管理员](administrators/create.md)      | POST   | v1/administrators                       | 注册新管理员       |
| [修改管理员](administrators/update.md)      | PUT    | v1/administrators/{id}                  | 修改管理员属性     |
| [删除管理员](administrators/delete.md)      | DELETE | v1/administrators/{id}                  | 删除管理员         |
| [获取管理员](administrators/get.md)         | GET    | v1/administrators/{id}                  | 获取管理员         |
| [获取管理员列表](administrators/list.md)    | GET    | v1/administrators                       | 获取管理员列表     |
| [管理员登录](administrators/login.md)       | POST   | v1/administrators/actions/login         | 管理员登录操作     |
| [退出登录](administrators/logout.md)        | POST   | v1/administrators/actions/logout        | 退出登录操作       |
| [修改密码](administrators/resetPassword.md) | POST   | v1/administrators/actions/resetPassword | 修改管理员登录密码 |

### 用户 API

操作 | 请求 | 地址 | 说明
------ | ------ | ------ | ------
[新增用户](users/create.md) | POST | v1/users | 注册新用户
[修改用户](users/update.md) | PUT | v1/users/{id} | 修改用户属性
[删除用户](users/delete.md) | DELETE | v1/users/{id} | 删除用户
[获取用户](users/get.md) | GET | v1/users/{id} | 获取用户
[获取用户头像](users/getAvatar.md) | GET | v1/users/{id}/avatar | 获取用户头像地址
[上传用户头像](users/updateAvatar.md) | POST | v1/users/{id}/avatar | 上传用户头像图片
[获取用户列表](users/list.md) | GET | v1/users | 获取用户列表
[用户登录](users/login.md) | POST | v1/users/actions/login | 用户登录操作
[退出登录](users/logout.md) | POST | v1/users/actions/logout | 用户退出登录
[修改密码](users/resetPassword.md) | POST | v1/users/actions/resetPassword | 修改用户登录密码
[新增用户操作日志](users/createLog.md) | POST | v1/users/actions/{id}/logs | 新增用户操作日志
[获取用户操作日志](users/getLogs.md) | GET | v1/users/{id}/logs | 获取用户操作日志

### 其他 API

操作 | 请求 | 地址 | 说明
------ | ------ | ------ | ------
[获取验证码图片](other/captchaGet.md) | GET | v1/captcha/{name} | 获取验证码图片
[验证验证码](other/captchaCheck.md) | POST | v1/captcha/{name}/actions/check | 验证验证码
[Ping 可用性](other/ping/README.md) | GET | v1/captcha/{name} | 获取验证码图片
