# &lt;stl:a&gt; 获取链接

```html
<stl:a channelIndex="栏目索引" channelName="栏目名称" parent="展示父栏目" upLevel="上级栏目的级别" topLevel="从首页向下的栏目级别" context="所处上下文" href="链接地址" host="链接域名" queryString="链接参数"></stl:a>
```

## 说明

&lt;stl:a&gt; 元素可以创建一个到其他站点、栏目以及内容页或任何其他URL地址的超链接。

标签 &lt;stl:a&gt; 在栏目模版中默认展示此栏目的链接，在内容模版中默认展示此内容的链接，如果希望展示指定栏目的链接，请设置 [上下文切换](/context?id=通过属性切换上下文) 属性。

如果标签嵌入在列表标签内，则默认链接地址当前列表项的链接：

- &lt;stl:a&gt; 标签能够作为 &lt;stl:channels&gt; 等标签的子标签，当作为 &lt;stl:channels&gt; 的子标签使用时将展示栏目链接。
- &lt;stl:a&gt; 标签能够作为 &lt;stl:contents&gt; 等标签的子标签，当作为 &lt;stl:contents&gt; 的子标签使用时将展示内容链接。

可以把任何 STL 标签或者 HTML 标签嵌套在 &lt;stl:a&gt; 元素内，如果&lt;stl:a&gt; 元素内没有嵌套任何标签，系统将把对应的栏目或者内容的名称作为嵌套文本显示出来。

## 解析

如果使用 &lt;stl:a&gt; 元素，系统将解析元素为 [HTML &lt;a&gt; 元素](/reference_html/a)。

如果使用 {stl:a} 实体，系统将解析实体为 URL地址字符串。

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

<!-- done -->