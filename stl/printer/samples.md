# &lt;stl:printer&gt; 示例

## 显示打印链接

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
<div id="title">
    <stl:content type="Title"></stl:content>
</div>
<div id="body">
    <stl:content type="Content"></stl:content>
</div>
<stl:printer titleId="title" bodyId="body">打印</stl:printer>
```
