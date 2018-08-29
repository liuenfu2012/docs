# &lt;stl:action&gt; 示例

## 简体/繁体转换

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
<stl:action type="Translate">繁体</stl:action>
```

解析后的 HTML 代码：

```html
<a href="javascript:;" id="translateLink">繁体</a>
```
