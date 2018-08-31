# &lt;stl:sites&gt; 站点列表

```html
<stl:sites
  siteName="站点名称"
  siteDir="站点文件夹"
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
</stl:sites>
```

## 使用说明

通过 stl:sites 标签在模板中展示站点列表

标签 &lt;stl:sites&gt; 用于展示网站群中的站点，如果定义siteName或siteDir属性，系统将从对应站点的子站点中选择，否则系统将从所有站点中选择。

&lt;stl:sites&gt; 必须包含子标签，否则将不起作用，系统将找到对应的站点并在对应站点下解析子标签。子标签可以是任意STL标签或HTML标签。

属性 order 用于站点列表排序：

- order 不设置或设置为"Default"，站点列表将与CMS后台中站点的展示排序一致。
- order 设置为"Contents"，站点将根据内容数的多少进行排序，如果同时设置since属性，系统将根据对应时间段内添加的内容数量进行排序。
- order 设置为"Hits"，站点将根据页面点击量的多少进行排序，如果同时设置since属性，系统将根据对应时间段内页面浏览量的数量进行排序。

&lt;stl:sites&gt; 标签对应的实体为{stl:sites}。

## 属性

| 属性                                                       | 说明                   |
| ---------------------------------------------------------- | ---------------------- |
| [siteName](sites/attributes?id=siteName)                   | 站点名称               |
| [siteDir](sites/attributes?id=siteDir)                     | 站点文件夹             |
| [totalNum](sites/attributes?id=totalNum)                   | 展示内容数目           |
| [startNum](sites/attributes?id=startNum)                   | 从第几条信息开始展示   |
| [order](sites/attributes?id=order)                         | 排序                   |
| [where](sites/attributes?id=where)                         | 获取内容列表的条件判断 |
| [columns](sites/attributes?id=columns)                     | 列数                   |
| [direction](sites/attributes?id=direction)                 | 方向                   |
| [height](sites/attributes?id=height)                       | 指定列表布局方式       |
| [width](sites/attributes?id=width)                         | 整体高度               |
| [align](sites/attributes?id=align)                         | 整体宽度               |
| [itemHeight](sites/attributes?id=itemHeight)               | 整体对齐               |
| [itemWidth](sites/attributes?id=itemWidth)                 | 项高度                 |
| [itemAlign](sites/attributes?id=itemAlign)                 | 项宽度                 |
| [itemVerticalAlign](sites/attributes?id=itemVerticalAlign) | 项水平对齐             |
| [itemClass](sites/attributes?id=itemClass)                 | 项垂直对齐             |
| [layout](sites/attributes?id=layout)                       | 项Css类                |