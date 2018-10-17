# &lt;stl:pageChannels&gt; 翻页栏目列表

```html
<stl:pageChannels pageNum="每页展示的栏目数目"></stl:pageChannels>
```

## 说明

通过 stl:pageChannels 标签在模板中展示翻页栏目列表

&lt;stl:pageChannels&gt; 标签需要和STL 标签 &lt;stl:pageItems&gt; 及 &lt;stl:pageItem&gt; 配合使用。

&lt;stl:pageChannels&gt; 标签和 &lt;stl:channels&gt; 具有相同的属性，这两个标签的区别在于 &lt;stl:pageChannels&gt; 能够翻页，且 &lt;stl:pageChannels&gt; 标签仅能用在栏目模板中。

通常将STL 标签 &lt;stl:pageItems&gt; 及 &lt;stl:pageItem&gt; 置于 &lt;stl:pageChannels&gt; 标签的下方，代表翻页按钮。

&lt;stl:pageChannels&gt; 只能在栏目模版中使用，如果需要在其他类型的模版中使用必须将 &lt;stl:pageChannels&gt; 标签和对应的 &lt;stl:pageItems&gt; 翻页标签放到&lt;stl:dynamic&gt; 动态标签中，否则 &lt;stl:pageChannels&gt; 标签将无法解析。

列表相关介绍请参见列表标签及列表项

&lt;stl:pageChannels&gt; 标签对应的实体为{stl:pageChannels}。

## 属性

所有属于 STL 标签 &lt;stl:channels&gt; 的成员均适用于 &lt;stl:pageChannels&gt; 标签。请参考：[&lt;stl:channels&gt;](channels/)。

| 属性                                          | 说明               |
| --------------------------------------------- | ------------------ |
| [pageNum](pageChannels/attributes?id=pageNum) | 每页展示的栏目数目 |
