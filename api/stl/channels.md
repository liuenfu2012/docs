# 获取栏目列表

### 简要描述

获取栏目列表接口

### 请求URL

`
/api/v1/stl/channels
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

`/api/v1/stl/channels`的其他参数与`<stl:channels>`标签一致。

### 请求示例

`
GET /api/v1/stl/channels?siteId=1
`

### 返回示例

`
{
  "value": [
    {
      "id": 33,
      "channelName": "通知公告",
      "siteId": 32,
      "contentModelPluginId": "",
      "contentRelatedPluginIds": "",
      "parentId": 32,
      "parentsPath": "32",
      "parentsCount": 1,
      "childrenCount": 0,
      "isLastNode": false,
      "indexName": "通知公告",
      "groupNameCollection": "",
      "taxis": 2,
      "addDate": "2017-09-13 10:50:23",
      "imageUrl": "@/images/link_bn.jpg",
      "content": "",
      "contentNum": 5,
      "filePath": "",
      "channelFilePathRule": "",
      "contentFilePathRule": "",
      "linkUrl": "",
      "linkType": "None",
      "channelTemplateId": 21,
      "contentTemplateId": 34,
      "keywords": "",
      "description": "",
      "attributes": {
        "isChannelAddable": true,
        "isContentAddable": true,
        "isChannelCreatable": true,
        "isContentCreatable": true,
        "isCreateChannelIfContentChanged": true,
        "createChannelIDsIfContentChanged": "",
        "contentAttributesOfDisplay": "SubTitle",
        "transType": 5,
        "transSiteId": 0,
        "transChannelIds": "",
        "transChannelNames": "",
        "transIsAutomatic": false,
        "transDoneType": 0,
        "isPreviewContents": false,
        "defaultTaxisType": "OrderByTaxisDesc"
      }
    },
    {
      "id": 34,
      "channelName": "特别报道",
      "siteId": 32,
      "contentModelPluginId": "",
      "contentRelatedPluginIds": "",
      "parentId": 32,
      "parentsPath": "32",
      "parentsCount": 1,
      "childrenCount": 0,
      "isLastNode": false,
      "indexName": "特别报道",
      "groupNameCollection": "m_sitemap",
      "taxis": 3,
      "addDate": "2017-09-13 10:50:24",
      "imageUrl": "@/images/link_bn.jpg",
      "content": "",
      "contentNum": 38,
      "filePath": "",
      "channelFilePathRule": "",
      "contentFilePathRule": "",
      "linkUrl": "",
      "linkType": "None",
      "channelTemplateId": 21,
      "contentTemplateId": 22,
      "keywords": "",
      "description": "",
      "attributes": {
        "isChannelAddable": true,
        "isContentAddable": true,
        "isChannelCreatable": true,
        "isContentCreatable": true,
        "isCreateChannelIfContentChanged": true,
        "createChannelIDsIfContentChanged": "",
        "contentAttributesOfDisplay": "LastEditDate",
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
  ]
}
`

### 返回参数说明

参数名  | 类型  | 说明
------  | ------  | ------  | ------
value | 数组 | 返回栏目数组

详细字段请参考 [栏目表](https://docs.siteserver.cn/model#/siteserver_Channel)

### 备注

更多返回错误代码请看首页的错误代码描述