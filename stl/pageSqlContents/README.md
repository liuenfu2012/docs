---
sidebar: auto
---

# &lt;stl:pageSqlContents&gt; 翻页数据列表

```html
<stl:pageSqlContents
    pageNum="每页显示的数据数量"
    connectionStringName="数据库链接字符串名称"
    connectionString="数据库链接字符串"
    queryString="数据库查询语句"
    totalNum="显示数据总数"
    startNum="从第几条信息开始显示"
    layout="布局"
    columns="列数"
    direction="方向"
    height="整体高度"
    width="整体宽度"
    align="整体对齐"
    itemHeight="项高度"
    itemWidth="项宽度"
    itemAlign="项水平对齐"
    itemVerticalAlign="项垂直对齐"
    itemClass="项Css类">
</stl:pageSqlContents>
```

## 说明

通过 stl:pageSqlContents 标签在模板中显示能够翻页的数据库列表

&lt;stl:pageSqlContents&gt; 标签需要和 STL 标签 &lt;stl:pageItems&gt; 及 &lt;stl:pageItem&gt; 配合使用。

&lt;stl:pageSqlContents&gt; 标签和 &lt;stl:sqlContents&gt; 具有相同的属性，这两个标签的区别在于 &lt;stl:pageSqlContents&gt; 能够翻页。

通常将 STL 标签 &lt;stl:pageItems&gt; 及 &lt;stl:pageItem&gt; 置于 &lt;stl:pageSqlContents&gt; 标签的下方，代表翻页按钮。

列表相关介绍请参见列表标签及列表项

&lt;stl:pageSqlContents&gt; 标签对应的实体为{stl:pageSqlContents}。

## 子标签

| 子标签                            | 说明                    |
| --------------------------------- | ----------------------- |
| [stl:queryString](../queryString/)   | 定义数据库查询语句(SQL) |
| [stl:itemTemplate](../itemTemplate/) | 设置数据库数据列表项    |

## 属性

::: tip
所有属于 STL 标签 `<stl:sqlContents>` 的成员均适用于 `<stl:pageSqlContents>` 标签，所有属于 HTML 标签`<table>`的成员均适用于`<stl:pageSqlContents>`标签。
:::

| 属性                                             | 说明               |
| ------------------------------------------------ | ------------------ |
| [pageNum](#pagenum-每页显示的数据数量) | 每页显示的数据数量 |
| [connectionStringName](#connectionstringname-数据库链接字符串名称) | 数据库链接字符串名称 |
| [connectionString](#connectionstring-数据库链接字符串)             | 数据库链接字符串     |
| [queryString](#querystring-数据库查询语句)                         | 数据库查询语句       |
| [totalNum](#totalnum-显示数据总数)                                 | 显示数据总数         |
| [startNum](#startnum-从第几条信息开始显示)                         | 从第几条信息开始显示 |
| [layout](#layout-布局)                                             | 布局                 |
| [columns](#columns-列数)                                           | 列数                 |
| [direction](#direction-方向)                                       | 方向                 |
| [height](#height-整体高度)                                         | 整体高度             |
| [width](#width-整体宽度)                                           | 整体宽度             |
| [align](#align-整体对齐)                                           | 整体对齐             |
| [itemHeight](#itemheight-项高度)                                   | 项高度               |
| [itemWidth](#itemwidth-项宽度)                                     | 项宽度               |
| [itemAlign](#itemalign-项水平对齐)                                 | 项水平对齐           |
| [itemVerticalAlign](#itemverticalalign-项垂直对齐)                 | 项垂直对齐           |
| [itemClass](#itemclass-项css类)                                    | 项Css类              |

### pageNum - 每页显示的数据数量

每一页显示的数据库数据数量。

每页显示6条数据，最多显示5页：

```html
<stl:pageSqlContents pageNum="6" totalNum="30">
  <stl:sqlContent type="name"></stl:sqlContent><br />
</stl:pageSqlContents>
```

### connectionStringName - 数据库链接字符串名称

存储在系统根目录的Web.config文件中的数据库链接字符串名称，默认为系统使用的数据库 `ConnectionString`。

### connectionString - 数据库链接字符串

直接设置数据库链接字符串。

::: danger
connectionString属性将在模板文件中暴露数据库链接字符串，如果网站部署在外网，必须使用connectionStringName替代connectionString属性，防止数据库链接被暴露。
:::

### queryString - 数据库查询语句

设置数据库查询SQL语句，如果SQL语句需要较长建议使用子标签 `<stl:queryString>` 代替。

### totalNum - 显示数据总数

设置列表一共显示多少条信息，默认值为 0，代表显示所有信息。

```html
<stl:pageSqlContents totalNum="7">
  <stl:sqlContent type="name"></stl:sqlContent><br />
</stl:pageSqlContents>
```

### startNum - 从第几条信息开始显示

设置列表从第几条信息开始显示，默认值为 1，代表从第一条信息开始显示。

```html
<stl:pageSqlContents startNum="3" totalNum="7">
  <stl:sqlContent type="name"></stl:sqlContent><br />
</stl:pageSqlContents>
```

### layout - 布局

列表布局属性用于控制列表循环中每一项的显示方式，默认值为 `none`，即直接循环，不控制列表项显示。

- `"none"` 列表不使用布局，仅循环列表项，不控制列表项显示。此值是默认的，如果没有指定属性的话。
- `"table"` 列表使用表格布局，系统将把列表标签解析为 HTML &lt;table&gt; 元素，table 标签的所有属性（class、style、cellPadding、cellSpacing 等）均可用在列表标签中。

```html
<stl:pageSqlContents layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:sqlContent type="name"></stl:sqlContent>
</stl:pageSqlContents>
```

### columns - 列数

columns 属性决定要显示的列的数量。比如，如果要在列表中显示四列的项，那么可以把这个属性设为 4。

```html
<stl:pageSqlContents layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:sqlContent type="name"></stl:sqlContent>
</stl:pageSqlContents>
```

::: warning
columns 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

### direction - 方向

direction 属性用于确定列表是按水平方向还是或垂直方向来重复。

- `"vertical"` 垂直
- `"horizontal"` 水平

如果将此属性设置为 vertical，列表中的项显示在从上到下加载的列中，然后从左到右，直到呈现所有项。例如，如果将 columns 属性设置为 3，列表中的项显示在三列中，如下表所示。

<table>
<tbody>
<tr>
<td>1</td>
<td>4</td>
<td>7</td>
</tr>
<tr>
<td>2</td>
<td>5</td>
<td>8</td>
</tr>
<tr>
<td>3</td>
<td>6</td>
<td>9</td>
</tr>
</tbody>
</table>

如果将此属性设置为 horizontal，列表中的项以从左到右加载的行显示，然后从上到下，直到呈现所有项。例如，如果将 columns 属性设置为 3，列表的项将以每行三项的形式显示，如下表所示。

<table>
<tbody>
<tr>
<td>1</td>
<td>2</td>
<td>3</td>
</tr>
<tr>
<td>4</td>
<td>5</td>
<td>6</td>
</tr>
<tr>
<td>7</td>
<td>8</td>
<td>9</td>
</tr>
</tbody>
</table>

::: tip
即使 direction 值为 vertical，还是显示为 4 个列。columns 永远是指重复的列的数量，而不是行的数量。
:::

::: warning
direction 属性只有当列表布局为表格 `layout="table"` 且设置了列数 `columns` 时才起作用。
:::

### height - 整体高度

设置列表的整体高度。

::: warning
height 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

### width - 整体宽度

设置列表的整体宽度。

::: warning
width 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

### align - 整体对齐

设置列表的整体对齐方式。

- `"center"` 居中对齐。
- `"left"` 居左对齐。
- `"right"` 居右对齐。
- `"justify"` 向页面的左右边缘对齐。
- `"notSet"` 不设置。此值是默认的，如果没有指定属性的话。

::: warning
align 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

### itemHeight - 项高度

列表中每一项的高度。

::: warning
itemHeight 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

### itemWidth - 项宽度

列表中每一项的宽度。

::: warning
itemWidth 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

### itemAlign - 项水平对齐

列表中每一项的水平对齐方式。

- `"center"` 居中对齐。
- `"left"` 居左对齐。
- `"right"` 居右对齐。
- `"justify"` 向页面的左右边缘对齐。
- `"notSet"` 不设置。此值是默认的，如果没有指定属性的话。

::: warning
itemAlign 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

### itemVerticalAlign - 项垂直对齐

列表中每一项的垂直对齐方式。

- `"top"` 顶端对齐。
- `"middle"` 居中对齐。
- `"bottom"` 底端对齐。
- `"notSet"` 不设置。此值是默认的，如果没有指定属性的话。

::: warning
itemVerticalAlign 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

### itemClass - 项Css类

列表中每一项的Css类名称。

::: warning
itemClass 属性只有当列表布局为表格 `layout="table"` 时才起作用。
:::

## 示例

### 显示最新添加的内容列表

下面的例子显示按最新添加时间获取内容列表。

```html
<stl:pageSqlContents connectionStringName="ConnectionString" pageNum="6" totalNum="30" cellpadding="2">
  <stl:queryString>
    SELECT * FROM model_Content WHERE SiteId = {stl.SiteId} AND ChannelId > 0 ORDER BY AddDate DESC
  </stl:queryString>
  <stl:sqlContent type="Title" wordnum="20"></stl:sqlContent>
  (<stl:sqlContent type="AddDate" formatString="yyyy-MM-dd"></stl:sqlContent>)
  <br>
</stl:pageSqlContents>

<hr>

<stl:pageItems>
<div class="pagination">
  <ul>
    <li><a href="{PageItem.PreviousPage}">Prev</a></li>
    <stl:pageItem type="PageNavigation">
      <stl:yes>
        <li><a href="{Current.Url}">{Current.Num}</a></li>
      </stl:yes>
      <stl:no>
        <li class="active"><span>{Current.Num}</span></li>
      </stl:no>
    </stl:pageItem>
    <li><a href="{PageItem.NextPage}">Next</a></li>
  </ul>
</div>
</stl:pageItems>
```
