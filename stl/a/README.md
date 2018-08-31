# &lt;stl:a&gt; 获取链接

```html
<stl:a
  channelIndex="栏目索引"
  channelName="栏目名称"
  parent="展示父栏目"
  upLevel="上级栏目的级别"
  topLevel="从首页向下的栏目级别"
  context="所处上下文"
  href="链接地址"
  host="链接域名"
  queryString="链接参数">
</stl:a>
```

## 使用说明

&lt;stl:a&gt; 元素可以创建一个到其他站点、栏目以及内容页或任何其他URL地址的超链接。

系统解析 &lt;stl:a&gt; 时将根据所处上下文计算链接地址，最终将 &lt;stl:a&gt; 解析为 [HTML &lt;a&gt; 元素](/reference_html/a)。

如果标签在首页模板或者栏目模版中默认链接地址为栏目页的链接；如果标签在内容模版中，默认链接地址为内容页的链接；可以通过上下文属性（context）来改变默认链接地址。

如果标签嵌入在列表标签内，则默认链接地址当前列表项的链接。

如果系统链接到指定栏目地址，可以通过栏目定位属性（channelIndex、channelName、parent、upLevel、topLevel）确定栏目位置，链接地址将指向对应的定位栏目。

## 备注

标签 &lt;stl:a&gt; 在栏目模版中默认展示此栏目的链接，在内容模版中默认展示此内容的链接，如果指定所处上下文 context，标签将按照上下文解析。

&lt;stl:a&gt; 标签能够作为 &lt;stl:channels&gt; 等标签的子标签，当作为 &lt;stl:channels&gt; 的子标签使用时将展示栏目链接。

&lt;stl:a&gt; 标签能够作为 &lt;stl:contents&gt; 等标签的子标签，当作为 &lt;stl:contents&gt; 的子标签使用时将展示内容链接。

可以把任何 STL 标签作为 &lt;stl:a&gt; 标签的子标签。

如果没有指定链接的文字信息，链接展示的文字将为栏目/内容的名称。

如果设置了 channelIndex 属性，系统将寻找对应此栏目索引的栏目并展示此栏目的链接。

如果设置了 channelName 属性，系统将寻找对应此栏目名称的栏目并展示此栏目的链接。

如果设置了 parent、upLevel 或 topLevel 属性，系统将寻找上级或上几级的栏目并展示此栏目的链接。

&lt;stl:a&gt; 标签对应的实体为{stl:a}，系统将解析实体为URL地址字符串。

## 属性

所有属于HTML 标签&lt;a&gt;的属性均适用于&lt;stl:a&gt;标签，请参考：[HTML &lt;a&gt; 元素](/reference_html/a)。

| 属性                                         | 说明                 |
| -------------------------------------------- | -------------------- |
| [channelIndex](a/attributes?id=channelindex) | 栏目索引             |
| [channelName](a/attributes?id=channelName)   | 栏目名称             |
| [parent](a/attributes?id=parent)             | 展示父栏目           |
| [upLevel](a/attributes?id=upLevel)           | 上级栏目的级别       |
| [topLevel](a/attributes?id=topLevel)         | 从首页向下的栏目级别 |
| [context](a/attributes?id=context)           | 所处上下文           |
| [href](a/attributes?id=href)                 | 链接地址             |
| [host](a/attributes?id=host)                 | 链接域名             |
| [queryString](a/attributes?id=queryString)   | 链接参数             |