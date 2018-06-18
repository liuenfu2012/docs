# 修改密码API

修改用户密码，使用`POST`发起请求，请求地址为`/api/v1/users/actions/resetPassword`

```http
POST /api/v1/users/actions/resetPassword HTTP/1.1
```

## 请求 URI

参数名 | 位置 | 类型 | 必填 | 说明
------ | ------ | ------ | ------ | ------
apiKey | query | 字符串 | 否 | API 密钥，请参考[身份认证](authentication.md)

## 请求 Body

参数名 | 类型 | 必填 | 说明
------ | ------ | ------
account | 字符串 | 是 | 用户账号，可以是用户名、邮箱或者手机号
password | 字符串 | 是 | 用户老密码，需要MD5加密后传输
newPassword | 字符串 | 是 | 用户新密码，无需MD5加密，直接传输密码明文

## 返回

名称 | 类型 | 说明
------ | ------ | ------
200 OK | [User](/users/README?id=user) | 用户
401 Unauthorized | [Error](/error?id=error) | 认证错误
400 BadRequest | [Error](/error?id=error) | 参数错误

## 示例

### 请求示例

```http
POST /api/v1/users/actions/resetPassword HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "account": "demo",
  "password": "7d683abba984a7804078471700c39fb9",
  "newPassword": "password888"
}
```

### 返回示例

```json
{
  "value": {
    "id": 1,
    "userName": "demo",
    "password": "nOC/NuzOXrX95ZVeeluoeg==",
    "passwordFormat": "Encrypted",
    "passwordSalt": "ymeDeiU/CPzislPYxsx1MQ==",
    "createDate": "2018-06-17 14:18:45",
    "lastResetPasswordDate": "2018-06-17 14:18:45",
    "lastActivityDate": "2018-06-17 14:18:45",
    "countOfLogin": 0,
    "countOfFailedLogin": 0,
    "countOfWriting": 0,
    "isChecked": true,
    "isLockedOut": false,
    "displayName": "演示",
    "email": "demo@sample.com",
    "mobile": "13888888888",
    "avatarUrl": "",
    "organization": "",
    "department": "",
    "position": "",
    "gender": "",
    "birthday": "",
    "education": "",
    "graduation": "",
    "address": "",
    "weiXin": "",
    "qq": "",
    "weiBo": "",
    "interests": "",
    "signature": ""
  }
}
```