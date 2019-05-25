# 验证验证码API

验证验证码，使用`POST`发起请求，请求地址为`/api/v1/captcha/{name}/actions/check`

```http
POST /api/v1/captcha/{name}/actions/check HTTP/1.1
```

## 请求 URI

| 参数名 | 位置  | 类型   | 必填   | 说明                                          |
| ------ | ----- | ------ | ------ | --------------------------------------------- |
| name   | path  | 字符串 | **是** | 验证码名称                                    |
| apiKey | query | 字符串 | 否     | API 密钥，请参考[身份认证](authentication.md) |

## 请求 Body

| 参数名  | 类型   | 必填   | 说明   |
| ------- | ------ | ------ |
| captcha | 字符串 | **是** | 验证码 |

## 返回

| 名称   | 类型   | 说明                           |
| ------ | ------ | ------------------------------ |
| 200 OK | 布尔值 | 返回表示验证码是否正确的布尔值 |

## 示例

### 请求示例

```http
POST /api/v1/captcha/yzm/actions/check HTTP/1.1
Content-Type: application/json

{
  "captcha": "7d3g"
}
```

### 返回示例

```json
{
  "value": true
}
```