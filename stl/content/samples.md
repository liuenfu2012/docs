# &lt;stl:content&gt; 示例

## 在内容列表中显示内容链接

下面的例子显示栏目索引为"新闻"的栏目的内容列表前五条，内容链接的提示为内容标题全称。

```html
<stl:contents channelIndex="新闻" totalNum="5" width="80%" border="0">
    <stl:a title="{Content.FullTitle}" target="_blank">
        <stl:content type="Title"></stl:content><br />
    </stl:a>
</stl:contents>
```

解析后的 HTML 代码：

```html
<a href="/news/4.html" title="我是带图片的内容" target="_blank">
    我是带图片的内容<br>
</a>
<a href="/news/3.html" title="我也是带图片的内容" target="_blank">
    我也是带图片的内容<br>
</a>
<a href="/news/2.html" title="我也是带图片的内容" target="_blank">
    我也是带图片的内容<br>
</a>
<a href="/news/1.html" title="我是带图片的内容" target="_blank">
    我是带图片的内容<br>
</a>
```

## 显示内容的副标题

下面的例子在页面中显示内容的副标题。

```html
<stl:content type="SubTitle"></stl:content>
```

解析后的 HTML 代码：

```html
内容副标题
```

## 显示内容的添加时间

下面的例子在页面中显示内容的添加时间，并按照"yyyy-MM-dd"格式显示。

```html
<stl:content type="AddDate" formatString="yyyy-MM-dd"></stl:content>
```

解析后的 HTML 代码：

```html
2013-06-03
```
