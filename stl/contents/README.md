# &lt;stl:contents&gt; 内容列表

```html
<stl:contents
  channelIndex="栏目索引"
  channelName="栏目名称"
  upLevel="上级栏目的级别"
  topLevel="从首页向下的栏目级别"
  scope="内容范围"
  groupChannel="指定展示的栏目组"
  groupChannelNot="指定不展示的栏目组"
  groupContent="指定展示的内容组"
  groupContentNot="指定不展示的内容组"
  tags="指定标签"
  isTop="仅展示置顶内容"
  isRecommend="仅展示推荐内容"
  isHot="仅展示热点内容"
  isColor="仅展示醒目内容"
  totalNum="展示内容数目"
  startNum="从第几条信息开始展示"
  order="排序"
  isImage="仅展示图片内容"
  isVideo="仅展示视频内容"
  isFile="仅展示附件内容"
  isRelatedContents="展示相关内容列表"
  where="获取内容列表的条件判断"
  columns="列数"
  direction="方向"
  height="指定列表布局方式"
  width="整体高度"
  align="整体宽度"
  itemHeight="整体对齐"
  itemWidth="项高度"
  itemAlign="项宽度"
  itemVerticalAlign="项水平对齐"
  itemClass="项垂直对齐"
  layout="项Css类">
</stl:contents>
```

## 使用说明

通过 stl:contents 标签在模板中展示内容列表

stl:contents是列表标签，用于内容列表循环。
channelIndex="栏目索引"，channelName="栏目名称"，parent="展示父栏目属性"，upLevel="上级栏目的级别"以及topLevel="从首页向下的栏目级别"用于定位到具体的栏目。

## 注意

columns、direction 以及 layout 属性用于控制生成列表的HTML 标签。
columns 控制生成列表的列数，direction 控制生成列表的方向，layout 控制生成列表的HTML标签。
layout 为Table时系统使用 &lt;table&gt; 标签生成列表，layout 为Flow时系统使用 &lt;span&gt; 标签生成列表，默认为None，即仅循环列表项。

如果需要在内容页中展示与当前内容相关的内容列表，使用 isRelatedContents="true" 属性，系统将根据标签判断是否相关内容。

使用 isNoDup="true" 属性，系统将判断标题时候重复，重复标题的内容只展示一次。

如果设置了 channelIndex 属性，系统将寻找对应此栏目索引的栏目并展示此栏目的内容列表。
如果设置了 channelName 属性，系统将寻找对应此栏目名称的栏目并展示此栏目的内容列表。
如果设置了 parent 或 upLevel 属性，系统将寻找上级或上几级的栏目并对其内容进行循环展示。
如果设置了 topLevel 属性，系统将寻找从首页向下的栏目级别并对其内容进行循环展示。
如果以上属性都未设置，系统将寻找当前栏目并对内容进行循环展示。

&lt;stl:contents&gt; 标签对应的实体为{stl:contents}。

## 属性

| 属性                                                          | 说明                   |
| ------------------------------------------------------------- | ---------------------- |
| [channelIndex](contents/attributes?id=channelIndex)           | 栏目索引               |
| [channelName](contents/attributes?id=channelName)             | 栏目名称               |
| [upLevel](contents/attributes?id=upLevel)                     | 上级栏目的级别         |
| [topLevel](contents/attributes?id=topLevel)                   | 从首页向下的栏目级别   |
| [scope](contents/attributes?id=scope)                         | 内容范围               |
| [groupChannel](contents/attributes?id=groupChannel)           | 指定展示的栏目组       |
| [groupChannelNot](contents/attributes?id=groupChannelNot)     | 指定不展示的栏目组     |
| [groupContent](contents/attributes?id=groupContent)           | 指定展示的内容组       |
| [groupContentNot](contents/attributes?id=groupContentNot)     | 指定不展示的内容组     |
| [tags](contents/attributes?id=tags)                           | 指定标签               |
| [isTop](contents/attributes?id=isTop)                         | 仅展示置顶内容         |
| [isRecommend](contents/attributes?id=isRecommend)             | 仅展示推荐内容         |
| [isHot](contents/attributes?id=isHot)                         | 仅展示热点内容         |
| [isColor](contents/attributes?id=isColor)                     | 仅展示醒目内容         |
| [totalNum](contents/attributes?id=totalNum)                   | 展示内容数目           |
| [startNum](contents/attributes?id=startNum)                   | 从第几条信息开始展示   |
| [order](contents/attributes?id=order)                         | 排序                   |
| [isImage](contents/attributes?id=isImage)                     | 仅展示图片内容         |
| [isVideo](contents/attributes?id=isVideo)                     | 仅展示视频内容         |
| [isFile](contents/attributes?id=isFile)                       | 仅展示附件内容         |
| [isRelatedContents](contents/attributes?id=isRelatedContents) | 展示相关内容列表       |
| [where](contents/attributes?id=where)                         | 获取内容列表的条件判断 |
| [columns](contents/attributes?id=columns)                     | 列数                   |
| [direction](contents/attributes?id=direction)                 | 方向                   |
| [height](contents/attributes?id=height)                       | 指定列表布局方式       |
| [width](contents/attributes?id=width)                         | 整体高度               |
| [align](contents/attributes?id=align)                         | 整体宽度               |
| [itemHeight](contents/attributes?id=itemHeight)               | 整体对齐               |
| [itemWidth](contents/attributes?id=itemWidth)                 | 项高度                 |
| [itemAlign](contents/attributes?id=itemAlign)                 | 项宽度                 |
| [itemVerticalAlign](contents/attributes?id=itemVerticalAlign) | 项水平对齐             |
| [itemClass](contents/attributes?id=itemClass)                 | 项垂直对齐             |
| [layout](contents/attributes?id=layout)                       | 项Css类                |