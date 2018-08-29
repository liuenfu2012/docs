# &lt;stl:channel&gt; 属性

下表显示所有属于此标签的属性列表。

## channelIndex

栏目索引。

## channelName

栏目名称

## parent

是否显示父栏目的属性。此属性只可属于以下可能的取值的一种。

- `"true"` 显示父栏目的属性，等价于 upLevel="1"。
- `"false"` 不显示父栏目的属性。此值是默认的，如果没有指定属性的话。

## upLevel

显示上几级栏目的属性，0 为本级，1 为父栏目，以此类推。

## topLevel

显示从首页向下某个级别栏目的属性，0 代表网站首页，1 代表一级栏目，以此类推。

## type

显示栏目属性的类型。此属性只可属于以下可能的取值的一种。

- `"Title"` 显示栏目的名称。
- `"Id"` 栏目 Id。
- `"ChannelIndex"` 栏目索引。
- `"Content"` Content。
- `"PageContent"` 能够翻页显示的栏目正文。
- `"AddDate"` 显示栏目添加日期。
- `"ImageUrl"` 显示栏目图片。
- `"ItemIndex"` 项次序数字。
- `"CountOfChannels"` 子栏目数。
- `"CountOfContents"` 内容数。
- `"CountOfImageContents"` 图片内容数。
- `"Keywords"` 关键字。
- `"Description"` 页面描述。

## leftText

显示在信息前的文字，当信息不存在时文字也不显示。

## rightText

显示在信息后的文字，当信息不存在时文字也不显示。

## formatString

显示的格式。

## separator

显示多项时的分割字符串。

## wordNum

显示字符的数目，0 代表不限制字数。

## ellipsis

文字超出部分显示的文字

## replace

需要替换的文字，可以是正则表达式

## to

替换的文字信息

## isClearTags

是否清除 HTML 标签

- `"true"` 清除 HTML 标签。
- `"false"` 不清除 HTML 标签。此值是默认的，如果没有指定属性的话。

## isReturnToBr

是否将回车替换为 HTML 换行标签

- `"true"` 替换回车符。
- `"false"` 不替换回车符。此值是默认的，如果没有指定属性的话。

## isLower

是否转换为小写

- `"true"` 转换为小写。
- `"false"` 不转换为小写。此值是默认的，如果没有指定属性的话。

## isUpper

是否转换为大写

- `"true"` 转换为大写。
- `"false"` 不转换为大写。此值是默认的，如果没有指定属性的话。
