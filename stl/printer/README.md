# &lt;stl:printer&gt; 打印

```html
<stl:printer
  bodyId="页面HTML中打印正文的ID属性"
  isDynamic="是否动态显示"
  locationId="页面当前位置的ID属性"
  logoId="页面LOGO的ID属性"
  titleId="页面HTML中打印标题的ID属性">
</stl:printer>
```

## 使用说明

stl:printer 用于显示打印链接，点击后弹出打印窗口

所有属于 HTML 标签 &lt;a&gt; 的成员均适用于 `<stl:printer>` 标签。

stl:printer 标签将显示打印链接，点击此链接后将弹出打印窗口，需打印的标题、内容、LOGO及页面当前文字在 `<stl:printer>` 的属性中指定。

`<stl:printer>` 标签对应的实体为{stl:printer}。

## 属性

| 属性       | 说明                       |
| ---------- | -------------------------- |
| titleId    | 页面HTML中打印标题的ID属性 |
| bodyId     | 页面HTML中打印正文的ID属性 |
| logoId     | 页面LOGO的ID属性           |
| locationId | 页面当前位置的ID属性       |