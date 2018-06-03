# 获取数据库值

### 简要描述

获取数据库值，系统将根据参数计算出对应的数据库值

### 请求URL

`
/api/v1/stl/sqlContent
`

### 请求方式

GET

### 请求参数说明

参数名  | 类型  | 说明
------  | ------  | ------  | ------
apiKey | 字符串 | API 密钥
queryString | 字符串 | SQL 语句
type | 字符串 | 具体字段名

`/api/v1/stl/sqlContent`的其他参数与`<stl:sqlContent>`标签一致。

### 请求示例

`
GET /api/v1/stl/sqlContent?queryString=SELECT * FROM siteserver_Site
`

### 返回示例

`
{
    "value": {
        "id": 1072,
        "siteName": "test10",
        "siteDir": "test10",
        "tableName": "model_Content",
        "isRoot": "False",
        "parentId": 0,
        "taxis": 5,
        "settingsXml": "charset=utf-8&logo=@/upload/images/2018/1/20164526348.png&configuploadimageistitleimage=False&configuploadimagetitleimagewidth=300&configuploadimagetitleimageheight=&configuploadimageistitleimagelesssizenotthumb=False&configuploadimageisshowimageintexteditor=False&configuploadimageislinktooriginal=False&configuploadimageissmallimage=True&configuploadimagesmallimagewidth=500&configuploadimagesmallimageheight=&configuploadimageissmallimagelesssizenotthumb=False&ismultideployment=False&outerurl=&innerurl=&apiurl=/api&homeurl=/home&isseparatedweb=False&iscreatedoubleclick=False"
    }
}
`

### 返回参数说明

参数名  | 类型  | 说明
------  | ------  | ------  | ------
value | 对象 | 根据type参数的不同，返回不同的value值，如果不传type参数，将返回整个数据库对象

### 备注

更多返回错误代码请参考错误代码描述