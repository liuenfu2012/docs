# Administrators 管理员API

对管理员进行增删改查等操作的API

## 管理员API

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

## 定义

### Administrator

管理员

| 字段               | 数据类型 | 数据大小 | 说明                                                                                     |
| ------------------ | -------- | -------- | ---------------------------------------------------------------------------------------- |
| Id                 | Integer  |          | 自增长主键                                                                               |
| UserName           | VarChar  | 255      | 管理员账号                                                                               |
| Password           | VarChar  | 255      | 管理员密码                                                                               |
| PasswordFormat     | VarChar  | 50       | 密码加密格式，有`Clear`、`Encrypt`及`Hash`三种，分别代表不加密、可逆加密以及不可逆加密。 |
| PasswordSalt       | VarChar  | 128      | 密钥，当PasswordFormat为`Encrypt`时使用的加密密钥                                        |
| CreationDate       | DateTime |          | 创建时间                                                                                 |
| LastActivityDate   | DateTime |          | 最后活动时间                                                                             |
| CountOfLogin       | Integer  |          | 登录次数                                                                                 |
| CountOfFailedLogin | Integer  |          | 连续登录失败次数                                                                         |
| CreatorUserName    | VarChar  | 255      | 管理员创建者                                                                             |
| IsLockedOut        | VarChar  | 18       | 是否被锁定                                                                               |
| SiteIdCollection   | VarChar  | 50       | 拥有管理权限的站点Id列表                                                                 |
| SiteId             | Integer  |          | 最后一次管理的站点Id                                                                     |
| DepartmentId       | Integer  |          | 所属部门Id，对应 [siteserver_Department](siteserver_Department.md) 表的 `Id` 字段        |
| AreaId             | Integer  |          | 所在区域Id，对应 [siteserver_Area](siteserver_Area.md) 表的 `Id` 字段                    |
| DisplayName        | VarChar  | 50       | 管理员显示名称                                                                           |
| Email              | VarChar  | 50       | 电子邮箱                                                                                 |
| Mobile             | VarChar  | 20       | 手机号码                                                                                 |