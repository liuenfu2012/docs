# &lt;stl:search&gt; 搜索

```html
<stl:search
  channelIds="栏目Id列表"
  channelIndex="栏目索引"
  channelName="栏目名称"
  dateAttribute="搜索时间字段"
  dateFrom="搜索开始时间"
  dateTo="搜索结束时间"
  isDefaultDisplay="是否默认显示"
  isHighlight="是否关键字高亮"
  pageNum="每页显示的内容数目"
  since="搜索时间段"
  siteDir="站点文件夹"
  siteIds="站点Id列表"
  siteName="站点名称"
  type="搜索类型"
  word="搜索关键词">
</stl:search>
```

## 使用说明

通过 stl:search 标签在模板中显示搜索结果

stl:search 标签有默认显示方式和自定义显示方式两种表现形式。如果 `<stl:search>` 不包含子标签则采用默认显示方式显示搜索提交表单、如果 `<stl:search>` 包含子标签则采用自定义的内容显示搜索提交表单。

`<stl:search>` 标签对应的实体为{stl:search}。

## 页面参数

上表对应的属性均可作为页面参数传递给 `<stl:search>` 标签，系统将首选页面参数值，如果未传参数，系统再从 `<stl:search>` 属性取值。

示例：/utils/search.html?word=中国&type=title&pageNum=10将优先于 `<stl:search type="title,content" pageNum="20">`。

## 子标签

| 子标签      | 说明                               |
| ----------- | ---------------------------------- |
| stl:loading | 正在搜索时的显示模板，可以省略     |
| stl:yes     | 搜索出内容时的显示模板，可以省略   |
| stl:no      | 未搜索出内容时的显示模板，可以省略 |

如果需要根据是否搜索成功显示不同的结果，需要使用子标签 `<stl:yes>` 和 `<stl:no>` ，有搜索结果时将显示 `<stl:yes>` 中的内容，无搜索结果时将显示 `<stl:no>` 中的内容。

如果只定义搜索结果模板，可以省略`<stl:yes>`，直接将模板放到`<stl:search>` 中。

自定义搜索提交表单需要在 `<stl:search>` 中嵌入显示搜索结果的标签，必须包含的标签有 `<stl:pageContents>` 和 `<stl:pageitems>` 及 `<stl:pageItem>` 标签，分别用于显示搜索结果分页列表和搜索结果翻页项。

- `<stl:search>` 内必须包含一个 `<stl:pageContents>` 标签，用于显示搜索结果内容列表，详情请参考 `<stl:pageContents>` 标签。
- `<stl:search>` 内必须包含一个 `<stl:pageitems>` 标签和多个 `<stl:pageItem>` 标签，用于显示翻页项，详情请参考 `<stl:pageItems>` 标签及 `<stl:pageItem>` 标签。
- `<stl:search>` 中除以上标签外可以添加任意 Html 标签或 STL 标签，用于组织显示样式。

## 属性

| 属性             | 说明                   |
| ---------------- | ---------------------- |
| isAllSites       | 是否对全部站点进行搜索 |
| siteName         | 站点名称               |
| siteDir          | 站点文件夹             |
| siteIds          | 站点Id列表             |
| channelIndex     | 栏目索引               |
| channelName      | 栏目名称               |
| channelIds       | 栏目Id列表             |
| type             | 搜索类型               |
| word             | 搜索关键词             |
| dateAttribute    | 搜索时间字段           |
| dateFrom         | 搜索开始时间           |
| dateTo           | 搜索结束时间           |
| since            | 搜索时间段             |
| pageNum          | 每页显示的内容数目     |
| isHighlight      | 是否关键字高亮         |
| isDefaultDisplay | 是否默认显示           |