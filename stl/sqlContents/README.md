# &lt;stl:sqlContents&gt; 数据库列表

```html
<stl:sqlContents
  connectionStringName="数据库链接字符串名称"
  connectionString="数据库链接字符串"
  queryString="数据库查询语句"
  totalNum="展示内容数目"
  startNum="从第几条信息开始展示"
  order="排序"
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
</stl:sqlContents>
```

## 使用说明

通过 stl:sqlContents 标签在模板中展示数据库列表

标签 &lt;stl:sqlContents&gt; 通过定义数据库链接字符串（connectionString 属性），使用 &lt;stl:queryString&gt; 和 &lt;stl:sqlContent&gt; 来获取数据库的数据。

通过标签 &lt;stl:queryString&gt; 定义数据库查询语句，即SQL 语句。
通过标签 &lt;stl:sqlContent&gt; 或 {Sql} 数据库实体 获取数据中的每一项。
&lt;stl:sqlContents&gt; 标签对应的实体为{stl:sqlContents}。

## 子标签

| 子标签                            | 说明                    |
| --------------------------------- | ----------------------- |
| [stl:queryString](queryString/)   | 定义数据库查询语句(SQL) |
| [stl:itemTemplate](itemTemplate/) | 设置数据库数据列表项    |

## 属性

| 属性                                                                   | 说明                   |
| ---------------------------------------------------------------------- | ---------------------- |
| [connectionStringName](sqlContents/attributes?id=connectionStringName) | 数据库链接字符串名称   |
| [connectionString](sqlContents/attributes?id=connectionString)         | 数据库链接字符串       |
| [queryString](sqlContents/attributes?id=queryString)                   | 数据库查询语句         |
| [channelIndex](sqlContents/attributes?id=channelIndex)                 | 栏目索引               |
| [channelName](sqlContents/attributes?id=channelName)                   | 栏目名称               |
| [upLevel](sqlContents/attributes?id=upLevel)                           | 上级栏目的级别         |
| [topLevel](sqlContents/attributes?id=topLevel)                         | 从首页向下的栏目级别   |
| [scope](sqlContents/attributes?id=scope)                               | 内容范围               |
| [groupChannel](sqlContents/attributes?id=groupChannel)                 | 指定展示的栏目组       |
| [groupChannelNot](sqlContents/attributes?id=groupChannelNot)           | 指定不展示的栏目组     |
| [groupContent](sqlContents/attributes?id=groupContent)                 | 指定展示的内容组       |
| [groupContentNot](sqlContents/attributes?id=groupContentNot)           | 指定不展示的内容组     |
| [tags](sqlContents/attributes?id=tags)                                 | 指定标签               |
| [isTop](sqlContents/attributes?id=isTop)                               | 仅展示置顶内容         |
| [isRecommend](sqlContents/attributes?id=isRecommend)                   | 仅展示推荐内容         |
| [isHot](sqlContents/attributes?id=isHot)                               | 仅展示热点内容         |
| [isColor](sqlContents/attributes?id=isColor)                           | 仅展示醒目内容         |
| [totalNum](sqlContents/attributes?id=totalNum)                         | 展示内容数目           |
| [startNum](sqlContents/attributes?id=startNum)                         | 从第几条信息开始展示   |
| [order](sqlContents/attributes?id=order)                               | 排序                   |
| [isImage](sqlContents/attributes?id=isImage)                           | 仅展示图片内容         |
| [isVideo](sqlContents/attributes?id=isVideo)                           | 仅展示视频内容         |
| [isFile](sqlContents/attributes?id=isFile)                             | 仅展示附件内容         |
| [isRelatedContents](sqlContents/attributes?id=isRelatedContents)       | 展示相关内容列表       |
| [where](sqlContents/attributes?id=where)                               | 获取内容列表的条件判断 |
| [columns](sqlContents/attributes?id=columns)                           | 列数                   |
| [direction](sqlContents/attributes?id=direction)                       | 方向                   |
| [height](sqlContents/attributes?id=height)                             | 指定列表布局方式       |
| [width](sqlContents/attributes?id=width)                               | 整体高度               |
| [align](sqlContents/attributes?id=align)                               | 整体宽度               |
| [itemHeight](sqlContents/attributes?id=itemHeight)                     | 整体对齐               |
| [itemWidth](sqlContents/attributes?id=itemWidth)                       | 项高度                 |
| [itemAlign](sqlContents/attributes?id=itemAlign)                       | 项宽度                 |
| [itemVerticalAlign](sqlContents/attributes?id=itemVerticalAlign)       | 项水平对齐             |
| [itemClass](sqlContents/attributes?id=itemClass)                       | 项垂直对齐             |
| [layout](sqlContents/attributes?id=layout)                             | 项Css类                |