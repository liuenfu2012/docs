# &lt;stl:channel&gt; 获取栏目值

```html
<stl:channel type="展示的类型" channelIndex="栏目索引" channelName="栏目名称" parent="展示父栏目属性" upLevel="上级栏目的级别" topLevel="从首页向下的栏目级别" leftText="展示在信息前的文字" rightText="展示在信息后的文字" formatString="展示的格式" separator="展示多项时的分割字符串" startIndex="字符开始位置" length="指定字符长度" wordNum="展示字符的数目" ellipsis="文字超出部分展示的文字" replace="需要替换的文字，可以是正则表达式" to="替换replace的文字信息" isClearTags="是否清除HTML标签" isReturnToBr="是否将回车替换为HTML换行标签" isLower="是否转换为小写" isUpper="是否转换为大写"></stl:channel>
```

## 说明

通过 stl:channel 标签在模板中展示指定栏目的属性值。

&lt;stl:channel&gt; 标签单独使用时，系统默认将展示当前栏目的值，如果希望展示指定栏目的值，请设置 [上下文切换](/context?id=通过属性切换上下文) 属性。

如果 &lt;stl:channel&gt; 标签嵌套在 &lt;stl:channels&gt;以及&lt;stl:pageChannels&gt; 栏目列表标签内，系统将获取栏目列表项并解析为相应的值。

type 属性用于明确需要展示栏目的具体字段，如果未设置，系统将展示栏目名称。

如果需要对返回的文字进行截字或者其他处理，请设置 [展示文字](/text) 属性。

如果需要展示日期/时间类型的栏目字段，可以通过 formatString 属性 [格式化日期](/date)。

如果希望将栏目的属性值放到 HTML 元素或者 STL 元素的属性中使用，请使用{stl:channel} 实体写法，如：`<a title="{stl:channel type=title}">`。

如果需要获取栏目正文并翻页展示，请设置type属性为 `pageContent`，同时配合 stl:pageItem 标签实现翻页效果。

## 解析

如果使用 &lt;stl:channel&gt; 元素，系统将根据栏目字段的类型解析为不同的值（通常为字符串，如果字段类型为图片系统将解析为&lt;img&gt;标签）。

如果使用 {stl:channel} 实体，系统将根据是否设置type 属性，解析为不同的结果：

- 设置了type属性，系统将实体解析为栏目的具体字段值。
- 未设置type属性，系统将实体解析为栏目的JSON对象。

## 属性

| 属性                                               | 说明                             |
| -------------------------------------------------- | -------------------------------- |
| [type](channel/attributes?id=type)                 | 展示的类型                       |
| [channelIndex](channel/attributes?id=channelIndex) | 栏目索引                         |
| [channelName](channel/attributes?id=channelName)   | 栏目名称                         |
| [parent](channel/attributes?id=parent)             | 展示父栏目属性                   |
| [upLevel](channel/attributes?id=upLevel)           | 上级栏目的级别                   |
| [topLevel](channel/attributes?id=topLevel)         | 从首页向下的栏目级别             |
| [leftText](channel/attributes?id=leftText)         | 展示在信息前的文字               |
| [rightText](channel/attributes?id=rightText)       | 展示在信息后的文字               |
| [formatString](channel/attributes?id=formatString) | 展示的格式                       |
| [separator](channel/attributes?id=separator)       | 展示多项时的分割字符串           |
| [startIndex](channel/attributes?id=startIndex)     | 字符开始位置                     |
| [length](channel/attributes?id=length)             | 指定字符长度                     |
| [wordNum](channel/attributes?id=wordNum)           | 展示字符的数目                   |
| [ellipsis](channel/attributes?id=ellipsis)         | 文字超出部分展示的文字           |
| [replace](channel/attributes?id=replace)           | 需要替换的文字，可以是正则表达式 |
| [to](channel/attributes?id=to)                     | 替换replace的文字信息            |
| [isClearTags](channel/attributes?id=isClearTags)   | 是否清除HTML标签                 |
| [isReturnToBr](channel/attributes?id=isReturnToBr) | 是否将回车替换为HTML换行标签     |
| [isLower](channel/attributes?id=isLower)           | 是否转换为小写                   |
| [isUpper](channel/attributes?id=isUpper)           | 是否转换为大写                   |

<!-- done -->