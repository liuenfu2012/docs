# &lt;stl:select&gt; 示例

## 展示栏目列表下拉框

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
<stl:select channelName="首页" isChannel="true" title="选择标题进入栏目页" openWin="false"> </stl:select>
```

## 展示内容列表下拉框

下面的例子展示由栏目索引为"新闻"的内容组成的下拉框。

```html
<stl:select channelIndex="新闻" isChannel="false" title="选择标题进入内容页" totalNum="3" openWin="false"> </stl:select>
```
