# &lt;stl:value&gt; 获取值

```html
<stl:value
  type="类型"
  formatString="展示的格式"
  separator="展示多项时的分割字符串"
  startIndex="字符开始位置"
  length="指定字符长度"
  wordNum="展示字符的数目"
  ellipsis="文字超出部分展示的文字"
  replace="需要替换的文字，可以是正则表达式"
  to="替换replace的文字信息"
  isClearTags="是否清除标签信息"
  isReturnToBr="是否将回车替换为HTML换行标签"
  isLower="是否转换为小写"
  isUpper="是否转换为大写">
</stl:value>
```

## 使用说明

通过 stl:value 标签在模板中获取值

type 属性可以是指定的字符串，代表"自定义模板语言"中定义的标签名称，系统将解析对应的自定义模板标签。

&lt;stl:value&gt; 标签对应的实体为{stl:value}。

## 属性

| 属性                                             | 说明                             |
| ------------------------------------------------ | -------------------------------- |
| [type](value/attributes?id=type)                 | 类型                             |
| [formatString](value/attributes?id=formatString) | 展示的格式                       |
| [separator](value/attributes?id=separator)       | 展示多项时的分割字符串           |
| [startIndex](value/attributes?id=startIndex)     | 字符开始位置                     |
| [length](value/attributes?id=length)             | 指定字符长度                     |
| [wordNum](value/attributes?id=wordNum)           | 展示字符的数目                   |
| [ellipsis](value/attributes?id=ellipsis)         | 文字超出部分展示的文字           |
| [replace](value/attributes?id=replace)           | 需要替换的文字，可以是正则表达式 |
| [to](value/attributes?id=to)                     | 替换replace的文字信息            |
| [isClearTags](value/attributes?id=isClearTags)   | 是否清除标签信息                 |
| [isReturnToBr](value/attributes?id=isReturnToBr) | 是否将回车替换为HTML换行标签     |
| [isLower](value/attributes?id=isLower)           | 是否转换为小写                   |
| [isUpper](value/attributes?id=isUpper)           | 是否转换为大写                   |