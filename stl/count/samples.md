# &lt;stl:count&gt; 示例

## 显示当前栏目的内容数。

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
内容数：<stl:count type="Contents"></stl:count>
```

解析后的 HTML 代码：

```html
内容数：30
```

## 显示指定栏目三个月内添加的内容数，包括本栏目及所有下级栏目

下面的例子在页面中显示指定栏目三个月内添加的内容数，包括本栏目及所有下级栏目。

```html
内容数：<stl:count type="Contents" channelIndex="新闻" scope="All" since="3m"></stl:count>
```

解析后的 HTML 代码：

```html
内容数：12
```

## 动态显示内容列表中最新的五篇及每篇内容的评论数。

下面的例子动态显示内容列表中最新的五篇及每篇内容的评论数。

```html
<stl:contents channelIndex="新闻" totalNum="5" isDynamic="true">
  <stl:content type="Title"></stl:content>(<stl:count type="Comments"></stl:count>)
</stl:contents>
```
