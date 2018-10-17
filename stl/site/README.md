# &lt;stl:site&gt; 获取站点值

```html
<stl:site siteName="站点名称" siteDir="站点文件夹" type="类型" formatString="展示的格式" separator="展示多项时的分割字符串" startIndex="字符开始位置" length="指定字符长度" wordNum="展示字符的数目" ellipsis="文字超出部分展示的文字" replace="需要替换的文字，可以是正则表达式" to="替换replace的文字信息" isClearTags="是否清除标签信息" isReturnToBr="是否将回车替换为HTML换行标签" isLower="是否转换为小写" isUpper="是否转换为大写"></stl:site>
```

## 说明

通过 stl:site 标签在模板中展示站点值

&lt;stl:site&gt; 必须包含 siteName 或 siteDir 属性，用于指定站点并展示内容。

&lt;stl:site&gt; 必须包含子标签，否则将不起作用，系统将找到对应的站点并在对应站点下解析子标签。子标签可以是任意STL标签或HTML标签。

&lt;stl:site&gt; 标签对应的实体为{stl:site}。

## 属性

| 属性                                            | 说明                             |
| ----------------------------------------------- | -------------------------------- |
| [siteName](site/attributes?id=siteName)         | 站点名称                         |
| [siteDir](site/attributes?id=siteDir)           | 站点文件夹                       |
| [type](site/attributes?id=type)                 | 类型                             |
| [formatString](site/attributes?id=formatString) | 展示的格式                       |
| [separator](site/attributes?id=separator)       | 展示多项时的分割字符串           |
| [startIndex](site/attributes?id=startIndex)     | 字符开始位置                     |
| [length](site/attributes?id=length)             | 指定字符长度                     |
| [wordNum](site/attributes?id=wordNum)           | 展示字符的数目                   |
| [ellipsis](site/attributes?id=ellipsis)         | 文字超出部分展示的文字           |
| [replace](site/attributes?id=replace)           | 需要替换的文字，可以是正则表达式 |
| [to](site/attributes?id=to)                     | 替换replace的文字信息            |
| [isClearTags](site/attributes?id=isClearTags)   | 是否清除标签信息                 |
| [isReturnToBr](site/attributes?id=isReturnToBr) | 是否将回车替换为HTML换行标签     |
| [isLower](site/attributes?id=isLower)           | 是否转换为小写                   |
| [isUpper](site/attributes?id=isUpper)           | 是否转换为大写                   |