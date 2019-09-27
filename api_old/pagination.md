# 列表翻页

很多时候，当您调用 SiteServer REST API 时，会返回很多结果，因此，我们需要对结果进行分页，以确保响应更容易处理。

假设你需要获取整个网站的内容列表，其结果可能是数十万页的大规模回应，这可能导致长时间的等待以及服务器性能受到影响；所以，我们在返回列表时使用了默认的限制（默认返回 20 个结果），但是你可以通过显式地设置限制参数，以确保获得指定数量的结果。

## 设置限制参数

客户端发起API请求时可以使用top和skip查询参数来指定要返回的结果和集合中的偏移量。

当客户端同时提供top和skip参数时，服务器会首先应用skip，然后在集合上应用top。

以下限制参数可用于所有获取列表的API中，如获取用户API、获取内容列表API等。

| 参数名 | 位置  | 类型 | 默认值 | 说明           |
| ------ | ----- | ---- | ------ | -------------- |
| top    | query | 整数 | 20     | 返回的结果数量 |
| skip   | query | 整数 | 0      | 集合中的偏移量 |

### 请求示例1

请求获取指定站点下的前30篇内容

```http
GET /api/v1/contents/1325?top=30 HTTP/1.1
```

### 请求示例2

请求获取指定站点下的第6到15篇内容，同时

```http
GET /api/v1/contents/1325?top=10&skip=5 HTTP/1.1
```

## 获取翻页结果

分页响应将通过在响应中包含指定的值来返回翻页所需的数据，如总条数、上一页地址、下一页地址等。缺少对应的值意味着没有其他页面可用。

| 返回结果 | 类型   | 说明                  |
| -------- | ------ | --------------------- |
| value    | 数组   | 翻页结果列表          |
| first    | 字符串 | 第一页的API访问地址   |
| prev     | 字符串 | 上一页的API访问地址   |
| next     | 字符串 | 下一页的API访问地址   |
| last     | 字符串 | 最后一页的API访问地址 |
| count    | 整数   | 总条数                |

### 响应示例

```json
{
    "value": [
        {
            "id": 2221,
            "channelId": 1344,
            "siteId": 1325,
            "addUserName": "admin",
            "lastEditUserName": "admin",
            "writingUserName": "",
            "lastEditDate": "2018-04-10 08:50:00",
            "taxis": 6,
            "groupNameCollection": "",
            "tags": "",
            "sourceId": 0,
            "referenceId": 0,
            "isChecked": "True",
            "checkedLevel": 0,
            "hits": 0,
            "hitsByDay": 0,
            "hitsByWeek": 0,
            "hitsByMonth": 0,
            "lastHitsDate": "2018-04-02 15:49:00",
            "settingsXml": "titleformatstring=True_False_False_&check_isadmin=True&check_username=admin&check_checkdate=2018-04-02 下午 3:49",
            "title": "标题6",
            "isTop": "False",
            "isRecommend": "False",
            "isHot": "True",
            "isColor": "False",
            "linkUrl": "",
            "addDate": "2018-04-02 15:49:00",
            "subTitle": "",
            "imageUrl": "http://127.0.0.1/test17/upload/images/2018/4/7765a380c3d18abd.jpg",
            "videoUrl": "",
            "fileUrl": "",
            "content": "",
            "summary": "",
            "author": "",
            "source": "",
            "titleformatstring": "True_False_False_",
            "check_isadmin": "True",
            "check_username": "admin",
            "check_checkdate": "2018-04-02 下午 3:49",
            "navigationUrl": "http://127.0.0.1/test17/news/201804/2221.html"
        },
        {
            "id": 2223,
            "channelId": 1344,
            "siteId": 1325,
            "addUserName": "admin",
            "lastEditUserName": "admin",
            "writingUserName": "",
            "lastEditDate": "2018-05-06 11:05:00",
            "taxis": 8,
            "groupNameCollection": "",
            "tags": "其他",
            "sourceId": 0,
            "referenceId": 0,
            "isChecked": "True",
            "checkedLevel": 0,
            "hits": 5,
            "hitsByDay": 2,
            "hitsByWeek": 2,
            "hitsByMonth": 2,
            "lastHitsDate": "2018-06-15 00:00:00",
            "settingsXml": "titleformatstring=False_False_False_&check_isadmin=True&check_username=admin&check_checkdate=2018-04-02 下午 3:49",
            "title": "标题8",
            "isTop": "False",
            "isRecommend": "False",
            "isHot": "True",
            "isColor": "False",
            "linkUrl": "",
            "addDate": "2018-04-02 15:49:00",
            "subTitle": "",
            "imageUrl": "http://127.0.0.1/test17/upload/images/2018/4/2a131c625f84a37d.jpg",
            "videoUrl": "@/upload/videos/2018/5/acddd7e04837d00c.mp4",
            "fileUrl": "http://127.0.0.1/test17/upload/images/2018/5/d9241fe1de65d4ea.jpg",
            "content": "<p><img src=\"@/upload/images/2018/5/de0480c38737bbde.png\"/><img src=\"@/upload/images/2018/5/213add0d1ccf20e2.jpg\" title=\"ISO9001中文.jpg\" alt=\"ISO9001中文.jpg\"/><img src=\"@/upload/images/2018/5/7d2250f2955d1c09.png\"/></p>",
            "summary": "",
            "author": "",
            "source": "",
            "titleformatstring": "False_False_False_",
            "check_isadmin": "True",
            "check_username": "admin",
            "check_checkdate": "2018-04-02 下午 3:49",
            "navigationUrl": "http://127.0.0.1/test17/news/201804/2223.html"
        }
    ],
    "first": "http://localhost/api/v1/contents/1325?top=2&skip=0",
    "prev": "http://localhost/api/v1/contents/1325?top=2&skip=0",
    "next": "http://localhost/api/v1/contents/1325?top=2&skip=4",
    "last": "http://localhost/api/v1/contents/1325?top=2&skip=6",
    "count": 8
}
```