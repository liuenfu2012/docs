# &lt;stl:itemTemplate&gt; 示例

## 展示指定的内容列表

下面的例子展示栏目"新闻"下的内容列表，对设置为醒目的内容采用红色展示。

```html
<stl:contents channelIndex="新闻" totalNum="5">
    <stl:itemTemplate type="Item">
        <stl:a target="_blank"></stl:a><br />
    </stl:itemTemplate>
    <stl:itemTemplate type="SelectedItem" selected="IsColor">
        <stl:a style="color:red" target="_blank"></stl:a><br />
    </stl:itemTemplate>
</stl:contents>
```

解析后的 HTML 代码：

```html
<a href="/news/4.html" target="_blank">我是带图片的内容</a><br>
<a href="/news/3.html" target="_blank">我也是带图片的内容</a><br>
<a href="/news/2.html" style="color:red" target="_blank">我也是带图片的内容</a><br>
<a href="/news/1.html" target="_blank">我是带图片的内容</a><br>
```

## 定制列表中交替项的展示内容

下面的例子展示栏目索引为"新闻"的所有内容的列表，列表的交替项与列表项的展示颜色有所不同。

```html
<stl:contents channelIndex="新闻" totalNum="10">
    <stl:itemTemplate type="Item">
        <stl:a><stl:content type="Title"></stl:content></stl:a><br />
    </stl:itemTemplate>
    <stl:itemTemplate type="AlternatingItem">
        <stl:a style="color:red"><stl:content type="Title"></stl:content></stl:a> <br />
    </stl:itemTemplate>
</stl:contents>
```

解析后的 HTML 代码：

```html
<a href="/news/4.html">我是带图片的内容</a><br>
<a href="/news/3.html" style="color:red">我也是带图片的内容</a> <br>
<a href="/news/2.html">我也是带图片的内容</a><br>
<a href="/news/1.html" style="color:red">我是带图片的内容</a> <br>
```

## 展示指定的栏目列表

下面的例子展示所有栏目组别为"STL 标签"的栏目列表，各栏目项间用" | "分隔。

```html
<stl:channels groupChannel="STL" isTotal="true">
  <stl:itemTemplate type="Item">
    <stl:a><stl:channel type="title"></stl:channel></stl:a>
  </stl:itemTemplate>
  <stl:itemTemplate type="Separator">
    |
  </stl:itemTemplate>
</stl:channels>
```

解析后的 HTML 代码：

```html
<a href="/channels/4.html">STL标签</a>
    |
<a href="/channels/79.html">STL实体</a>
```

## 展示指定的内容列表

下面的例子展示栏目"新闻"下的内容列表，对第 2 条至第 4 条内容用红色展示。

```html
<stl:contents channelIndex="新闻" totalNum="5">
  <stl:itemTemplate type="Item">
      <stl:a target="_blank"></stl:a><br />
  </stl:itemTemplate>
  <stl:itemTemplate type="SelectedItem" selected="2-4">
      <stl:a style="color:red" target="_blank"></stl:a><br />
  </stl:itemTemplate>
</stl:contents>
```

解析后的 HTML 代码：

```html
<a href="/news/4.html" target="_blank">我是带图片的内容</a><br>
<a href="/news/3.html" style="color:red" target="_blank">我也是带图片的内容</a><br>
<a href="/news/2.html" style="color:red" target="_blank">我也是带图片的内容</a><br>
<a href="/news/1.html" style="color:red" target="_blank">我是带图片的内容</a><br>
```
