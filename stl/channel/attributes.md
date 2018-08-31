# &lt;stl:channel&gt; 属性

## type

展示栏目属性的类型。根据后台栏目字段的不同 type 属性可以有不同的取值。详细字段请参考：[栏目表结构](https://docs.siteserver.cn/model/#/siteserver_Channel)。

- `"title"` 展示栏目的名称。此值是默认的，如果没有指定属性的话。
- `"id"` 栏目 Id。
- `"channelIndex"` 栏目索引。
- `"content"` Content。
- `"pageContent"` 能够翻页展示的栏目正文。
- `"addDate"` 展示栏目添加日期。
- `"imageUrl"` 展示栏目图片。
- `"itemIndex"` 项次序数字。
- `"countOfChannels"` 子栏目数。
- `"countOfContents"` 内容数。
- `"countOfImageContents"` 图片内容数。
- `"keywords"` 关键字。
- `"description"` 页面描述。
- `"自定义字段"` 在后台栏目字段管理中自定义的字段名称。

## channelIndex

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 展示首页栏目的正文 -->
<stl:channel channelIndex="首页" type="content"></stl:channel>
```

## channelName

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 展示当前栏目下的名称为“栏目名称”的栏目的正文 -->
<stl:channel channelName="栏目名称" type="content"></stl:channel>
```

```html
<!-- 展示“栏目索引”下的名称为“栏目名称”的栏目的正文 -->
<stl:channel channelIndex="栏目索引" channelName="栏目名称" type="content"></stl:channel>
```

## parent

将上下文切换到当前栏目的上一级栏目。

- `"true"` 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
- `"false"` 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 展示当前栏目的上一级栏目的正文 -->
<stl:channel parent="true" type="content"></stl:channel>
```

## upLevel

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 展示当前栏目的上两级栏目的正文 -->
<stl:channel upLevel="2" type="content"></stl:channel>
```

## topLevel

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 展示一级栏目的正文 -->
<stl:channel topLevel="1" type="content"></stl:channel>
```

## wordNum

设置展示文字的字数，超出部分将用 ellipsis 属性设置的值替代。

!> wordNum 区分中英文，中文汉字算作一个字符，两个英文字母才算作一个字符。

由于在 Web 页面中，两个英文字母的宽度等于一个汉字，所以我们通常使用 wordNum 属性来设置文本的显示数量。

```html
<stl:channel wordNum="50"></stl:channel>
```

## startIndex

设置文字开始显示的位置，默认值为 0，代表从头展示。

!> startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。

```html
<stl:channel startIndex="10"></stl:channel>
```

## length

设置展示文字的字数，超出部分将用 ellipsis 属性设置的值替代。

!> startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。

```html
<stl:channel length="100"></stl:channel>
```

## ellipsis

设置了 wordNum 属性或者 length 属性时，当文字超出了指定的字数后，超出部分将用 ellipsis 属性设置的值来替代。

ellipsis 的默认值为 `...`，你也可以设置空值（ellipsis=""）来让超出部分不使用符号替换。

```html
<stl:channel wordNum="100" ellipsis=" -- end --"></stl:channel>
```

## replace

如果需要将文字中的一部分替换为另一部分，可以使用 replace 属性和 to 属性。

replace 代表需要替换的文字，支持纯文本、列表和正则表达式三种写法。

### 使用纯文本替换

纯文本替换直接输入替换前文字和替换后文字即可：

```html
<stl:channel replace="他" to="她"></stl:channel>
```

### 使用列表替换

列表替换适合多个文本替换的情况，将需要替换的文字用英文逗号（,）隔开：

```html
<stl:channel replace="他,她" to="he,she"></stl:channel>
```

如果多个文本都替换为一个文本，to 属性可以不使用逗号隔开：

```html
<stl:channel replace="他,她" to="who"></stl:channel>
```

### 使用正则表达式替换

正则表达式替换需要将 replace 前后添加“/”符号，“/”符号之间的文字为替换需要使用的正则表达式：

```html
<stl:channel replace="/(Mr\\.? |Mrs\\.? |Miss |Ms\\.? )/" to=""></stl:channel>
```

## to

to 代表替换后的文字。

## isClearTags

设置是否清除 HTML 标签，仅显示纯文本。

在后台内容编辑器中录入的数据通常会带有大量的 HTML 标签，如果我们只希望显示文字本身，需要使用 isClearTags 属性。

- `"true"` 清除 HTML 标签。
- `"false"` 不清除 HTML 标签。此值是默认的，如果没有指定属性的话。

```html
<stl:channel type="content" isClearTags="true"></stl:channel>
```

## isReturnToBr

设置是否将回车换行符号替换为 HTML &lt;br&gt;换行标签。

由于 HTML 中的换行在页面中显示为空格，所以如果需要显示后台 TextArea 文本框录入的换行时，需要使用 isReturnToBr 属性。

- `"true"` 替换回车符。
- `"false"` 不替换回车符。此值是默认的，如果没有指定属性的话。

```html
<stl:channel type="description" isReturnToBr="true"></stl:channel>
```

## isLower

设置是否将文本中的所有英文字母转换为小写字母。

- `"true"` 转换为小写。
- `"false"` 不转换为小写。此值是默认的，如果没有指定属性的话。

```html
<stl:channel type="title" isLower="true"></stl:channel>
```

## isUpper

设置是否将文本中的所有英文字母转换为大写字母。

- `"true"` 转换为大写。
- `"false"` 不转换为大写。此值是默认的，如果没有指定属性的话。

```html
<stl:channel type="title" isUpper="true"></stl:channel>
```

## leftText

展示在文字之前的文字，系统会判断文字是否为空，如果文字为空，文字前缀也将不显示。

```html
<stl:channel leftText="标题：" type="title"></stl:channel>
```

## rightText

展示在文字之后的文字，系统会判断文字是否为空，如果文字为空，文字后缀也将不显示。

```html
<stl:channel leftText="【" rightText="】" type="title"></stl:channel>
```

## formatString

当需要展示日期型的字段值时，可以通过 formatString 属性来设置日期格式。

```html
<stl:channel type="AddDate" formatString="yyyy-MM-dd"></stl:channel>
```

## separator

展示多项时的分割字符串。
