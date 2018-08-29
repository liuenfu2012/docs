# &lt;stl:rss&gt; Rss订阅

```html
<stl:rss
channelIndex="栏目索引"
channelName="栏目名称"
description="Rss订阅摘要"
groupChannel="指定显示的栏目组"
groupChannelNot="指定不显示的栏目组"
groupContent="指定显示的内容组"
groupContentNot="指定不显示的内容组"
isColor="仅显示醒目内容"
isHot="仅显示热点内容"
isRecommend="仅显示推荐内容"
isTop="仅显示置顶内容"
order="排序"
scope="内容范围"
startNum="从第几条信息开始显示"
tags="指定标签"
title="Rss订阅标题"
totalNum="显示内容数目">
</stl:rss>
```

## 使用说明

通过 stl:rss 标签在模板中生成Rss阅读器能够浏览的Rss订阅

`<stl:rss>` 通常在以 .xml 文件后缀结尾的单页模板中生成，用于 Rss 阅读器订阅栏目下的内容列表信息。

`<stl:rss>` 标签对应的实体为{stl:rss}。

## 属性

| 属性            | 说明                 |
| --------------- | -------------------- |
| channelIndex    | 栏目索引             |
| channelName     | 栏目名称             |
| scope           | 内容范围             |
| groupChannel    | 指定显示的栏目组     |
| groupChannelNot | 指定不显示的栏目组   |
| groupContent    | 指定显示的内容组     |
| groupContentNot | 指定不显示的内容组   |
| tags            | 指定标签             |
| title           | Rss订阅标题          |
| description     | Rss订阅摘要          |
| totalNum        | 显示内容数目         |
| startNum        | 从第几条信息开始显示 |
| order           | 排序                 |
| isTop           | 仅显示置顶内容       |
| isRecommend     | 仅显示推荐内容       |
| isHot           | 仅显示热点内容       |
| isColor         | 仅显示醒目内容       |