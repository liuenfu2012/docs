# &lt;stl:pageItems&gt; 翻页项容器

```html
<stl:pageItems
  context="所处上下文">
</stl:pageItems>
```

## 使用说明

通过 stl:pageItems 标签在模板中插入翻页项的容器，当不需要翻页时容器内的内容不展示

标签 &lt;stl:pageItems&gt; 必须包含标签 &lt;stl:pageItem&gt; 才起作用。

列表相关介绍请参见列表标签及列表项

翻页标签可以放到任何类型的模板中使用，唯一的例外是如果在单页模板中使用，需包含在&lt;stl:dynamic&gt;标签中。

## 属性

| 属性                                       | 说明       |
| ------------------------------------------ | ---------- |
| [context](pageItems/attributes?id=context) | 所处上下文 |