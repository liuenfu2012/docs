# stl:a 获取链接

```html
<stl:a
  channelIndex="栏目索引"
  channelName="栏目名称"
  parent="显示父栏目"
  upLevel="上级栏目的级别"
  topLevel="从首页向下的栏目级别"
  context="所处上下文"
  href="链接地址"
  host="链接域名"
  queryString="链接参数">
</stl:a>
```

## 使用说明

stl:a 元素可以创建一个到其他站点、栏目以及内容页或任何其他URL地址的超链接。

系统解析 stl:a 时将根据所处上下文计算链接地址，最终将 stl:a 解析为 [HTML a 元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)，所有属于HTML 标签&lt;a&gt;的属性均适用于&lt;stl:a&gt;标签。

如果标签在首页模板或者栏目模版中默认链接地址为栏目页的链接；如果标签在内容模版中，默认链接地址为内容页的链接；可以通过上下文属性（context）来改变默认链接地址。

如果标签嵌入在列表标签内，则默认链接地址当前列表项的链接。

如果系统链接到指定栏目地址，可以通过栏目定位属性（channelIndex、channelName、parent、upLevel、topLevel）确定栏目位置，链接地址将指向对应的定位栏目。

## 属性

| 属性         | 说明                 |
| ------------ | -------------------- |
| channelIndex | 栏目索引             |
| channelName  | 栏目名称             |
| parent       | 显示父栏目           |
| upLevel      | 上级栏目的级别       |
| topLevel     | 从首页向下的栏目级别 |
| context      | 所处上下文           |
| href         | 链接地址             |
| host         | 链接域名             |
| queryString  | 链接参数             |