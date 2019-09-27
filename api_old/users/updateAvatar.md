# 上传用户头像API

上传用户头像，使用`POST`发起请求，请求地址为`/api/v1/users/{id}/avatar`

```http
POST /api/v1/users/{id}/avatar HTTP/1.1
```

## 请求 URI

| 参数名 | 位置  | 类型   | 必填   | 说明                                          |
| ------ | ----- | ------ | ------ | --------------------------------------------- |
| id     | path  | 整数   | **是** | 用户Id                                        |
| apiKey | query | 字符串 | 否     | API 密钥，请参考[身份认证](authentication.md) |

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
POST /api/v1/users/1008/avatar HTTP/1.1
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
Content-Type: multipart/form-data;
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
    "avatarUrl": "http://localhost/SiteFiles/UserFiles/demo/1717231727.png",
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