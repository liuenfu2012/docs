# &lt;stl:content&gt; 获取内容值

```html
<stl:content type="展示的类型" leftText="展示在信息前的文字" rightText="展示在信息后的文字" formatString="展示的格式" no="展示第几项" separator="展示多项时的分割字符串" startIndex="字符开始位置" length="指定字符长度" wordNum="展示字符的数目" ellipsis="文字超出部分展示的文字" replace="需要替换的文字，可以是正则表达式" to="替换replace的文字信息" isClearTags="是否清除HTML标签" isReturnToBr="是否将回车替换为HTML换行标签" isLower="是否转换为小写" isUpper="是否转换为大写" isOriginal="如果是引用内容，是否获取所引用内容的值"></stl:content>
```

## 说明

通过 stl:content 标签在模板中展示指定内容的属性值。

&lt;stl:content&gt; 标签在内容模板中单独使用时，系统默认将展示当前内容的值。

如果 &lt;stl:content&gt; 标签嵌套在 &lt;stl:contents&gt;以及&lt;stl:pageContents&gt; 内容列表标签内，系统将获取内容列表项并解析为相应的值。

stl:content 标签只能放在内容模版中或者作为 &lt;stl:contents&gt;以及&lt;stl:pageContents&gt; 等内容列表标签的子标签。

type 属性用于明确需要展示内容的具体字段，如果未设置，系统将展示内容标题。

如果需要对返回的文字进行截字或者其他处理，请设置 [展示文字](/text) 属性。

如果需要展示日期/时间类型的内容字段，可以通过 formatString 属性 [格式化日期](/date)。

如果希望将内容的属性值放到 HTML 元素或者 STL 元素的属性中使用，请使用{stl:content} 实体写法，如：`<a title="{stl:content type=title}">`。

如果需要获取内容正文并翻页展示，请设置type属性为 `pageContent`，同时配合 stl:pageItem 标签实现翻页效果。

## 解析

如果使用 &lt;stl:content&gt; 元素，系统将根据内容字段的类型解析为不同的值（通常为字符串，如果字段类型为图片系统将解析为&lt;img&gt;标签）。

如果使用 {stl:content} 实体，系统将根据是否设置type 属性，解析为不同的结果：

- 设置了type属性，系统将实体解析为内容的具体字段值。
- 未设置type属性，系统将实体解析为内容的JSON对象。

## 属性

| 属性                                               | 说明                                   |
| -------------------------------------------------- | -------------------------------------- |
| [type](content/attributes?id=type)                 | 展示的类型                             |
| [leftText](content/attributes?id=leftText)         | 展示在信息前的文字                     |
| [rightText](content/attributes?id=rightText)       | 展示在信息后的文字                     |
| [formatString](content/attributes?id=formatString) | 展示的格式                             |
| [no](content/attributes?id=no)                     | 展示第几项                             |
| [separator](content/attributes?id=separator)       | 展示多项时的分割字符串                 |
| [startIndex](content/attributes?id=startIndex)     | 字符开始位置                           |
| [length](content/attributes?id=length)             | 指定字符长度                           |
| [wordNum](content/attributes?id=wordNum)           | 展示字符的数目                         |
| [ellipsis](content/attributes?id=ellipsis)         | 文字超出部分展示的文字                 |
| [replace](content/attributes?id=replace)           | 需要替换的文字，可以是正则表达式       |
| [to](content/attributes?id=to)                     | 替换replace的文字信息                  |
| [isClearTags](content/attributes?id=isClearTags)   | 是否清除HTML标签                       |
| [isReturnToBr](content/attributes?id=isReturnToBr) | 是否将回车替换为HTML换行标签           |
| [isLower](content/attributes?id=isLower)           | 是否转换为小写                         |
| [isUpper](content/attributes?id=isUpper)           | 是否转换为大写                         |
| [isOriginal](content/attributes?id=isOriginal)     | 如果是引用内容，是否获取所引用内容的值 |

<!-- done -->