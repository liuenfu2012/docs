# 用户登录API

注册新用户，使用`POST`发起请求，请求地址为`/api/v1/users/actions/login`，此接口可以直接访问，无需通过身份验证。

```http
POST /api/v1/users/actions/login HTTP/1.1
```

## 请求 Body

参数名 | 类型 | 必填 | 说明
------ | ------ | ------
account | 字符串 | 是 | 用户账号，可以是用户名、邮箱或者手机号
password | 字符串 | 是 | 用户密码，需要MD5加密后传输

## 返回

名称 | 类型 | 说明
------ | ------ | ------
200 OK | [User](/users/README?id=user) | 用户
401 Unauthorized | [Error](/error?id=error) | 认证错误
400 BadRequest | [Error](/error?id=error) | 参数错误

## 示例

### 请求示例

```http
POST /api/v1/users/actions/login HTTP/1.1
Content-Type: application/json

{
  "account": "demo",
  "password": "7d683abba984a7804078471700c39fb9"
}
```

### 返回示例

```json
{
  "value": {
    "id": 1,
    "userName": "demo",
    "password": "3CPlhZ8UAus=",
    "passwordFormat": "Encrypted",
    "passwordSalt": "VohMFwNz4s006ZytezfUxg==",
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