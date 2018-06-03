# 获取栏目值

### 简要描述

获取栏目值，系统将根据参数计算出对应的栏目值

### 请求URL

`
/api/v1/stl/channel
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

`/api/v1/stl/channel`的其他参数与`<stl:channel>`标签一致。

### 请求示例

`
GET /api/v1/stl/channel?siteId=1
`

### 返回示例

`
{
  "value": {
    "id": 1,
    "channelName": "首页",
    "siteId": 1,
    "contentModelPluginId": "",
    "contentRelatedPluginIds": "",
    "parentId": 0,
    "parentsPath": "",
    "parentsCount": 0,
    "childrenCount": 66,
    "isLastNode": false,
    "indexName": "首页",
    "groupNameCollection": "",
    "taxis": 1,
    "addDate": "2018-02-27 14:48:50",
    "imageUrl": "",
    "content": "",
    "contentNum": 0,
    "filePath": "",
    "channelFilePathRule": "",
    "contentFilePathRule": "",
    "linkUrl": "",
    "linkType": "None",
    "channelTemplateId": 0,
    "contentTemplateId": 0,
    "keywords": "",
    "description": "",
    "additional": {
      "isChannelAddable": true,
      "isContentAddable": true,
      "isChannelCreatable": true,
      "isContentCreatable": true,
      "isCreateChannelIfContentChanged": true,
      "createChannelIDsIfContentChanged": "",
      "contentAttributesOfDisplay": "",
      "transType": 5,
      "transSiteId": 0,
      "transChannelIds": "",
      "transChannelNames": "",
      "transIsAutomatic": false,
      "transDoneType": 0,
      "isPreviewContents": false,
      "defaultTaxisType": "OrderByTaxisDesc"
    },
    "attributes": {
      "isChannelAddable": true,
      "isContentAddable": true,
      "isChannelCreatable": true,
      "isContentCreatable": true,
      "isCreateChannelIfContentChanged": true,
      "createChannelIDsIfContentChanged": "",
      "contentAttributesOfDisplay": "",
      "transType": 5,
      "transSiteId": 0,
      "transChannelIds": "",
      "transChannelNames": "",
      "transIsAutomatic": false,
      "transDoneType": 0,
      "isPreviewContents": false,
      "defaultTaxisType": "OrderByTaxisDesc"
    }
  }
}
`

### 返回参数说明

参数名  | 类型  | 说明
------  | ------  | ------  | ------
value | 对象 | 根据type参数的不同，返回不同的value值，如果不传type参数，将返回整个栏目对象

详细字段请参考 [栏目表](https://docs.siteserver.cn/model#/siteserver_Channel)

### 备注

更多返回错误代码请参考错误代码描述