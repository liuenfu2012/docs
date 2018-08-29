# &lt;stl:dynamic&gt; 动态显示

```html
<stl:dynamic
  context="所处上下文"
  isPageRefresh="翻页时是否刷新页面">
</stl:dynamic>
```

## 使用说明

通过 stl:dynamic 标签在模板中实现动态显示功能

`<stl:dynamic>` 使用 AJAX 技术使页面中部分区域能够及时反应出变化内容，而不必生成页面后才能显示。

`<stl:dynamic>` 标签用于需要即时反应出变化的页面区域，可以将任何代码放置在 `<stl:dynamic>` 中，页面将显示出最新的内容。

大部分 STL 标签拥有 isDynamic 属性，如：`<stl:contents isDynamic="true"></stl:contents>`。设置此属性的结果与以下代码一致：`<stl:dynamic><stl:contents></stl:contents><stl:dynamic>`

`<stl:dynamic>` 中可以包含任何 STL 标签或 HTML 标签。

`<stl:dynamic>` 标签对应的实体为{stl:dynamic}。

## 属性

| 属性          | 说明               |
| ------------- | ------------------ |
| context       | 所处上下文         |
| isPageRefresh | 翻页时是否刷新页面 |