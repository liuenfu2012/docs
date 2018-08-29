# &lt;stl:focusViewer&gt; 属性

## channelIndex

栏目索引

## channelName

栏目名称

## scope

内容范围。此属性只可属于以下可能的取值的一种。

- `"Self"` 只显示本栏目下的所有内容图片
- `"Children"` 只显示下一极子栏目下的所有内容图片
- `"SelfAndChildren"` 显示本级栏目及下一极子栏目下的所有内容图片
- `"Descendant"` 显示所有级别的子栏目下的所有内容图片
- `"All"` 显示本级栏目及所有级别子栏目下的所有内容图片

## group

指定显示的内容组。

## groupChannel

栏目组别，如设置此属性，则只显示指定栏目组别的内容图片。

## groupChannelNot

非栏目组别，如设置此属性，则只显示不等于指定栏目组别的内容图片。

## groupContent

内容组别，如设置此属性，则只显示指定内容组别的内容图片。

## groupContentNot

非内容组别，如设置此属性，则只显示不等于内容组别的内容图片。

## order

内容排序方式。此属性只可属于以下可能的取值的一种。

- `"Default"` 默认排序，即内容管理界面中的排序
- `"Back"` 默认排序的相反方向
- `"AddDate"` 按添加时间排序
- `"AddDateBack"` 按添加时间的相反方向排序
- `"LastEditDateBack"` 按最后更改时间的相反方向排序

## totalNum

设置列表一共显示多少幅内容图片，0 代表显示所有信息。

## startNum

从第几条信息开始显示，默认从第一条信息开始显示。

## titleWordNum

设置内容标题显示的字数，0 代表不限制字数。

## tags

仅显示指定标签的内容，多个标签用","分隔。

## where

获取滚动焦点图的条件判断

## theme

显示主题样式

- `"Style1"` 默认方式显示焦点图
- `"Style2"` Bcastr 方式显示焦点图
- `"Style3"` 焦点图样式三
- `"Style4"` 焦点图样式四

## isTop

是否只显示置顶（非置顶）内容。

- `"true"` 仅显示置顶的内容
- `"false"` 仅显示非置顶的内容

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

## height

图片高度

## width

图片宽度

## bgColor

背景色

## isShowText

是否显示内容文字标题。此属性只可属于以下可能的取值的一种。

- `"true"` 显示内容文字标题
- `"false"` 不显示内容文字标题

## isTopText

是否文字显示在顶端

- `"true"` 文字显示在顶端
- `"false"` 文字显示在底端
