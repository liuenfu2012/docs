# &lt;stl:sqlContent&gt; 数据库值

```html
<stl:sqlContent connectionStringName="数据库链接字符串名称" connectionString="数据库链接字符串" queryString="数据库查询语句" type="展示的类型" leftText="展示在信息前的文字" rightText="展示在信息后的文字" formatString="展示的格式" startIndex="字符开始位置" length="指定字符长度" wordNum="展示字符的数目" ellipsis="文字超出部分展示的文字" replace="需要替换的文字，可以是正则表达式" to="替换replace的文字信息" isClearTags="是否清除标签信息" isReturnToBr="是否将回车替换为HTML换行标签" isLower="是否转换为小写" isUpper="是否转换为大写"></stl:sqlContent>

```

## 说明

通过 stl:sqlContent 标签在模板中展示数据库值

stl:sqlContent 标签可以单独使用或者作为 &lt;stl:sqlContents&gt; 等内容列表标签的子标签。
stl:sqlContent 单独使用时需要指定 connectionString 或 connectionStringName 及 queryString 属性。
stl:sqlContent 标签与 STL 数据库实体的作用基本相同，stl:sqlContent 可以控制展示的字数及格式。

&lt;stl:sqlContent&gt;标签对应的实体为{stl:sqlContent}。

## 属性

| 属性                                                                  | 说明                             |
| --------------------------------------------------------------------- | -------------------------------- |
| [connectionStringName](sqlContent/attributes?id=connectionStringName) | 数据库链接字符串名称             |
| [connectionString](sqlContent/attributes?id=connectionString)         | 数据库链接字符串                 |
| [queryString](sqlContent/attributes?id=queryString)                   | 数据库查询语句                   |
| [type](sqlContent/attributes?id=type)                                 | 展示的类型                       |
| [leftText](sqlContent/attributes?id=leftText)                         | 展示在信息前的文字               |
| [rightText](sqlContent/attributes?id=rightText)                       | 展示在信息后的文字               |
| [formatString](sqlContent/attributes?id=formatString)                 | 展示的格式                       |
| [startIndex](sqlContent/attributes?id=startIndex)                     | 字符开始位置                     |
| [length](sqlContent/attributes?id=length)                             | 指定字符长度                     |
| [wordNum](sqlContent/attributes?id=wordNum)                           | 展示字符的数目                   |
| [ellipsis](sqlContent/attributes?id=ellipsis)                         | 文字超出部分展示的文字           |
| [replace](sqlContent/attributes?id=replace)                           | 需要替换的文字，可以是正则表达式 |
| [to](sqlContent/attributes?id=to)                                     | 替换replace的文字信息            |
| [isClearTags](sqlContent/attributes?id=isClearTags)                   | 是否清除标签信息                 |
| [isReturnToBr](sqlContent/attributes?id=isReturnToBr)                 | 是否将回车替换为HTML换行标签     |
| [isLower](sqlContent/attributes?id=isLower)                           | 是否转换为小写                   |
| [isUpper](sqlContent/attributes?id=isUpper)                           | 是否转换为大写                   |