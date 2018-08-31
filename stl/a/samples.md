# &lt;stl:a&gt; 示例

## 展示内容列表链接

下面的例子展示当前栏目的内容列表，内容链接为内容标题。

```html
<stl:contents>
  <stl:a target="_blank"></stl:a><br>
</stl:contents>
```

解析后的 HTML 代码：

```html
  <a href="/a/index.html" target="_blank">stl:a 标签用法</a><br>
  <a href="/a/2.html" target="_blank">stl:a 标签示例（单独使用）</a><br>
  <a href="/a/1.html" target="_blank">stl:a 标签示例（嵌套使用）</a><br>
```

## 展示栏目列表链接

下面的例子展示栏目索引为"首页"的下级栏目列表。

下面的例子展示当前栏目的内容列表，内容链接为内容标题。

```html
<stl:channels channelIndex="首页" groupChannel="主导航">
  <stl:a target="_blank"></stl:a><br>
</stl:channels>
```

解析后的 HTML 代码：

```html
  <a href="/getting-started/index.html" target="_blank">起 步</a><br>
  <a href="/channels/4.html" target="_blank">STL标签</a><br>
  <a href="/channels/79.html" target="_blank">STL实体</a><br>
```

## 展示指定的栏目链接

下面的例子展示栏目索引为"首页"的栏目链接，点击链接后在新窗口打开。

```html
<stl:a channelIndex="首页" target="_blank"></stl:a>
```

解析后的 HTML 代码：

```html
<a href="https://stl.siteserver.cn" target="_blank">首 页</a>
```

## 在栏目链接中展示指定的文字

下面的例子展示栏目索引为"首页"的栏目链接，链接文字为"转到首页"。

```html
<stl:a channelIndex="首页" target="\_blank"> 转到首页 </stl:a>
```

解析后的 HTML 代码：

```html
<a href="https://stl.siteserver.cn" target="_blank"> 转到首页 </a>
```

## 根据栏目索引与栏目名称展示栏目的链接

下面的例子展示栏目索引为"首页"的子栏目名称为“起步”的链接，链接文字为"转到起步页"。

```html
<stl:a channelIndex="首页" channelName="起步" target="_blank"> 转到起步页 </stl:a>
```

解析后的 HTML 代码：

```html
<a href="https://stl.siteserver.cn" target="_blank"> 转到起步页 </a>
```
