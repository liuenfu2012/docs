# &lt;stl:each&gt; 示例

## 在内容页面展示图片字段的图片列表

下面的例子展示内容的图片字段列表。

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
