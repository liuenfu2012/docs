# &lt;stl:action&gt; 属性

## connectionString

数据库链接字符串

## connectionStringName

数据库链接字符串名称（在 web.config 中配置）

## queryString

数据库查询 SQL 语句

## type

显示数据库的字段名称。根据 queryString 表字段的不同 type 属性有不同的取值。

## startIndex

字符开始位置

## length

指定字符长度

## isLower

转换为小写

- `"true"` 转换
- `"false"` 不转换

## isUpper

转换为大写

- `"true"` 转换
- `"false"` 不转换
- `"ItemIndex"` 项次序数字

## leftText

显示在信息前的文字

## rightText

显示在信息后的文字

## formatString

显示的格式。

## separator

显示多项时的分割字符串。

## wordNum

显示字符的数目，0 代表不限制字数。

## ellipsis

... 文字超出部分显示的文字

## replace

需要替换的文字，可以是正则表达式

## to

替换的文字信息

## isClearTags

是否清除 HTML 标签

- `"true"` 清除 HTML 标签
- `"false"` 不清除 HTML 标签

## isReturnToBr

是否将回车替换为 HTML 换行标签

- `"true"` 替换回车符
- `"false"` 不替换回车符
