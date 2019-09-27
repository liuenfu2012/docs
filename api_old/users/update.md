# 修改用户API

修改用户属性，使用`PUT`发起请求，请求地址为`/api/v1/users/{id}`

```http
PUT /api/v1/users/{id} HTTP/1.1
```

## 请求 URI

| 参数名 | 位置  | 类型   | 必填   | 说明                                          |
| ------ | ----- | ------ | ------ | --------------------------------------------- |
| id     | path  | 整数   | **是** | 用户Id                                        |
| apiKey | query | 字符串 | 否     | API 密钥，请参考[身份认证](authentication.md) |

## 请求 Body

| 参数名       | 类型   | 必填 | 说明           |
| ------------ | ------ | ---- |
| userName     | 字符串 | 否   | 用户账号       |
| isChecked    | 字符串 | 否   | 是否已审核用户 |
| isLockedOut  | 字符串 | 否   | 是否被锁定     |
| displayName  | 字符串 | 否   | 用户姓名       |
| email        | 字符串 | 否   | 邮箱           |
| mobile       | 字符串 | 否   | 手机号         |
| avatarUrl    | 字符串 | 否   | 头像图片路径   |
| organization | 字符串 | 否   | 组织           |
| department   | 字符串 | 否   | 部门           |
| position     | 字符串 | 否   | 职位           |
| gender       | 字符串 | 否   | 性别           |
| birthday     | 字符串 | 否   | 出生日期       |
| education    | 字符串 | 否   | 毕业院校       |
| graduation   | 字符串 | 否   | 学历           |
| address      | 字符串 | 否   | 地址           |
| weiXin       | 字符串 | 否   | 微信           |
| qq           | 字符串 | 否   | QQ             |
| weiBo        | 字符串 | 否   | 微博           |
| interests    | 字符串 | 否   | 兴趣           |
| signature    | 字符串 | 否   | 签名           |

## 返回

| 名称             | 类型                          | 说明           |
| ---------------- | ----------------------------- | -------------- |
| 200 OK           | [User](/users/README?id=user) | 用户           |
| 401 Unauthorized | [Error](/error?id=error)      | 认证错误       |
| 404 NotFound     | [Error](/error?id=error)      | 资源不存在错误 |
| 400 BadRequest   | [Error](/error?id=error)      | 参数错误       |

## 示例

### 请求示例

```http
PUT /api/v1/users/1 HTTP/1.1
Content-Type: application/json
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf

{
  "userName": "demo2"
}
```

### 返回示例

```json
{
  "value": {
    "id": 1,
    "userName": "demo2",
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