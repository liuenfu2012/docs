# &lt;stl:search&gt; 搜索

```html
<stl:search isAllSites="是否对全部站点进行搜索" siteName="站点名称" siteDir="站点文件夹" siteIds="站点Id列表" channelIndex="栏目索引" channelName="栏目名称" channelIds="栏目Id列表" type="搜索类型" word="搜索关键词" dateAttribute="搜索时间字段" dateFrom="搜索开始时间" dateTo="搜索结束时间" since="搜索时间段" pageNum="每页展示的内容数目" isHighlight="是否关键字高亮"></stl:search>
```

## 说明

通过 stl:search 标签在模板中展示搜索结果

stl:search 标签有默认展示方式和自定义展示方式两种表现形式。如果 &lt;stl:search&gt; 不包含子标签则采用默认展示方式展示搜索提交表单、如果 &lt;stl:search&gt; 包含子标签则采用自定义的内容展示搜索提交表单。

&lt;stl:search&gt; 标签对应的实体为{stl:search}。

## 页面参数

上表对应的属性均可作为页面参数传递给 &lt;stl:search&gt; 标签，系统将首选页面参数值，如果未传参数，系统再从 &lt;stl:search&gt; 属性取值。

示例：/utils/search.html?word=中国&type=title&pageNum=10将优先于 &lt;stl:search type="title,content" pageNum="20"&gt;。

## 子标签

| 子标签                  | 说明                               |
| ----------------------- | ---------------------------------- |
| [stl:loading](loading/) | 正在搜索时的展示模板，可以省略     |
| [stl:yes](yes/)         | 搜索出内容时的展示模板，可以省略   |
| [stl:no](no/)           | 未搜索出内容时的展示模板，可以省略 |

如果需要根据是否搜索成功展示不同的结果，需要使用子标签 &lt;stl:yes&gt; 和 &lt;stl:no&gt; ，有搜索结果时将展示 &lt;stl:yes&gt; 中的内容，无搜索结果时将展示 &lt;stl:no&gt; 中的内容。

如果只定义搜索结果模板，可以省略&lt;stl:yes&gt;，直接将模板放到&lt;stl:search&gt; 中。

自定义搜索提交表单需要在 &lt;stl:search&gt; 中嵌入展示搜索结果的标签，必须包含的标签有 &lt;stl:pageContents&gt; 和 &lt;stl:pageitems&gt; 及 &lt;stl:pageItem&gt; 标签，分别用于展示搜索结果分页列表和搜索结果翻页项。

- &lt;stl:search&gt; 内必须包含一个 &lt;stl:pageContents&gt; 标签，用于展示搜索结果内容列表，详情请参考 &lt;stl:pageContents&gt; 标签。
- &lt;stl:search&gt; 内必须包含一个 &lt;stl:pageitems&gt; 标签和多个 &lt;stl:pageItem&gt; 标签，用于展示翻页项，详情请参考 &lt;stl:pageItems&gt; 标签及 &lt;stl:pageItem&gt; 标签。
- &lt;stl:search&gt; 中除以上标签外可以添加任意 Html 标签或 STL 标签，用于组织展示样式。

## 属性

| 属性                                                | 说明                   |
| --------------------------------------------------- | ---------------------- |
| [isAllSites](search/attributes?id=isAllSites)       | 是否对全部站点进行搜索 |
| [siteName](search/attributes?id=siteName)           | 站点名称               |
| [siteDir](search/attributes?id=siteDir)             | 站点文件夹             |
| [siteIds](search/attributes?id=siteIds)             | 站点Id列表             |
| [channelIndex](search/attributes?id=channelIndex)   | 栏目索引               |
| [channelName](search/attributes?id=channelName)     | 栏目名称               |
| [channelIds](search/attributes?id=channelIds)       | 栏目Id列表             |
| [type](search/attributes?id=type)                   | 搜索类型               |
| [word](search/attributes?id=word)                   | 搜索关键词             |
| [dateAttribute](search/attributes?id=dateAttribute) | 搜索时间字段           |
| [dateFrom](search/attributes?id=dateFrom)           | 搜索开始时间           |
| [dateTo](search/attributes?id=dateTo)               | 搜索结束时间           |
| [since](search/attributes?id=since)                 | 搜索时间段             |
| [pageNum](search/attributes?id=pageNum)             | 每页展示的内容数目     |
| [isHighlight](search/attributes?id=isHighlight)     | 是否关键字高亮         |