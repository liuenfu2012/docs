# &lt;stl:a&gt; 属性

所有属于 HTML 标签&lt;a&gt;的属性均适用于&lt;stl:a&gt;标签，请参考：[HTML &lt;a&gt; 元素](/reference_html/a)。

## channelIndex

栏目索引。

如果设置了 channelIndex 属性，系统将寻找对应的栏目索引的栏目并将链接指向此栏目。

设置 channelIndex 属性后，&lt;stl:a&gt; 将始终显示栏目链接。

channelIndex 可以和 channelName 属性配合使用，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后寻找此栏目下栏目名称为 channelName 的栏目。

如果同时设置了 parent、upLevel 或 topLevel 属性，系统首先定位到 channelIndex 栏目索引所在的栏目，之后将寻找上级或上几级的栏目并显示此栏目的链接

```html
<!-- 链接到首页 -->
<stl:a channelIndex="首页">
External Link
</stl:a>
```

> 如果 channelIndex 不存在，默认将显示首页链接。

## channelName

栏目名称。

## parent

是否显示父栏目的链接：

- `"true"` 表示指向父栏目的链接，等价于 upLevel="1"。
- `"false"` 表示不显示父栏目的链接。此值是默认的，如果没有指定属性的话。

## upLevel

显示上几级栏目的链接，0 为本级，1 为父栏目，以此类推。

## topLevel

显示从首页向下某个级别栏目的链接，0 代表网站首页，1 代表一级栏目，以此类推。

## context

链接所处上下文

- `"Content"` 链接将解析为内容链接。
- `"Channel"` 链接将解析为栏目链接。

标签 &lt;stl:a&gt; 在栏目模版中默认显示此栏目的链接，在内容模版中默认显示此内容的链接，如果指定所处上下文 context，标签将按照上下文解析。

## href

链接地址，可以用“@”开头表示当前网站根目录，用“~”开头表示系统根目录。

## host

链接域名，如设置链接地址将以此开头

## queryString

链接地址后的参数
