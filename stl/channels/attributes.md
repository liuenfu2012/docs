# &lt;stl:channels&gt; 属性

下表显示所有属于此标签的属性列表。
所有属于 ASP.NET 标签`<asp:DataList>`或 HTML 标签`<table>`的成员均适用于`<stl:channels>`标签。

## channelIndex

栏目索引

## channelName

栏目名称

## upLevel

显示上几级栏目的下级栏目列表，0 为显示下级栏目列表，1 为显示同级栏目列表，2 为显示父栏目的同级栏目列表，以此类推。

## topLevel

显示从首页向下某个级别栏目的下级栏目列表，0 代表网站首页，1 代表一级栏目，以此类推。

## isTotal

是否从所有栏目中选择（包括首页）

- `"true"` 从网站的所有栏目中选择合适的栏目进行显示。
- `"false"` 不从所有栏目总选择。此值是默认的，如果没有指定属性的话。

## isAllChildren

是否显示所有级别的子栏目

- `"true"` 显示所有级别的子栏目。
- `"false"` 只显示子栏目，不包括子栏目的子栏目。此值是默认的，如果没有指定属性的话。

## isImage

是否只显示带有图片的栏目。此属性只可属于以下可能的取值的一种。

- `"true"` 只显示带有图片的栏目。
- `"false"` 显示所有的栏目。此值是默认的，如果没有指定属性的话。

## groupChannel

栏目组别，如设置此属性，则只显示栏目组别等于 group 的栏目列表。

## groupChannelNot

非栏目组别，如设置此属性，则只显示栏目组别不等于 group 的栏目列表。

## order

栏目列表排序方式。此属性只可属于以下可能的取值的一种。

- `"Default"` 默认排序，即栏目管理界面中的排序。此值是默认的，如果没有指定属性的话。
- `"Back"` 默认排序的相反方向。
- `"AddDate"` 按添加时间排序。
- `"AddDateBack"` 按添加时间的相反方向排序。
- `"Hits"` 按点击量排序。
- `"Random"` 随机显示栏目。

## totalNum

设置列表一共显示多少条信息，0 代表显示所有信息。

## startNum

从第几条信息开始显示，默认从第一条信息开始显示。

## where

获取栏目列表的条件判断

## columns

列数，默认显示一列

## direction

方向

- `"Vertical"` 垂直。此值是默认的，如果没有指定属性的话。
- `"Horizontal"` 水平。

## layout

重复布局

- `"None"` 无，常用于 Div+Css 形式页面。此值是默认的，如果没有指定属性的话。
- `"Flow"` SPAN 标签布局。
- `"Table"` 表格布局。

## itemHeight

列表中每一项的高度

## itemWidth

列表中每一项的宽度

## itemAlign

列表中每一项的水平对齐方式

- `"Center"` 居中对齐。
- `"Left"` 居左对齐。此值是默认的，如果没有指定属性的话。
- `"Right"` 居右对齐。
- `"Justify"` 向页面的左右边缘对齐。
- `"NotSet"` 不设置。

## itemVerticalAlign

列表中每一项的垂直对齐方式

- `"Top"` 顶端对齐。此值是默认的，如果没有指定属性的话。
- `"Middle"` 居中对齐。
- `"Bottom"` 底端对齐。
- `"NotSet"` 不设置。

## itemClass

项 CSS 类

## class

整体 CSS 类

## target

控制链接打开窗口的目标

## height

列表的整体高度

## width

列表的整体宽度

## align

列表的整体对齐方式

- `"Center"` 居中对齐。
- `"Left"` 居左对齐。
- `"Right"` 居右对齐。
- `"Justify"` 向页面的左右边缘对齐。
- `"NotSet"` 不设置。

## cellpadding

填充像素值

## cellspacing

间距像素值
