# &lt;stl:sqlContent&gt; 属性

## connectionStringName

数据库链接字符串名称（在 web.config 中配置）

## connectionString

数据库链接字符串

## queryString

数据库查询 SQL 语句

## type

展示数据库的字段名称。根据 queryString 表字段的不同 type 属性有不同的取值。

## wordNum

设置展示文字的字数，超出部分将用 ellipsis 属性设置的值替代。

!> wordNum 区分中英文，中文汉字算作一个字符，两个英文字母才算作一个字符。

由于在 Web 页面中，两个英文字母的宽度等于一个汉字，所以我们通常使用 wordNum 属性来设置文本的显示数量。

```html
<stl:sqlContent wordNum="50"></stl:sqlContent>
```

## startIndex

设置文字开始显示的位置，默认值为 0，代表从头展示。

!> startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。

```html
<stl:sqlContent startIndex="10"></stl:sqlContent>
```

## length

设置展示文字的字数，超出部分将用 ellipsis 属性设置的值替代。

!> startIndex 不区分中英文，汉字、英文字母、空格及符号均认为是一个字符。

```html
<stl:sqlContent length="100"></stl:sqlContent>
```

## ellipsis

设置了 wordNum 属性或者 length 属性时，当文字超出了指定的字数后，超出部分将用 ellipsis 属性设置的值来替代。

ellipsis 的默认值为 `...`，你也可以设置空值（ellipsis=""）来让超出部分不使用符号替换。

```html
<stl:sqlContent wordNum="100" ellipsis=" -- end --"></stl:sqlContent>
```

## replace

如果需要将文字中的一部分替换为另一部分，可以使用 replace 属性和 to 属性。

replace 代表需要替换的文字，支持纯文本、列表和正则表达式三种写法。

### 使用纯文本替换

纯文本替换直接输入替换前文字和替换后文字即可：

```html
<stl:sqlContent replace="他" to="她"></stl:sqlContent>
```

### 使用列表替换

列表替换适合多个文本替换的情况，将需要替换的文字用英文逗号（,）隔开：

```html
<stl:sqlContent replace="他,她" to="he,she"></stl:sqlContent>
```

如果多个文本都替换为一个文本，to 属性可以不使用逗号隔开：

```html
<stl:sqlContent replace="他,她" to="who"></stl:sqlContent>
```

### 使用正则表达式替换

正则表达式替换需要将 replace 前后添加“/”符号，“/”符号之间的文字为替换需要使用的正则表达式：

```html
<stl:sqlContent replace="/(Mr\\.? |Mrs\\.? |Miss |Ms\\.? )/" to=""></stl:sqlContent>
```

## to

to 代表替换后的文字。

## isClearTags

设置是否清除 HTML 标签，仅显示纯文本。

在后台内容编辑器中录入的数据通常会带有大量的 HTML 标签，如果我们只希望显示文字本身，需要使用 isClearTags 属性。

- `"true"` 清除 HTML 标签。
- `"false"` 不清除 HTML 标签。此值是默认的，如果没有指定属性的话。

```html
<stl:sqlContent type="content" isClearTags="true"></stl:sqlContent>
```

## isReturnToBr

设置是否将回车换行符号替换为 HTML &lt;br&gt;换行标签。

由于 HTML 中的换行在页面中显示为空格，所以如果需要显示后台 TextArea 文本框录入的换行时，需要使用 isReturnToBr 属性。

- `"true"` 替换回车符。
- `"false"` 不替换回车符。此值是默认的，如果没有指定属性的话。

```html
<stl:sqlContent type="summary" isReturnToBr="true"></stl:sqlContent>
```

## isLower

设置是否将文本中的所有英文字母转换为小写字母。

- `"true"` 转换为小写。
- `"false"` 不转换为小写。此值是默认的，如果没有指定属性的话。

```html
<stl:sqlContent type="title" isLower="true"></stl:sqlContent>
```

## isUpper

设置是否将文本中的所有英文字母转换为大写字母。

- `"true"` 转换为大写。
- `"false"` 不转换为大写。此值是默认的，如果没有指定属性的话。

```html
<stl:sqlContent type="title" isUpper="true"></stl:sqlContent>
```

## leftText

展示在文字之前的文字，系统会判断文字是否为空，如果文字为空，文字前缀也将不显示。

```html
<stl:sqlContent leftText="标题：" type="title"></stl:sqlContent>
```

## rightText

展示在文字之后的文字，系统会判断文字是否为空，如果文字为空，文字后缀也将不显示。

```html
<stl:sqlContent leftText="【" rightText="】" type="title"></stl:sqlContent>
```

## formatString

当需要展示日期型的字段值时，可以通过 formatString 属性来设置日期格式。

```html
<stl:sqlContent type="AddDate" formatString="yyyy-MM-dd"></stl:sqlContent>
```
