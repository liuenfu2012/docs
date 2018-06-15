# 用户查询/注册API

## 用户查询API

### 简要描述

获取满足条件的用户列表

### 请求URL

`
/api/v1/users
`

### 请求方式

GET

### 请求参数说明

参数名  | 类型  | 说明
------  | ------  | ------  | ------
apiKey | 字符串 | API 密钥
select | 字符串 | 站点Id
expand | 字符串 | 站点文件夹
filter | 字符串 | 栏目Id
orderby | 字符串 | 内容Id
top | 字符串 | 栏目索引
skip | 字符串 | 栏目名称
count | 字符串 | 栏目索引
search | 字符串 | 栏目名称

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

## 用户注册API

### 简要描述

获取链接地址，系统将根据参数计算出对应的链接地址

### 请求URL

`
/api/v1/users
`

### 请求方式

GET

### 请求参数说明

参数名  | 类型  | 说明
------  | ------  | ------  | ------
apiKey | 字符串 | API 密钥
siteId | 字符串 | 站点Id
siteDir | 字符串 | 站点文件夹
channelId | 字符串 | 栏目Id
contentId | 字符串 | 内容Id
channelIndex | 字符串 | 栏目索引
channelName | 字符串 | 栏目名称

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