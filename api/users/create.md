## 新增用户API

注册新用户，使用`POST`发起请求，请求地址为`/api/v1/users`

```
POST /api/v1/users
```

### Url参数

参数名  | 类型 | 必填  | 说明
------  | ------  | ------  | ------
apiKey | 字符串 | 否 | API 密钥，请参考[身份认证](authentication.md)

### 请求Body

参数名 | 类型 | 说明
------ | ------ | ------
Id | 整数 | 自增长主键
UserName | 字符串 | 用户账号
Password | 字符串 | 用户密码
PasswordFormat | 字符串 | 密码加密格式，有`Clear`、`Encrypt`及`Hash`三种，分别代表不加密、可逆加密以及不可逆加密。
PasswordSalt | 字符串 | 密钥，当PasswordFormat为`Encrypt`时使用的加密密钥
CreateDate | 日期 | 创建时间
LastResetPasswordDate | 日期 | 最后一次重设密码时间
LastActivityDate | 日期 | 最后活动时间
CountOfLogin | 整数 | 登录次数
CountOfFailedLogin | 整数 | 连续登录失败次数
CountOfWriting | 整数 | 投稿次数
IsChecked | 字符串 | 是否已审核用户
IsLockedOut | 字符串 | 是否被锁定
DisplayName | 字符串 | 用户姓名
Email | 字符串 | 邮箱
Mobile | 字符串 | 手机号
AvatarUrl | 字符串 | 头像图片路径
Organization | 字符串 | 组织
Department | 字符串 | 部门
Position | 字符串 | 职位
Gender | 字符串 | 性别
Birthday | 字符串 | 出生日期
Education | 字符串 | 毕业院校
Graduation | 字符串 | 学历
Address | 字符串 | 地址
WeiXin | 字符串 | 微信
Qq | 字符串 | QQ
WeiBo | 字符串 | 微博
Interests | 字符串 | 兴趣
Signature | 字符串 | 签名

`/api/v1/users`的其他参数与`<stl:a>`标签一致。

### 请求示例

`
GET /api/v1/users?siteId=1
`

### 返回示例

`
{
  "value": "/site/index.html"
}
`

### 返回参数说明

参数名  | 类型  | 说明
------  | ------  | ------  | ------
value | 字符串 | 链接地址

### 备注

更多返回错误代码请参考错误代码描述