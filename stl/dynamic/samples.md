# &lt;stl:dynamic&gt; 示例

## 显示当前栏目的内容数

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
<stl:dynamic>
    <stl:count type="Contents"></stl:count>
</stl:dynamic>
```

## 显示栏目"新闻"的内容列表

下面例子在页面中显示"新闻"栏目的前 10 篇内容列表。

```html
<stl:dynamic>
  <stl:contents channelIndex="新闻" totalNum="10">
      <stl:a target="_blank"></stl:a> <br />
  </stl:contents>
</stl:dynamic>
```
