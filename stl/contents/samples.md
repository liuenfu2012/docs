# &lt;stl:contents&gt; 示例

## 列表显示三列

下面的例子显示的列表列数为三列，并仅显示带图片的内容。

```html
<stl:contents channelIndex="Example" columns="3" isImage="true" width="90%" border="0" cellpadding="2">
    <stl:content type="ImageUrl"></stl:content>
    <stl:a><stl:content type="Title"></stl:content></stl:a>
</stl:contents>
```

解析后的 HTML 代码：

```html
<table cellspacing="0" cellpadding="2" style="border-width:0px;width:90%;border-collapse:collapse;">
  <tbody>
    <tr>
      <td align="left" valign="top">
        <img src="/upload/images/2013/6/t_7164418763.jpg">
        <br>
        <a href="/news/4.html">我是带图片的内容</a>
        <br>
      </td>
      <td align="left" valign="top">
        <img src="/upload/images/2013/6/t_7164446419.jpg">
        <br>
        <a href="/news/3.html">我也是带图片的内容</a>
        <br>
      </td>
      <td align="left" valign="top">
        <img src="/upload/images/2013/6/t_7164446419.jpg">
        <br>
        <a href="/news/2.html">我也是带图片的内容</a>
        <br>
      </td>
    </tr>
    <tr>
      <td align="left" valign="top">
        <img src="/upload/images/2013/6/t_7164418763.jpg">
        <br>
        <a href="/news/1.html">我是带图片的内容</a>
        <br>
      </td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
```

## 仅显示带图片的内容列表

下面的例子显示"新闻"栏目下的带图片的内容列表。

```html
<stl:contents channelIndex="新闻" isImage="true">
	<stl:a><stl:image></stl:image></stl:a>
</stl:contents>
```

解析后的 HTML 代码：

```html
<a href="/news/4.html"><img src="/upload/images/2013/6/t_7164418763.jpg"></a>
<a href="/news/3.html"><img src="/upload/images/2013/6/t_7164446419.jpg"></a>
<a href="/news/2.html"><img src="/upload/images/2013/6/t_7164446419.jpg"></a>
<a href="/news/1.html"><img src="/upload/images/2013/6/t_7164418763.jpg"></a>
```

## 显示指定的栏目下的前 7 篇内容列表

下面的例子显示栏目索引为"starting"的栏目下的所有内容的前 7 篇列表

```html
<stl:contents channelIndex="starting" totalNum="7">
	<stl:a><stl:content type="Title"></stl:content></stl:a>
	<br />
</stl:contents>
```

解析后的 HTML 代码：

```html
<a href="/getting-started/index.html">STL 语言</a>
<br>
<a href="/getting-started/5.html">STL 标签与 STL 实体</a>
<br>
<a href="/getting-started/4.html">STL 模板语言规则</a>
<br>
<a href="/getting-started/3.html">STL 实体说明</a>
<br>
<a href="/getting-started/2.html">STL 翻页标签与实现</a>
<br>
<a href="/getting-started/1.html">STL 地址通配符</a>
<br>
```

## 显示栏目名称为 STL 标签下的所有内容（含下级栏目）

显示栏目名称为 STL 标签下的所有内容（含下级栏目），共显示 10 篇。

```html
<stl:channels upLevel="1">
  <stl:channel type="Title"></stl:channel>(<stl:channel type="CountOfContents"></stl:channel>)<br>
</stl:channels>
```

解析后的 HTML 代码：

```html
stl:search 标签用法
<br>
stl:if 标签用法
<br>
stl:action 标签用法
<br>
stl:analysis 标签用法
<br>
stl:marquee 标签用法
<br>
stl:count 标签用法
<br>
stl:search 标签示例1
<br>
stl:itemTemplate 标签用法
<br>
stl:if 标签示例（简单）
<br>
stl:file 标签用法
<br>
```
