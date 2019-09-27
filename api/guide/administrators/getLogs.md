# 获取管理员操作日志API

获取管理员操作日志列表，使用`GET`发起请求，请求地址为`/api/v1/administrators/{id}/logs`

```http
GET /api/v1/administrators/{id}/logs HTTP/1.1
```

## 请求 URI

| 参数名 | 位置  | 类型   | 必填   | 说明                                          |
| ------ | ----- | ------ | ------ | --------------------------------------------- |
| id     | path  | 整数   | **是** | 管理员Id                                      |
| apiKey | query | 字符串 | 否     | API 密钥，请参考[身份认证](authentication.md) |

## 返回

| 名称             | 类型                                                  | 说明               |
| ---------------- | ----------------------------------------------------- | ------------------ |
| 200 OK           | [UserLog](/administrators/README?id=administratorLog) | 管理员操作日志     |
| 401 Unauthorized | [Error](/error?id=error)                              | 认证错误           |
| 404 NotFound     | [Error](/error?id=error)                              | 管理员Id不存在错误 |
| 400 BadRequest   | [Error](/error?id=error)                              | 参数错误           |

## 示例

### 请求示例

```http
GET /api/v1/administrators/1/logs HTTP/1.1
X-SS-API-KEY: 7cd22002-27a7-4c5d-ba4d-a1c108a20eaf
```

### 返回示例

```json
{
  "value": [
    {
      "id": 1,
      "userName": "demo",
      "ipAddress": "localhost",
      "addDate": "2018-06-18 10:03:10",
      "action": "访问页面",
      "summary": "页面地址：http://sample.com"
    }
  ]
}
```