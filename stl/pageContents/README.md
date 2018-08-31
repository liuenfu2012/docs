# &lt;stl:pageContents&gt; 翻页内容列表

```html
<stl:pageContents
  pageNum="每页展示的内容数目"
  maxPage="翻页中生成的静态页面最大数，剩余页面将动态获取">
</stl:pageContents>
```

## 使用说明

通过 stl:pageContents 标签在模板中展示翻页内容列表

&lt;stl:pageContents&gt; 标签需要和 STL 标签 &lt;stl:pageItems&gt; 及 &lt;stl:pageItem&gt; 配合使用。

所有属于 STL 标签 &lt;stl:contents&gt; 的成员均适用于 &lt;stl:pageChannels&gt; 标签。

&lt;stl:pageContents&gt; 标签和 &lt;stl:contents&gt; 具有相同的属性，这两个标签的区别在于 &lt;stl:pageContents&gt; 能够翻页，且 &lt;stl:pageContents&gt; 标签仅能用在栏目模板中。

通常将 STL 标签 &lt;stl:pageItems&gt; 及 &lt;stl:pageItem&gt;	置于 &lt;stl:pageContents&gt; 标签的下方，代表翻页按钮。

&lt;stl:pageContents&gt; 只能在栏目模版中使用，如果需要在其他类型的模版中使用必须将 &lt;stl:pageContents&gt; 标签和对应的 &lt;stl:pageItems&gt; 翻页标签放到 &lt;stl:dynamic&gt; 动态标签中，否则 &lt;stl:pageContents&gt; 标签将无法解析。

列表相关介绍请参见列表标签及列表项

&lt;stl:pageContents&gt; 标签对应的实体为{stl:pageContents}。

## 属性

所有属于 STL 标签 &lt;stl:contents&gt; 的成员均适用于 &lt;stl:pageContents&gt; 标签。请参考：[&lt;stl:contents&gt;](contents/)。

| 属性                                          | 说明                                           |
| --------------------------------------------- | ---------------------------------------------- |
| [pageNum](pageContents/attributes?id=pageNum) | 每页展示的内容数目                             |
| [maxPage](pageContents/attributes?id=maxPage) | 翻页中生成的静态页面最大数，剩余页面将动态获取 |