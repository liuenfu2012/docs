# &lt;stl:select&gt; 下拉列表

```html
<stl:select
  isChannel="是否展示栏目下拉列表"
  channelIndex="栏目索引"
  channelName="栏目名称"
  upLevel="上级栏目的级别"
  topLevel="从首页向下的栏目级别"
  scope="选择的范围"
  groupChannel="指定展示的栏目组"
  groupChannelNot="指定不展示的栏目组"
  groupContent="指定展示的内容组"
  groupContentNot="指定不展示的内容组"
  tags="指定标签"
  order="排序"
  totalNum="展示数目"
  titleWordNum="标题文字数量"
  where="获取下拉列表的条件判断"
  queryString="链接参数"
  isTop="仅展示置顶内容"
  isRecommend="仅展示推荐内容"
  isHot="仅展示热点内容"
  isColor="仅展示醒目内容"
  title="下拉列表提示标题"
  openWin="选择是否新窗口打开链接">
</stl:select>
```

## 使用说明

通过 stl:select 标签在模板中展示栏目或内容下拉列表

stl:select 用于展示由栏目或内容标题组成的下拉列表，选择下拉列表中的项后页面转到对应的页面。

所有属于 HTML 标签 &lt;select&gt; 的成员均适用于 &lt;stl:select&gt; 标签。

title 属性代表下拉列表中的第一项，如果未设置此属性，第一项为内容列表第一项的标题。

如果设置了 channelIndex 属性，系统将寻找对应此栏目索引的栏目并展示此栏目的内容列表。
如果设置了 channelName 属性，系统将寻找对应此栏目名称的栏目并展示此栏目的内容列表。

&lt;stl:select&gt; 标签对应的实体为{stl:select}。

## 属性

| 属性                                                    | 说明                   |
| ------------------------------------------------------- | ---------------------- |
| [isChannel](select/attributes?id=isChannel)             | 是否展示栏目下拉列表   |
| [channelIndex](select/attributes?id=channelIndex)       | 栏目索引               |
| [channelName](select/attributes?id=channelName)         | 栏目名称               |
| [upLevel](select/attributes?id=upLevel)                 | 上级栏目的级别         |
| [topLevel](select/attributes?id=topLevel)               | 从首页向下的栏目级别   |
| [scope](select/attributes?id=scope)                     | 选择的范围             |
| [groupChannel](select/attributes?id=groupChannel)       | 指定展示的栏目组       |
| [groupChannelNot](select/attributes?id=groupChannelNot) | 指定不展示的栏目组     |
| [groupContent](select/attributes?id=groupContent)       | 指定展示的内容组       |
| [groupContentNot](select/attributes?id=groupContentNot) | 指定不展示的内容组     |
| [tags](select/attributes?id=tags)                       | 指定标签               |
| [order](select/attributes?id=order)                     | 排序                   |
| [totalNum](select/attributes?id=totalNum)               | 展示数目               |
| [titleWordNum](select/attributes?id=titleWordNum)       | 标题文字数量           |
| [where](select/attributes?id=where)                     | 获取下拉列表的条件判断 |
| [queryString](select/attributes?id=queryString)         | 链接参数               |
| [isTop](select/attributes?id=isTop)                     | 仅展示置顶内容         |
| [isRecommend](select/attributes?id=isRecommend)         | 仅展示推荐内容         |
| [isHot](select/attributes?id=isHot)                     | 仅展示热点内容         |
| [isColor](select/attributes?id=isColor)                 | 仅展示醒目内容         |
| [title](select/attributes?id=title)                     | 下拉列表提示标题       |
| [openWin](select/attributes?id=openWin)                 | 选择是否新窗口打开链接 |