# &lt;stl:channel&gt; 获取栏目值

```html
<stl:channel
  channelIndex="栏目索引"
  channelName="栏目名称"
  ellipsis="文字超出部分显示的文字"
  formatString="显示的格式"
  isClearTags="是否清除HTML标签"
  isDynamic="是否动态显示"
  isLower="是否转换为小写"
  isReturnToBr="是否将回车替换为HTML换行标签"
  isUpper="是否转换为大写"
  leftText="显示在信息前的文字"
  length="指定字符长度"
  parent="显示父栏目属性"
  replace="需要替换的文字，可以是正则表达式"
  rightText="显示在信息后的文字"
  separator="显示多项时的分割字符串"
  startIndex="字符开始位置"
  to="替换replace的文字信息"
  topLevel="从首页向下的栏目级别"
  type="显示的类型"
  upLevel="上级栏目的级别"
  wordNum="显示字符的数目">
</stl:channel>
```

## 使用说明

channelIndex="栏目索引"，channelName="栏目名称"，parent="显示父栏目属性"，upLevel="上级栏目的级别"以及topLevel="从首页向下的栏目级别"用于定位到具体的栏目。 
type="显示的类型"用于明确需要显示栏目的具体值。

## 备注

stl:channel 标签通常作为 stl:channels 等标签的子标签使用，用于显示对应栏目的属性值。

如果设置了 channelIndex 属性，系统将寻找对应此栏目索引的栏目并显示此栏目的属性值。 
如果设置了 channelName 属性，系统将寻找对应此栏目名称的栏目并显示此栏目的属性值。 
如果设置了 parent 或 upLevel 属性，系统将寻找上级或上几级的栏目并显示此栏目的属性值。 
如果以上属性都未设置，系统将寻找当前栏目并显示对应的属性值。

`<stl:channel>`标签对应的实体为{stl:channel}，可以将实体放到属性中使用，如：
`<a title="{stl:channel type=Title}">`

## 属性

| 属性         | 说明                             |
| ------------ | -------------------------------- |
| channelIndex | 栏目索引                         |
| channelName  | 栏目名称                         |
| parent       | 显示父栏目属性                   |
| upLevel      | 上级栏目的级别                   |
| topLevel     | 从首页向下的栏目级别             |
| type         | 显示的类型                       |
| leftText     | 显示在信息前的文字               |
| rightText    | 显示在信息后的文字               |
| formatString | 显示的格式                       |
| separator    | 显示多项时的分割字符串           |
| startIndex   | 字符开始位置                     |
| length       | 指定字符长度                     |
| wordNum      | 显示字符的数目                   |
| ellipsis     | 文字超出部分显示的文字           |
| replace      | 需要替换的文字，可以是正则表达式 |
| to           | 替换replace的文字信息            |
| isClearTags  | 是否清除HTML标签                 |
| isReturnToBr | 是否将回车替换为HTML换行标签     |
| isLower      | 是否转换为小写                   |
| isUpper      | 是否转换为大写                   |