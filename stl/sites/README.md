# &lt;stl:sites&gt; 站点列表

```html
<stl:sites
  align="整体对齐"
  cellPadding="填充"
  cellSpacing="间距"
  class="Css类"
  columns="列数"
  direction="方向"
  height="整体高度"
  isDynamic="是否动态显示"
  itemAlign="项水平对齐"
  itemClass="项Css类"
  itemHeight="项高度"
  itemVerticalAlign="项垂直对齐"
  itemWidth="项宽度"
  layout="指定列表布局方式"
  order="排序"
  scope="范围"
  since="时间段"
  siteName="站点名称"
  siteDir="站点文件夹"
  startNum="从第几条信息开始显示"
  totalNum="显示内容数目"
  where="获取站点列表的条件判断"
  width="整体宽度">
</stl:sites>
```

## 使用说明

通过 stl:sites 标签在模板中显示站点列表

标签 `<stl:sites>` 用于显示网站群中的站点，如果定义siteName或siteDir属性，系统将从对应站点的子站点中选择，否则系统将从所有站点中选择。

`<stl:sites>` 必须包含子标签，否则将不起作用，系统将找到对应的站点并在对应站点下解析子标签。子标签可以是任意STL标签或HTML标签。

属性 order 用于站点列表排序：

- order 不设置或设置为"Default"，站点列表将与CMS后台中站点的显示排序一致。
- order 设置为"Contents"，站点将根据内容数的多少进行排序，如果同时设置since属性，系统将根据对应时间段内添加的内容数量进行排序。
- order 设置为"Hits"，站点将根据页面点击量的多少进行排序，如果同时设置since属性，系统将根据对应时间段内页面浏览量的数量进行排序。

属性 since 用于指定时间段，列表将只显示这段时间内添加的站点。since 属性格式为"数字+日期符号"，如"1y"、"3m"、"10d"或"16h"，分别代表一年、三个月、十天及十六个小时。

`<stl:sites>` 标签对应的实体为{stl:sites}。

## 属性

| 属性              | 说明                   |
| ----------------- | ---------------------- |
| siteName          | 站点名称               |
| siteDir           | 站点文件夹             |
| cellPadding       | 填充                   |
| cellSpacing       | 间距                   |
| class             | Css类                  |
| columns           | 列数                   |
| direction         | 方向                   |
| layout            | 指定列表布局方式       |
| height            | 整体高度               |
| width             | 整体宽度               |
| align             | 整体对齐               |
| itemHeight        | 项高度                 |
| itemWidth         | 项宽度                 |
| itemAlign         | 项水平对齐             |
| itemVerticalAlign | 项垂直对齐             |
| itemClass         | 项Css类                |
| totalNum          | 显示内容数目           |
| startNum          | 从第几条信息开始显示   |
| where             | 获取站点列表的条件判断 |
| scope             | 范围                   |
| order             | 排序                   |
| since             | 时间段                 |