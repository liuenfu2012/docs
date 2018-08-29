# &lt;stl:action&gt; 属性

所有属于 Html 标签 &lt;img&gt; 的成员均适用于 &lt;stl:image&gt; 标签，请参考：[HTML &lt;img&gt; 元素](/reference_html/img)。

## no

显示字段的顺序

## isoriginal

如果是引用内容，是否获取所引用内容的值

## channelIndex

栏目索引

## channelName

栏目名称

## parent

是否显示父栏目的图片。此属性只可属于以下可能的取值的一种。

- `"true"` 显示父栏目的图片，等价于 upLevel="1"
- `"false"` 不显示父栏目的图片

## upLevel

显示上几级栏目的图片，0 为本级，1 为父栏目，以此类推。

## topLevel

显示从首页向下某个级别栏目的图片，0 代表网站首页，1 代表一级栏目，以此类推。

## src

图片文件地址，可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录。

## altSrc

指定的图片不存在时的显示地址，可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录。

## type

ImageUrl 指定存储图片的字段，可以是自定义字段

## width

图片的宽度

## height

图片的高度
