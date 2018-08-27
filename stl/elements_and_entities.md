# 元素与实体

## 概念

有两个通用术语用来描述 STL 语言的组成部分：STL 标签 和 STL 实体。

STL 标签的作用是在模板页面中插入各种标签，如栏目属性 `<stl:channel>`、内容列表 `<stl:contents>` 等，STL 实体的作用是在 HTML 标签或 STL 标签的属性中插入信息。

STL 标签是左尖括号（<）和右尖括号（>）以及位于二者之间的所有内容。有开始标记（例如 `<stl:a>`）和结束标记（例如 `</stl:a>`）。STL 标签与 HTML 标签的区别在于所有标记都以 stl:作为名称空间开头。

STL 实体是左大括号（{）和右大括号（}）以及位于二者之间的所有内容。有开始标记和结束标记（例如 {Stl.SiteName}）

STL 实体能够嵌入到 HTML 语言或 STL 语言的任何位置，（例如内容模版中 `<stl:a title="{Content.Title}"></stl:a>`）

## 实体说明

STL 实体是左大括号（{）和右大括号（}）以及位于二者之间的所有内容。有开始标记和结束标记（例如 {Stl.SiteName}）。

STL 实体能够嵌入到 HTML 语言或 STL 语言的任何位置，（例如内容模版中 <stl:a title="{Content.Title}"></stl:a>）。

STL 其余实体分为通用实体（{Stl.开头）、内容实体（{Content.开头）、栏目实体（{Channel.开头）、评论实体（{Comment.开头）以及数据库实体（{Sql.开头）。

通用实体与<stl:value>元素相同，<stl:value type="xyz"></stl:value>等价于{Stl.xyz}，请参考<stl:value> 标签。通用实体能在任何地方解析。

内容实体与<stl:content>元素相同，<stl:content type="xyz"></stl:content>等价于{Content.xyz}，请参考<stl:content> 标签。内容实体只能在内容模板中或<stl:contents> 元素内部解析。

栏目实体与<stl:channel>元素相同，<stl:channel type="xyz"></stl:channel>等价于{Channel.xyz}，请参考<stl:channel> 标签。栏目实体能在任何地方解析。

评论实体与<stl:comment>元素相同，<stl:comment type="xyz"></stl:comment>等价于{Comment.xyz}，请参考<stl:comment> 标签。评论实体只能在评论上下文中解析。

数据库实体与<stl:sqlContent>元素相同，<stl:sqlContent type="xyz"></stl:sqlContent>等价于{Sql.xyz}，请参考<stl:sqlContent> 标签。数据库实体只能在数据库查询上下文中解析。

### 标签转换为实体

所有 STL 元素均有对应实体，将元素“<”替换为“{”，“>”替换为“}”即为对应实体，实体中属性采用单引号或者不带引号。如内容值元素：

```html
<stl:content type="Title" wordNum="20"></stl:content>
```

对应实体为

```html
{stl:content type='Title' wordNum='20'}
```

或

```html
{stl:content type=Title wordNum=20}
```

## 示例

STL 标签示例：`<stl:a channelName="栏目名称"><stl:channel type="Title"></stl:channel></stl:a>`

STL 实体示例：`{Stl.SiteName}`
