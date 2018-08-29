# &lt;stl:file&gt; 示例

## 显示指定文件的下载链接。

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
<stl:file src="@/assets/examples.zip">点击下载</stl:file>
```

解析后的 HTML 代码：

```html
<a href="/api/stl/actions/download?publishmentSystemId=2&amp;channelId=27&amp;contentId=51&amp;fileUrl=NAdKf0hpxOIFkJBrTkh1GY5JGLNXiQLj">点击下载</a>
```

## 显示当前内容的附件下载链接及大小。

下面的例子在页面中显示当前内容的附件下载链接及大小。

```html
<stl:file isFileSize="true"></stl:file>
```

解析后的 HTML 代码：

```html
<a href="/api/stl/actions/download?publishmentSystemId=2&amp;fileUrl=NAdKf0hpxOIFkJBrTkh1GY5JGLNXiQLj">examples.zip</a> (1MB)
```

## 在内容列表中显示每一篇内容的附件下载链接。

下面的例子在内容列表中显示每一篇内容的附件下载链接。

```html
<stl:contents channelIndex="新闻" totalNum="5" width="80%" border="0">
    <stl:content type="Title"></stl:content>
    <stl:file isCount="true">下载</stl:file>
</stl:contents>
```

解析后的 HTML 代码：

```html
我是带图片的内容
<br>
我也是带图片的内容
<a href="/api/stl/actions/download?publishmentSystemId=2&amp;channelId=102&amp;contentId=184&amp;fileUrl=5HJnAoAUETGV9gYptSo74ZA2jeQMCgxv2f7jGUnMBzGtK95amJVw0add0g0equals00equals0">下载</a><br>
我也是带图片的内容
<br>
我是带图片的内容
<br>
```
