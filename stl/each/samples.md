# &lt;stl:each&gt; 示例

## 在内容页面显示内容模型为图片的内容图片列表

下面的例子显示内容的图片列表。

```html
<stl:each type="photo">
    <stl:photo type="largeUrl" width="50px"></stl:photo>
    <stl:photo type="Description"></stl:photo>
    <hr />
</stl:each>
```

解析后的 HTML 代码：

```html
<img src="/upload/images/2017/5/3151359533.png" width="50px">
图片1
<hr>
<img src="/upload/images/2017/5/3151359601.png" width="50px">
图片2
<hr>
<img src="/upload/images/2017/5/3151359663.png" width="50px">
图片3
<hr>
<img src="/upload/images/2017/5/3151359728.png" width="50px">
图片4
<hr>
```

## 在内容页面显示图片字段的图片列表

下面的例子显示内容的图片字段列表。

```html
<stl:each type="imageUrl">
    <stl:image></stl:image>
    <hr />
</stl:each>
```

解析后的 HTML 代码：

```html
<img src="/upload/images/2017/5/3152235206.jpg">
<hr>
<img src="/upload/images/2017/5/315224668.jpg">
<hr>
<img src="/upload/images/2017/5/3152255636.jpg">
<hr>
<img src="/upload/images/2017/5/315235662.jpg">
<hr>
```
