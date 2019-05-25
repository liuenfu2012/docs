# 关键概念

如果你以前从未编写过 SiteServer CMS 插件，你可能会有一些问题。我们在这里列出了一些最常见的问题以供参考。

## 我需要用什么工具来开发插件？

开发 SiteServer CMS 插件需要使用Visual Studio开发工具，除此之外不需要其他工具。

## 插件能

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