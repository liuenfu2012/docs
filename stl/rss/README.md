# &lt;stl:rss&gt; Rss订阅

```html
<stl:rss
  channelIndex="栏目索引"
  channelName="栏目名称"
  scope="内容范围"
  groupChannel="指定展示的栏目组"
  groupChannelNot="指定不展示的栏目组"
  groupContent="指定展示的内容组"
  groupContentNot="指定不展示的内容组"
  tags="指定标签"
  title="Rss订阅标题"
  description="Rss订阅摘要"
  totalNum="展示内容数目"
  startNum="从第几条信息开始展示"
  order="排序"
  isTop="仅展示置顶内容"
  isRecommend="仅展示推荐内容"
  isHot="仅展示热点内容"
  isColor="仅展示醒目内容">
</stl:rss>
```

## 使用说明

通过 stl:rss 标签在模板中生成Rss阅读器能够浏览的Rss订阅

&lt;stl:rss&gt; 通常在以 .xml 文件后缀结尾的单页模板中生成，用于 Rss 阅读器订阅栏目下的内容列表信息。

&lt;stl:rss&gt; 标签对应的实体为{stl:rss}。

## 属性

| 属性                                                 | 说明                 |
| ---------------------------------------------------- | -------------------- |
| [channelIndex](rss/attributes?id=channelIndex)       | 栏目索引             |
| [channelName](rss/attributes?id=channelName)         | 栏目名称             |
| [scope](rss/attributes?id=scope)                     | 内容范围             |
| [groupChannel](rss/attributes?id=groupChannel)       | 指定展示的栏目组     |
| [groupChannelNot](rss/attributes?id=groupChannelNot) | 指定不展示的栏目组   |
| [groupContent](rss/attributes?id=groupContent)       | 指定展示的内容组     |
| [groupContentNot](rss/attributes?id=groupContentNot) | 指定不展示的内容组   |
| [tags](rss/attributes?id=tags)                       | 指定标签             |
| [title](rss/attributes?id=title)                     | Rss订阅标题          |
| [description](rss/attributes?id=description)         | Rss订阅摘要          |
| [totalNum](rss/attributes?id=totalNum)               | 展示内容数目         |
| [startNum](rss/attributes?id=startNum)               | 从第几条信息开始展示 |
| [order](rss/attributes?id=order)                     | 排序                 |
| [isTop](rss/attributes?id=isTop)                     | 仅展示置顶内容       |
| [isRecommend](rss/attributes?id=isRecommend)         | 仅展示推荐内容       |
| [isHot](rss/attributes?id=isHot)                     | 仅展示热点内容       |
| [isColor](rss/attributes?id=isColor)                 | 仅展示醒目内容       |