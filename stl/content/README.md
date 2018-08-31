# &lt;stl:content&gt; 获取内容值

```html
<stl:content
 type="展示的类型"
 leftText="展示在信息前的文字"
 rightText="展示在信息后的文字"
 formatString="展示的格式"
 no="展示第几项"
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
 isUpper="是否转换为大写"
 isOriginal="如果是引用内容，是否获取所引用内容的值">
</stl:content>
```

## 使用说明

通过 stl:content 标签在模板中展示指定内容的属性值

channelIndex="栏目索引"，channelName="栏目名称"，parent="展示父栏目属性"，upLevel="上级栏目的级别"以及topLevel="从首页向下的栏目级别"用于定位到具体的栏目。
type="展示的类型"用于明确需要展示内容的具体值。

&lt;stl:content&gt; 标签对应的实体为{stl:content}，可以将实体放到属性中使用，如：
&lt;a title="{stl:content type=Title}"&gt;

## 备注

stl:content 标签只能在内容模版中或者作为 stl:contents 等内容列表标签的子标签。

stl:content 标签与STL 内容实体的作用基本相同，但如果type等于ImageUrl、LinkUrl或FileUrl， stl:content 标签将展示图片或链接，而内容实体只展示地址字符串。

type属性是可选属性。如果没有设置type属性，系统默认使用Title即内容标题作为type的取值。
如果 type为ImageUrl，系统将展示内容的图片。
如果 type为LinkUrl，系统将展示内容的链接。
如果 type为FileUrl，系统将展示内容附件的链接。
如果系统内容正文能够翻页展示，需要使用type="PageContent"，同时配合 stl:pageItem标签实现翻页效果。

如果需要对文字进行截字处理，可以使用startIndex、length或者wordNum属性，其中wordNum属性将区分中文和英文，两个英文算一个字符。

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