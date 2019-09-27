# 内容搜索API

内容搜索是通过Url参数完成的，使用`GET`发起请求，请求地址为站点内容列表`/api/v1/contents/{siteId}`或栏目内容列表`/api/v1/contents/{siteId}/{channelId}`，分别代表搜索整站以及搜索指定的栏目。

## 设置搜索参数

搜索参数可以是内容实体[Content](/contents/README?id=content)中存在的任意字段，系统将根据参数名称以及参数值搜索内容表，返回符合要求的内容列表。

默认系统将根据搜索参数进行严格匹配，必须等于搜索值的内容才会返回，你可以通过添加like参数指定需要进行模糊搜索的数据，系统将对这些参数进行模糊查询。

同时系统支持使用orderBy参数对内容列表进行排序。

| 参数名  | 位置  | 类型   | 默认值       | 说明                                                  |
| ------- | ----- | ------ | ------------ | ----------------------------------------------------- |
| orderBy | query | 字符串 | AddDate DESC | 返回内容列表的排序方式                                |
| like    | query | 字符串 |              | 以“,”分隔的搜索参数，代表需要对这些参数进行模糊查询 |

### 请求示例1

搜索内容标题等于“标题”的所有内容并返回结果。

```http
GET /api/v1/contents/1325?title=标题 HTTP/1.1
```

### 请求示例2

搜索内容作者等于“作者”的所有内容并返回结果。

```http
GET /api/v1/contents/1325?auhtor=作者 HTTP/1.1
```

### 请求示例3

按最后编辑时间的倒序排序并返回结果。

```http
GET /api/v1/contents/1325?orderBy=LastEditDate DESC HTTP/1.1
```

### 请求示例4

搜索内容标题包含“标题”的所有内容并返回结果。

```http
GET /api/v1/contents/1325?title=标题&like=title HTTP/1.1
```

### 请求示例5

搜索内容标题包含“文章”或者内容正文包含“内容”的所有内容并返回结果。

```http
GET /api/v1/contents/1325?title=标题&content=内容&like=title,content HTTP/1.1
```