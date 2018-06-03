# 获取内容列表

### 简要描述

获取内容列表接口

### 请求URL

`
/api/v1/stl/contents
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
channelIndex | 字符串 | 栏目索引
channelName | 字符串 | 栏目名称

`/api/v1/stl/contents`的其他参数与`<stl:contents>`标签一致。

### 请求示例

`
GET /api/v1/stl/contents?siteId=1&channelId=1118
`

### 返回示例

`
{
  "value": [
    {
      "id": 1525,
      "channelId": 1118,
      "siteId": 1,
      "addUserName": "admin",
      "lastEditUserName": "admin",
      "writingUserName": "",
      "lastEditDate": "2018-05-21 10:13:00",
      "taxis": 2000000001,
      "groupNameCollection": "",
      "tags": "",
      "sourceId": 0,
      "referenceId": 0,
      "isChecked": true,
      "checkedLevel": 0,
      "hits": 40,
      "hitsByDay": 1,
      "hitsByWeek": 5,
      "hitsByMonth": 40,
      "lastHitsDate": "2018-05-23 00:00:00",
      "title": "雪山深处， 永远热泪盈眶的年轻",
      "isTop": true,
      "isRecommend": true,
      "isHot": true,
      "isColor": true,
      "addDate": "2018-02-23 10:32:00",
      "linkUrl": "",
      "settingsXml": "comments=0&photos=0&freereadings=&paidreadings=&fullreadingprice=&paperprice=&titleformatstring=False_False_False_&check_isadmin=True&check_username=admin&check_checkdate=2018-05-21 10:13&check_reasons="
    },
    {
      "id": 1524,
      "channelId": 1118,
      "siteId": 1,
      "addUserName": "admin",
      "lastEditUserName": "admin",
      "writingUserName": "",
      "lastEditDate": "2018-02-27 15:45:00",
      "taxis": 1,
      "groupNameCollection": "",
      "tags": "",
      "sourceId": 0,
      "referenceId": 0,
      "isChecked": true,
      "checkedLevel": 0,
      "hits": 2,
      "hitsByDay": 2,
      "hitsByWeek": 2,
      "hitsByMonth": 2,
      "lastHitsDate": "2018-05-06 00:00:00",
      "title": "京津冀大学生舞热冰雪白飘带",
      "isTop": true,
      "isRecommend": true,
      "isHot": true,
      "isColor": true,
      "addDate": "2018-02-22 10:51:00",
      "linkUrl": "",
      "settingsXml": "comments=0&photos=0&freereadings=&paidreadings=&fullreadingprice=&paperprice=&titleformatstring=False_False_False_&check_isadmin=True&check_username=雪之浪漫&check_checkdate=2018-02-22 11:01"
    }
  ]
}
`

### 返回参数说明

参数名  | 类型  | 说明
------  | ------  | ------  | ------
value | 数组 | 返回内容数组

详细字段请参考 [内容表](https://docs.siteserver.cn/model#/model_Content)

### 备注

更多返回错误代码请看首页的错误代码描述