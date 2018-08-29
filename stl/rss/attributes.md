# &lt;stl:rss&gt; 属性

## channelIndex

栏目索引

## channelName

栏目名称

## scope

内容范围。此属性只可属于以下可能的取值的一种。

- `"Self"` 只显示本栏目下的所有内容
- `"Children"` 只显示下一极子栏目下的所有内容
- `"SelfAndChildren"` 显示本级栏目及下一极子栏目下的所有内容
- `"Descendant"` 显示所有级别的子栏目下的所有内容
- `"All"` 显示本级栏目及所有级别子栏目下的所有内容

## groupChannel

栏目组别，如设置此属性，则只显示指定栏目组别的内容列表。

## groupChannelNot

非栏目组别，如设置此属性，则只显示不等于指定栏目组别的内容列表。

## groupContent

内容组别，如设置此属性，则只显示指定内容组别的内容列表。

## groupContentNot

非内容组别，如设置此属性，则只显示不等于内容组别的内容列表。

## tags

仅显示指定标签的内容，多个标签用","分隔。

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

## version

生成的 Rss 版本

- `"Rss0"` .9 0.9 版本 Rss 订阅
- `"Rss1"` .0 1.0 版本 Rss 订阅
- `"Rss2"` .0 2.0 版本 Rss 订阅

## totalNum

设置一共显示多少条信息，0 代表显示所有信息。

## startNum

1 从第几条信息开始显示，默认从第一条信息开始显示。

## title

Rss 订阅标题

## description

Rss 订阅摘要
