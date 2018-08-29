# &lt;stl:location&gt; 示例

## 显示页面的当前位置

下面的例子显示页面的当前位置，分隔符用属性表示。

```html
<stl:location separator=" - "></stl:location>
```

解析后的 HTML 代码：

```html
<a href="https://stl.siteserver.cn">首 页</a>
 -
<a href="/channels/4.html">STL标签</a>
 -
<a href="/channels/19.html">导航标签</a>
 -
<a href="/location/index.html">stl:location 当前位置</a>
```

## 显示页面的当前位置

下面的例子显示页面的当前位置，分隔符用子标签表示。

```html
<stl:location> <span style="color:#ff0000"> >> </span> </stl:location>
```

解析后的 HTML 代码：

```html
<a href="https://stl.siteserver.cn">首 页</a>
<span style="color:#ff0000"> &gt;&gt; </span>
<a href="/channels/4.html">STL标签</a>
<span style="color:#ff0000"> &gt;&gt; </span>
<a href="/channels/19.html">导航标签</a>
<span style="color:#ff0000"> &gt;&gt; </span>
<a href="/location/index.html">stl:location 当前位置</a>
```
