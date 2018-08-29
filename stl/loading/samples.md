# &lt;stl:loading&gt; 示例

## 自定义搜索功能载入中模板

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
<stl:search>
  <stl:loading>
    <div class="alert alert-info" role="alert">
      <strong>提示!</strong> 系统正在搜索中，请稍后...
    </div>
  </stl:loading>
</stl:search>
```
