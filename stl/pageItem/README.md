# &lt;stl:pageItem&gt; 翻页项

```html
<stl:pageItem type="类型" text="展示的文字" linkClass="链接CSS样式" textClass="文字CSS样式" listNum="页导航或页跳转展示链接数" listEllipsis="页导航或页跳转链接太多时展示的省略号" hasLr="页码导航是否包含左右字符" lStr="页面左字符" rStr="页面右字符" alwaysA="页码总是超链接，包括无连接时"></stl:pageItem>
```

## 说明

通过 stl:pageItem 标签在模板中展示翻页项（上一页、下一页、当前页、页跳转、页导航等）

&lt;stl:pageItem&gt; 标签需要在标签 &lt;stl:pageItems&gt; 内使用。

stl:pageItem 标签内可以嵌入代码，如果需要根据是否当前页展示不同的样式，需要使用子标签 &lt;stl:yes&gt; 和 &lt;stl:no&gt;，非当前页时将展示 &lt;stl:yes&gt; 中的内容，当前页时将展示 &lt;stl:no&gt; 中的内容。

&lt;stl:yes&gt; 和 &lt;stl:no&gt; 通常包含 &lt;a&gt; 链接，其中可以包含 {Current.Url} 以及 {Current.Num} 实体，分别代表翻页链接地址及当前页页码。

当 type 属性为"FirstPage"、" PreviousPage"、" NextPage"、" LastPage" 或 "PageNavigation" 之一时：

如果标签内未包含内容，系统将展示默认链接。
如果标签内包含内容，系统将指定的内容，同时将解析内容中包含的 {Current.Url} 及 {Current.Num} 实体。
如果 标签内包含 &lt;stl:yes&gt; 及 &lt;stl:no&gt;，系统将根据是否当前页为对应页展示不同的内容，同时将解析子标签中包含的 {Current.Url} 及 {Current.Num} 实体。
当 type 属性为 "CurrentPageIndex" 或 "TotalPageNum" 时，翻页项将展示当前页对应的页码及总页数。
当 type 属性为 "PageSelect" 时，翻页项将展示翻页跳转下拉框。

列表相关介绍请参见列表标签及列表项

&lt;stl:pageItem&gt; 标签对应的实体为{stl:pageItem}。

## 子标签

| 子标签          | 说明                                               |
| --------------- | -------------------------------------------------- |
| [stl:yes](../yes/) | 能够转到对应页面时的展示模板（非当前页），可以省略 |
| [stl:no](../no/)   | 不能转到对应页面时的展示模板（当前页），可以省略   |

## 属性

| 属性                                                | 说明                                 |
| --------------------------------------------------- | ------------------------------------ |
| [type](pageItem/attributes?id=type)                 | 类型                                 |
| [text](pageItem/attributes?id=text)                 | 展示的文字                           |
| [linkClass](pageItem/attributes?id=linkClass)       | 链接CSS样式                          |
| [textClass](pageItem/attributes?id=textClass)       | 文字CSS样式                          |
| [listNum](pageItem/attributes?id=listNum)           | 页导航或页跳转展示链接数             |
| [listEllipsis](pageItem/attributes?id=listEllipsis) | 页导航或页跳转链接太多时展示的省略号 |
| [hasLr](pageItem/attributes?id=hasLr)               | 页码导航是否包含左右字符             |
| [lStr](pageItem/attributes?id=lStr)                 | 页面左字符                           |
| [rStr](pageItem/attributes?id=rStr)                 | 页面右字符                           |
| [alwaysA](pageItem/attributes?id=alwaysA)           | 页码总是超链接，包括无连接时         |