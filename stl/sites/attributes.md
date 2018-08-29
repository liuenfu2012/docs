# &lt;stl:sites&gt; 属性

## siteName

站点名称

## siteDir

站点文件夹

## totalNum

设置列表一共显示多少个站点，不设置将显示所有站点。

## startNum

从第几个站点开始显示，默认从第一个站点开始显示。

## scope

站点显示范围。此属性只可属于以下可能的取值的一种。

- `"Children"` 显示下级站点的列表
- `"Descendant"` 显示下级及下下级站点的列表
- `"All"` 显示所有站点的列表

## order

站点列表排序方式。

- `"Default"` 默认排序，显示与 CMS 后台站点相同的排序
- `"Contents"` 按站点中内容数进行排序
- `"Hits"` 按站点中页面的点击量进行排序

## since

时间段，格式为"数字+日期符号"，日期符号有"y"、"m"、"d"及"h"，分别代表年、月、天及小时。

## where

获取站点列表的条件判断

## columns

列数，默认显示一列

## direction

方向

- `"Vertical"` 垂直
- `"Horizontal"` 水平

## layout

重复布局

- `"Table"` 表格布局
- `"Flow"` SPAN 标签布局
- `"None"` 无，常用于 Div+Css 形式页面

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

## isDisplayIfEmpty

当项为零是是否显示。

- `"true"` 列表项不存在时仍然显示
- `"false"` 列表项不存在时不显示

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

## cellpadding

填充像素值

## cellspacing

间距像素值
