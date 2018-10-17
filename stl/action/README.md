# &lt;stl:action&gt; 执行动作

```html
<stl:action type="动作类型"></stl:action>
```

## 说明

通过 &lt;stl:action&gt; 标签在模板中创建链接，点击链接后页面将执行相应的动作。

标签 &lt;stl:action&gt; 所执行的动作由属性 type 指定：

- `"Close"` 执行关闭本页功能。
- `"Translate"` 执行整个站点的简体/繁体文字转换功能。

可以把任何 STL 标签或者 HTML 标签嵌套在 &lt;stl:action&gt; 元素内。

## 解析

如果使用 &lt;stl:action&gt; 元素，系统将解析元素为 [HTML &lt;a&gt; 元素](/reference_html/a)。

如果使用 {stl:action} 实体，系统将解析实体为 URL地址字符串。

## 属性

| 属性                              | 说明     |
| --------------------------------- | -------- |
| [type](action/attributes?id=type) | 动作类型 |

<!-- done -->