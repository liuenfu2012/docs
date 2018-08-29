# &lt;stl:value&gt; 获取值

```html
<stl:value
  ellipsis="文字超出部分显示的文字"
  formatString="显示的格式"
  isClearTags="是否清除标签信息"
  isDynamic="是否动态显示"
  isLower="是否转换为小写"
  isReturnToBr="是否将回车替换为HTML换行标签"
  isUpper="是否转换为大写"
  length="指定字符长度"
  replace="需要替换的文字，可以是正则表达式"
  separator="显示多项时的分割字符串"
  startIndex="字符开始位置"
  to="替换replace的文字信息"
  type="类型"
  wordNum="显示字符的数目">
</stl:value>
```

## 使用说明

通过 stl:value 标签在模板中获取值

type 属性可以是指定的字符串，代表"自定义模板语言"中定义的标签名称，系统将解析对应的自定义模板标签。

`<stl:value>` 标签对应的实体为{stl:value}。

## 属性

| 属性         | 说明                             |
| ------------ | -------------------------------- |
| type         | 类型                             |
| formatString | 显示的格式                       |
| separator    | 显示多项时的分割字符串           |
| startIndex   | 字符开始位置                     |
| length       | 指定字符长度                     |
| wordNum      | 显示字符的数目                   |
| ellipsis     | 文字超出部分显示的文字           |
| replace      | 需要替换的文字，可以是正则表达式 |
| to           | 替换replace的文字信息            |
| isClearTags  | 是否清除标签信息                 |
| isReturnToBr | 是否将回车替换为HTML换行标签     |
| isLower      | 是否转换为小写                   |
| isUpper      | 是否转换为大写                   |