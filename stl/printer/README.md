# &lt;stl:printer&gt; 打印

```html
<stl:printer
  titleId="页面Html 中打印标题的 Id 属性"
  bodyId="页面Html 中打印正文的 Id 属性"
  logoId="页面Logo 的 Id 属性"
  locationId="页面当前位置的 Id 属性">
</stl:printer>
```

## 使用说明

stl:printer 用于展示打印链接，点击后弹出打印窗口

所有属于 HTML 标签 &lt;a&gt; 的成员均适用于 &lt;stl:printer&gt; 标签。

stl:printer 标签将展示打印链接，点击此链接后将弹出打印窗口，需打印的标题、内容、LOGO及页面当前文字在 &lt;stl:printer&gt; 的属性中指定。

&lt;stl:printer&gt; 标签对应的实体为{stl:printer}。

## 属性

| 属性                                           | 说明                          |
| ---------------------------------------------- | ----------------------------- |
| [titleId](printer/attributes?id=titleId)       | 页面Html 中打印标题的 Id 属性 |
| [bodyId](printer/attributes?id=bodyId)         | 页面Html 中打印正文的 Id 属性 |
| [logoId](printer/attributes?id=logoId)         | 页面Logo 的 Id 属性           |
| [locationId](printer/attributes?id=locationId) | 页面当前位置的 Id 属性        |