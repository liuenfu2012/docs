# &lt;stl:channel&gt; 获取栏目值

```html
<stl:channel
  type="展示的类型"
  channelIndex="栏目索引"
  channelName="栏目名称"
  parent="展示父栏目属性"
  upLevel="上级栏目的级别"
  topLevel="从首页向下的栏目级别"
  leftText="展示在信息前的文字"
  rightText="展示在信息后的文字"
  formatString="展示的格式"
  separator="展示多项时的分割字符串"
  startIndex="字符开始位置"
  length="指定字符长度"
  wordNum="展示字符的数目"
  ellipsis="文字超出部分展示的文字"
  replace="需要替换的文字，可以是正则表达式"
  to="替换replace的文字信息"
  isClearTags="是否清除HTML标签"
  isReturnToBr="是否将回车替换为HTML换行标签"
  isLower="是否转换为小写"
  isUpper="是否转换为大写">
</stl:channel>
```

## 使用说明

stl:channel 标签通常作为 stl:channels 等标签的子标签使用，用于展示对应栏目的属性值。

type="展示的类型"用于明确需要展示栏目的具体字段。

&lt;stl:channel&gt; 元素默认展示当前栏目的值，如果希望展示指定栏目的值，请设置 [上下文切换](/context?id=通过属性切换上下文) 属性。

&lt;stl:channel&gt;标签对应的实体为{stl:channel}，可以将实体放到属性中使用，如：
&lt;a title="{stl:channel type=title}"&gt;；如果实体标签不包含type 属性，系统将把实体解析为JSON对象。

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