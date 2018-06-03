# 获取数据库列表

### 简要描述

获取数据库列表接口

### 请求URL

`
/api/v1/stl/sqlContents
`

### 请求方式

GET

### 请求参数说明

参数名  | 类型  | 说明
------  | ------  | ------  | ------
apiKey | 字符串 | API 密钥
queryString | 字符串 | SQL 语句

`/api/v1/stl/sqlContents`的其他参数与`<stl:sqlContents>`标签一致。

### 请求示例

`
GET /api/v1/stl/sqlContents?queryString=SELECT * FROM siteserver_Site
`

### 返回示例

`
{
    "value": [
        {
            "id": 1116,
            "siteName": "我的站点",
            "siteDir": "test2",
            "tableName": "model_Content",
            "isRoot": "False",
            "parentId": 0,
            "taxis": 7,
            "settingsXml": "charset=utf-8&configexporttype=ContentExcel&configexportperiods=0&configexportdisplayattributes=Id,Title,LinkUrl,AddDate,Hits,GroupNameCollection,Tags,FreeReadings,FullReadingPrice,PaidReadings,PaperPrice,SubTitle,ImageUrl,VideoUrl,FileUrl,Content,Summary,Author,Source&configexportischecked=All&apiurl=/api&homeurl=/home&ismultideployment=False&iscreatedoubleclick=True&siteurl=/Magazine&outersiteurl=/Magazine&innersiteurl=/Magazine&outerapiurl=/api&innerapiurl=/api&pagesize=3&configselectimagecurrenturl=upload/images&configuploadimageistitleimage=False&configuploadimagetitleimagewidth=152&configuploadimagetitleimageheight=109&configuploadimageistitleimagelesssizenotthumb=False&configuploadimageisshowimageintexteditor=False&configuploadimageislinktooriginal=False&configuploadimageissmallimage=False&configuploadimagesmallimagewidth=500&configuploadimagesmallimageheight=&configuploadimageissmallimagelesssizenotthumb=False&isseparatedweb=False&separatedweburl=http://web.chinacampus.org&issaveimageintexteditor=True&isautopageintexteditor=False&autopagewordnum=1500&iscontenttitlebreakline=False&lisautocheckkeywords=False&ischeckcontentlevel=False"
        },
        {
            "id": 1288,
            "siteName": "cc",
            "siteDir": "cc",
            "tableName": "model_Content",
            "isRoot": "False",
            "parentId": 1219,
            "taxis": 9,
            "settingsXml": "ischeckcontentlevel=False&charset=utf-8"
        },
        {
            "id": 1292,
            "siteName": "test11",
            "siteDir": "test11",
            "tableName": "model_Content",
            "isRoot": "False",
            "parentId": 0,
            "taxis": 10,
            "settingsXml": "charset=utf-8&configuploadimageistitleimage=True&configuploadimagetitleimagewidth=300&configuploadimagetitleimageheight=&configuploadimageistitleimagelesssizenotthumb=False&configuploadimageisshowimageintexteditor=True&configuploadimageislinktooriginal=False&configuploadimageissmallimage=True&configuploadimagesmallimagewidth=500&configuploadimagesmallimageheight=&configuploadimageissmallimagelesssizenotthumb=False&mingzi=SiteServer&gongsi=CMS&apiurl=/api&homeurl=/home&ismultideployment=False&iscreatedoubleclick=False&outerurl=&innerurl=&isseparatedweb=False"
        }
    ]
}
`

### 返回参数说明

参数名  | 类型  | 说明
------  | ------  | ------  | ------
value | 数组 | 返回数据库数组

### 备注

更多返回错误代码请看首页的错误代码描述