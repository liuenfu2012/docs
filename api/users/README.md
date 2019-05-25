# Users 用户API

对用户进行增删改查等操作的API

## 用户API

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

## 定义

### User

用户

字段 | 数据类型 | 数据大小 | 说明
------ | ------ | ------ | ------
Id | Integer | | 自增长主键
UserName | VarChar | 255 | 用户账号
Password | VarChar | 255 | 用户密码
PasswordFormat | VarChar | 50 | 密码加密格式，有`Clear`、`Encrypt`及`Hash`三种，分别代表不加密、可逆加密以及不可逆加密。
PasswordSalt | VarChar | 128 | 密钥，当PasswordFormat为`Encrypt`时使用的加密密钥
CreateDate | DateTime | | 创建时间
LastResetPasswordDate | DateTime | | 最后一次重设密码时间
LastActivityDate | DateTime | | 最后活动时间
CountOfLogin | Integer | | 登录次数
CountOfFailedLogin | Integer | | 连续登录失败次数
CountOfWriting | Integer | | 投稿次数
IsChecked | VarChar | 18 | 是否已审核用户
IsLockedOut | VarChar | 18 | 是否被锁定
DisplayName | VarChar | 255 | 用户姓名
Email | VarChar | 255 | 邮箱
Mobile | VarChar | 20 | 手机号
AvatarUrl | VarChar | 200 | 头像图片路径
Organization | VarChar | 255 | 组织
Department | VarChar | 255 | 部门
Position | VarChar | 255 | 职位
Gender | VarChar | 50 | 性别
Birthday | VarChar | 50 | 出生日期
Education | VarChar | 255 | 毕业院校
Graduation | VarChar | 255 | 学历
Address | VarChar | 255 | 地址
WeiXin | VarChar | 255 | 微信
Qq | VarChar | 50 | QQ
WeiBo | VarChar | 255 | 微博
Interests | VarChar | 255 | 兴趣
Signature | VarChar | 255 | 签名

### UserLog

用户操作日志

字段 | 数据类型 | 数据大小 | 说明
------ | ------ | ------ | ------
Id | Integer | | 自增长主键
UserName | VarChar | 255 | 用户账号
IpAddress | VarChar | 50 | Ip地址
AddDate | DateTime | | 添加时间
Action | VarChar | 255 | 动作
Summary | VarChar | 255 | 描述