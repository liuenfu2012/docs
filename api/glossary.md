# 关键概念

为了开始使用SiteServer REST API，我们将分解一些与API相关的关键概念和术语:

- RESTful
- URL
- 请求
- 响应

这些概念在使用和理解SiteServer REST API方面都扮演着重要的角色。让我们简单地把它们分解一下，以便以后我们可以更深入地探讨它们。

## RESTful

SiteServer REST API采用RESTful 作为API标准，其具体实现遵循四个基本设计原则：

- 显式地使用 HTTP 方法（GET、PUT、POST 、DELETE）。
- 无状态。
- 公开目录结构式的 URI。
- 传输 JavaScript Object Notation (JSON)。

## URL

URL是访问API的最终地址，URL由`域名 + api + 版本 + 路径`组成，访问不同的URL将获取或修改不同的数据。

例如，通过URL http://example.com/api/v1/stl/sites 可以获取到站点的列表，其中域名为 http://example.com/ ，版本为v1，路径为/stl/sites。

URL可以带参数，例如，通过URL http://example.com/api/v1/stl/channels?siteId=1 可以获取到站点Id为1的栏目的列表。

## 请求

可以向 SiteServer REST API发起GET, POST, PUT, 以及 DELETE 四种不同的请求，每种请求的含义如下：

功能  | 类型
------  | ------
读取 | GET
创建 | POST
更新 | PUT
删除 | DELETE

请求就像是动词，而URL就像是名词，把两者相关联就形成了对行为的逻辑表达 — 例如， GET 这个记录，DELETE 那条记录。

## 响应

响应是你从REST API返回的数据，响应可以返回所需的数据，也可以用来返回错误。