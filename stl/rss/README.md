---
sidebar: auto
---

# &lt;stl:rss&gt; Rss订阅

```html
<stl:rss
    channelIndex="栏目索引"
    channelName="栏目名称"
    scope="内容范围"
    groupChannel="指定栏目组"
    groupChannelNot="排除栏目组"
    groupContent="指定内容组"
    groupContentNot="排除内容组"
    tags="指定标签"
    title="Rss订阅标题"
    description="Rss订阅摘要"
    totalNum="显示内容数目"
    startNum="从第几条信息开始显示"
    order="排序"
    isTop="仅显示置顶内容"
    isRecommend="仅显示推荐内容"
    isHot="仅显示热点内容"
    isColor="仅显示醒目内容">
</stl:rss>
```

## 说明

通过 stl:rss 标签在模板中生成Rss阅读器能够浏览的Rss订阅

&lt;stl:rss&gt; 通常在以 .xml 文件后缀结尾的单页模板中生成，用于 Rss 阅读器订阅栏目下的内容列表信息。

&lt;stl:rss&gt; 标签对应的实体为{stl:rss}。

## 属性

| 属性                                           | 说明                 |
|------------------------------------------------|----------------------|
| [channelIndex](#channelindex-栏目索引)         | 栏目索引             |
| [channelName](#channelname-栏目名称)           | 栏目名称             |
| [scope](#scope-内容范围)                       | 内容范围             |
| [groupChannel](#groupchannel-指定栏目组)       | 指定栏目组           |
| [groupChannelNot](#groupchannelnot-排除栏目组) | 排除栏目组           |
| [groupContent](#groupcontent-指定内容组)       | 指定内容组           |
| [groupContentNot](#groupcontentnot-排除内容组) | 排除内容组           |
| [tags](#tags-指定标签)                         | 指定标签             |
| [title](#title-rss订阅标题)                    | Rss订阅标题          |
| [description](#description-rss订阅摘要)        | Rss订阅摘要          |
| [totalNum](#totalnum-显示内容数目)             | 显示内容数目         |
| [startNum](#startnum-从第几条信息开始显示)     | 从第几条信息开始显示 |
| [order](#order-排序)                           | 排序                 |
| [isTop](#istop-仅显示置顶内容)                 | 仅显示置顶内容       |
| [isRecommend](#isrecommend-仅显示推荐内容)     | 仅显示推荐内容       |
| [isHot](#ishot-仅显示热点内容)                 | 仅显示热点内容       |
| [isColor](#iscolor-仅显示醒目内容)             | 仅显示醒目内容       |

### channelIndex - 栏目索引

栏目索引

### channelName - 栏目名称

栏目名称

### scope - 内容范围

内容范围。此属性只可属于以下可能的取值的一种。

- `"Self"` 只显示本栏目下的所有内容
- `"Children"` 只显示下一极子栏目下的所有内容
- `"SelfAndChildren"` 显示本级栏目及下一极子栏目下的所有内容
- `"Descendant"` 显示所有级别的子栏目下的所有内容
- `"All"` 显示本级栏目及所有级别子栏目下的所有内容

### groupChannel - 指定栏目组

栏目组别，如设置此属性，则只显示指定栏目组别的内容列表。

### groupChannelNot - 排除栏目组

非栏目组别，如设置此属性，则只显示不等于指定栏目组别的内容列表。

### groupContent - 指定内容组

内容组别，如设置此属性，则只显示指定内容组别的内容列表。

### groupContentNot - 排除内容组

非内容组别，如设置此属性，则只显示不等于内容组别的内容列表。

### tags - 指定标签

仅显示指定标签的内容，多个标签用","分隔。

### title - Rss订阅标题

Rss 订阅标题

### description - Rss订阅摘要

Rss 订阅摘要

### totalNum - 显示内容数目

设置一共显示多少条信息，0 代表显示所有信息。

### startNum - 从第几条信息开始显示

1 从第几条信息开始显示，默认从第一条信息开始显示。

### order - 排序

内容排序

### isTop - 仅显示置顶内容

是否只显示置顶（非置顶）内容。

- `"true"` 仅显示置顶的内容
- `"false"` 仅显示非置顶的内容

### isRecommend - 仅显示推荐内容

是否只显示推荐（非推荐）内容。

- `"true"` 仅显示推荐的内容
- `"false"` 仅显示非推荐的内容

### isHot - 仅显示热点内容

是否只显示热点（非热点）内容。

- `"true"` 仅显示热点的内容
- `"false"` 仅显示非热点的内容

### isColor - 仅显示醒目内容

是否只显示醒目（非醒目）内容。

- `"true"` 仅显示醒目的内容
- `"false"` 仅显示非醒目的内容

## 示例

### 生成对栏目的 Rss 订阅

下面的例子生成对栏目"新闻"的 Rss 订阅。

```html
<stl:rss channelIndex="新闻"></stl:rss>
```

解析后的 HTML 代码：

```html
<!--?xml version="1.0" encoding="utf-8"?-->
<rss version="2.0">
  <channel>
    <title>新闻</title>
    <description>新闻</description>
    <link>javascript:;
    <docs>http://backend.userland.com/rss</docs>
    <generator>RSS.NET: http://www.rssdotnet.com/</generator>
    <item>
      <title>我是带图片的内容</title>
      <description>有效解决政府在信息公开工作建设中面临的问题，保障了政府信息公开体系的建设效率，为各级政府机构快速建立政府信息公开提供了技术支持。&nbsp;&nbsp;</description>
      <link>/news/4.html
      <pubdate>Fri, 07 Jun 2013 16:42:00 GMT</pubdate>
    </item>
    <item>
      <title>我也是带图片的内容</title>
      <description>我也是带图片的内容</description>
      <link>/news/3.html
      <pubdate>Fri, 07 Jun 2013 16:44:00 GMT</pubdate>
    </item>
    <item>
      <title>我也是带图片的内容</title>
      <description>我也是带图片的内容</description>
      <link>/news/2.html
      <pubdate>Fri, 07 Jun 2013 16:44:00 GMT</pubdate>
    </item>
    <item>
      <title>我是带图片的内容</title>
      <description>有效解决政府在信息公开工作建设中面临的问题，保障了政府信息公开体系的建设效率，为各级政府机构快速建立政府信息公开提供了技术支持。&nbsp;&nbsp;</description>
      <link>/news/1.html
      <pubdate>Fri, 07 Jun 2013 16:42:00 GMT</pubdate>
    </item>
  </channel>
</rss>
```
