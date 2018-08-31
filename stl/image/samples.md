# &lt;stl:image&gt; 示例

## 在内容列表中展示内容图片

下面的例子展示栏目索引为"新闻"的栏目的内容图片列表，点击图片后新窗口打开内容页。

```html
<stl:contents channelIndex="新闻" totalNum="3" isImage="true" width="80%">
    <stl:a target="_blank">
        <stl:image width="200" height="100"></stl:image>
    </stl:a>
</stl:contents>
```

解析后的 HTML 代码：

```html
<a href="/news/4.html" target="_blank">
    <img src="/upload/images/2013/6/t_7164418763.jpg" width="200" height="100">
</a>
<a href="/news/3.html" target="_blank">
    <img src="/upload/images/2013/6/t_7164446419.jpg" width="200" height="100">
</a>
<a href="/news/2.html" target="_blank">
    <img src="/upload/images/2013/6/t_7164446419.jpg" width="200" height="100">
</a>
```

## 展示指定的图片文件

下面的例子展示文件名称为"banner.jpg"的图片文件。

```html
<stl:image src="@/images/banner.jpg" height="100"></stl:image>
```

解析后的 HTML 代码：

```html
<img src="/images/banner.jpg" height="100">
```

## 展示当前栏目的图片

下面的例子展示当前栏目的图片，如果栏目没有图片展示，则不展示任何信息。

```html
<stl:container context="Channel">
    <stl:image></stl:image>
</stl:container>
```

解析后的 HTML 代码：

```html
<img src="/assets/img/bootstrap-mdo-sfmoma-01.jpg">
```
