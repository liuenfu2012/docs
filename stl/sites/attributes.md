# &lt;stl:sites&gt; 属性

## siteName

站点名称

## siteDir

站点文件夹

## scope

站点展示范围。此属性只可属于以下可能的取值的一种。

- `"children"` 展示下级站点的列表
- `"descendant"` 展示下级及下下级站点的列表
- `"all"` 展示所有站点的列表

## order

站点列表排序方式。

- `"default"` 默认排序，展示与 CMS 后台站点相同的排序
- `"contents"` 按站点中内容数进行排序
- `"hits"` 按站点中页面的点击量进行排序

## where

获取站点列表的条件判断

## totalNum

设置列表一共展示多少条信息，默认值为 0，代表展示所有信息。

```html
<stl:sites totalNum="7">
  <stl:site type="siteName"></stl:site><br />
</stl:sites>
```

## startNum

设置列表从第几条信息开始展示，默认值为 1，代表从第一条信息开始展示。

```html
<stl:sites startNum="3" totalNum="7">
  <stl:site type="siteName"></stl:site><br />
</stl:sites>
```

## layout

列表布局属性用于控制列表循环中每一项的展示方式，默认值为 `none`，即直接循环，不控制列表项展示。

- `"none"` 列表不使用布局，仅循环列表项，不控制列表项展示。此值是默认的，如果没有指定属性的话。
- `"table"` 列表使用表格布局，系统将把列表标签解析为 [HTML &lt;table&gt; 元素](/reference_html/table)，table 标签的所有属性（class、style、cellPadding、cellSpacing 等）均可用在列表标签中。

```html
<stl:sites layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:site type="siteName"></stl:site>
</stl:sites>
```

## columns

columns 属性决定要展示的列的数量。比如，如果要在列表中展示四列的项，那么可以把这个属性设为 4。

```html
<stl:sites layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:site type="siteName"></stl:site>
</stl:sites>
```

!> 注意：columns 属性只有当列表布局为表格（layout="table"）时才起作用。

## direction

direction 属性用于确定列表是按水平方向还是或垂直方向来重复。

- `"vertical"` 垂直
- `"horizontal"` 水平

如果将此属性设置为 vertical，列表中的项展示在从上到下加载的列中，然后从左到右，直到呈现所有项。例如，如果将 columns 属性设置为 3，列表中的项展示在三列中，如下表所示。

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

如果将此属性设置为 horizontal，列表中的项以从左到右加载的行展示，然后从上到下，直到呈现所有项。例如，如果将 columns 属性设置为 3，列表的项将以每行三项的形式展示，如下表所示。

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

注意，即使 direction 值为 vertical，还是展示为 4 个列。columns 永远是指重复的列的数量，而不是行的数量。

!> 注意：direction 属性只有当列表布局为表格（layout="table"）且设置了列数（columns）时才起作用。

## itemHeight

列表中每一项的高度。

!> 注意：itemHeight 属性只有当列表布局为表格（layout="table"）时才起作用。

## itemWidth

列表中每一项的宽度。

!> 注意：itemWidth 属性只有当列表布局为表格（layout="table"）时才起作用。

## itemAlign

列表中每一项的水平对齐方式。

- `"center"` 居中对齐。
- `"left"` 居左对齐。
- `"right"` 居右对齐。
- `"justify"` 向页面的左右边缘对齐。
- `"notSet"` 不设置。此值是默认的，如果没有指定属性的话。

!> 注意：itemAlign 属性只有当列表布局为表格（layout="table"）时才起作用。

## itemVerticalAlign

列表中每一项的垂直对齐方式。

- `"top"` 顶端对齐。
- `"middle"` 居中对齐。
- `"bottom"` 底端对齐。
- `"notSet"` 不设置。此值是默认的，如果没有指定属性的话。

!> 注意：itemVerticalAlign 属性只有当列表布局为表格（layout="table"）时才起作用。
