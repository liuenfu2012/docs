# &lt;stl:pageSqlContents&gt; 翻页数据库列表

```html
<stl:pageSqlContents pageNum="每页展示的内容数目"></stl:pageSqlContents>
```

## 说明

通过 stl:pageSqlContents 标签在模板中展示能够翻页的数据库列表

&lt;stl:pageSqlContents&gt; 标签需要和 STL 标签 &lt;stl:pageItems&gt; 及 &lt;stl:pageItem&gt; 配合使用。

&lt;stl:pageSqlContents&gt; 标签和 &lt;stl:sqlContents&gt; 具有相同的属性，这两个标签的区别在于 &lt;stl:pageSqlContents&gt; 能够翻页。

通常将 STL 标签 &lt;stl:pageItems&gt; 及 &lt;stl:pageItem&gt; 置于 &lt;stl:pageSqlContents&gt; 标签的下方，代表翻页按钮。

列表相关介绍请参见列表标签及列表项

&lt;stl:pageSqlContents&gt; 标签对应的实体为{stl:pageSqlContents}。

## 属性

所有属于 STL 标签 &lt;stl:sqlContents&gt; 的成员均适用于 &lt;stl:pageSqlContents&gt; 标签。请参考：[&lt;stl:sqlContents&gt;](sqlContents/)。

| 属性                                             | 说明               |
| ------------------------------------------------ | ------------------ |
| [pageNum](pageSqlContents/attributes?id=pageNum) | 每页展示的内容数目 |