# &lt;stl:contents&gt; 属性

下表显示所有属于此标签的属性列表。
所有属于 ASP.NET 标签 `<asp:DataList>` 或 HTML 标签 `<table>` 的成员均适用于 `<stl:contents>` 标签。

## channelIndex

栏目索引

## channelName

栏目名称

## upLevel

显示上几级栏目的内容列表，0 为本级，1 为父栏目，以此类推。

## topLevel

显示从首页向下某个级别栏目的内容列表，0 代表网站首页，1 代表一级栏目，以此类推。

## scope

内容范围。此属性只可属于以下可能的取值的一种。

- `"Self"` 只显示本栏目下的所有内容
- `"Children"` 只显示下一极子栏目下的所有内容
- `"SelfAndChildren"` 显示本级栏目及下一极子栏目下的所有内容
- `"Descendant"` 显示所有级别的子栏目下的所有内容
- `"All"` 显示全部内容

## groupChannel

栏目组别，如设置此属性，则只显示指定栏目组别的内容列表。

## groupChannelNot

非栏目组别，如设置此属性，则只显示不等于指定栏目组别的内容列表。

## groupContent

内容组别，如设置此属性，则只显示指定内容组别的内容列表。

## groupContentNot

非内容组别，如设置此属性，则只显示不等于内容组别的内容列表。

## tags

仅显示指定标签的内容列表，多个标签用","分隔。

## isTop

是否只显示置顶（非置顶）内容。

- `"true"` 仅显示置顶的内容。
- `"false"` 仅显示非置顶的内容。

## isRecommend

是否只显示推荐（非推荐）内容。

- `"true"` 仅显示推荐的内容
- `"false"` 仅显示非推荐的内容

## isHot

是否只显示热点（非热点）内容。

- `"true"` 仅显示热点的内容
- `"false"` 仅显示非热点的内容

## isColor

是否只显示醒目（非醒目）内容。

- `"true"` 仅显示醒目的内容
- `"false"` 仅显示非醒目的内容

## totalNum

设置列表一共显示多少条信息，0 代表显示所有信息。

## startNum

从第几条信息开始显示，默认从第一条信息开始显示。

## order

内容列表排序方式。此属性只可属于以下可能的取值的一种。

- `"Default"` 默认排序，即内容管理界面中的排序
- `"Back"` 默认排序的相反方向
- `"AddDate"` 按添加时间排序
- `"AddDateBack"` 按添加时间的相反方向排序
- `"LastEditDate"` 按最后更改时间排序
- `"LastEditDateBack"` 按最后更改时间的相反方向排序
- `"Hits"` 按点击量排序
- `"HitsByDay"` 按日点击量排序
- `"HitsByWeek"` 按周点击量排序
- `"HitsByMonth"` 按月点击量排序
- `"Stars"` 按评分数排序
- `"Digg"` 按点评数排序
- `"Comments"` 按评论数排序
- `"Random"` 随机显示内容

## isImage

是否只显示带有图片（不带图片）的内容。

- `"true"` 仅显示带有图片的内容
- `"false"` 仅显示不带图片的内容

## isVideo

是否只显示带有视频（不带视频）的内容。

- `"true"` 仅显示带有视频的内容
- `"false"` 仅显示不带视频的内容

## isFile

是否只显示带有附件（不带附件）的内容。

- `"true"` 仅显示带有附件的内容
- `"false"` 仅显示不带附件的内容

## isNoDup

不显示重复标题的内容

- `"true"` 不显示重复标题的内容
- `"false"` 显示重复标题的内容

## isRelatedContents

是否显示相关内容列表

- `"true"` 显示相关内容列表
- `"false"` 不显示相关内容列表

## where

获取内容列表的条件判断

## cellPadding

填充像素值

## cellSpacing

间距像素值

## columns

列数，默认显示一列

## direction

方向

- `"Vertical"` 垂直
- `"Horizontal"` 水平

## layout

重复布局

- `"None"` 无，常用于 Div+Css 形式页面
- `"Flow"` SPAN 标签布局
- `"Table"` 表格布局

## itemHeight

列表中每一项的高度

## itemWidth

列表中每一项的宽度

## itemAlign

列表中每一项的水平对齐方式

- `"Center"` 居中对齐
- `"Left"` 居左对齐
- `"Right"` 居右对齐
- `"Justify"` 向页面的左右边缘对齐
- `"NotSet"` 不设置

## itemVerticalAlign

列表中每一项的垂直对齐方式

- `"Top"` 顶端对齐
- `"Middle"` 居中对齐
- `"Bottom"` 底端对齐
- `"NotSet"` 不设置

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

- `"Center"` 居中对齐
- `"Left"` 居左对齐
- `"Right"` 居右对齐
- `"Justify"` 向页面的左右边缘对齐
- `"NotSet"` 不设置
