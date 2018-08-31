# STL 基础

## 定义

STL 语言全称称为 SiteServer 模版语言（SiteServer Template Language），是一种您可以用来创建展示模版的服务器端语言。

和 HTML 语言一样，STL 语言也是一种标准通用标记语言，采用与 HTML 语言一致的语法和规则。STL 通过标记符号（元素及实体）来标记要调取并展示的各种网站数据及功能，通过 SiteServer 解析引擎将对应标记转换为 HTML 语言并在服务器中生成对应的静态页面文件。

## STL 语言规则

SiteServer 模版语言制作并不复杂，但功能强大，其主要特点如下：

一、**不区分大小写**

STL 语言是不区分大小写的。和 HTML 语言一样，`<stl:a>` 和 `<STL:A>` 是相同的。

二、**结束标记可以省略**

与 HTML 一样，STL 可以省去任何结束标记。例如`<stl:a></stl:a>`与`<stl:a />`是一致的。

三、**标签可以嵌套**

与 HTML 一样，STL 的标签可以相互嵌套。例如`<stl:a><stl:content type="title"></stl:content></stl:a>`。
