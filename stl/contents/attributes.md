# &lt;stl:contents&gt; 属性

所有属于 HTML 标签`<table>`的成员均适用于`<stl:contents>`标签。

## channelIndex

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 显示首页的内容列表 -->
<stl:contents channelIndex="首页">
  <stl:a></stl:a><br />
</stl:contents>
```

## channelName

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 显示当前栏目下的名称为“栏目名称”的栏目的内容列表 -->
<stl:contents channelName="栏目名称">
  <stl:a></stl:a><br />
</stl:contents>
```

```html
<!-- 显示“栏目索引”下的名称为“栏目名称”的栏目的内容列表 -->
<stl:contents channelIndex="栏目索引" channelName="栏目名称">
  <stl:a></stl:a><br />
</stl:contents>
```

## parent

将上下文切换到当前栏目的上一级栏目。

- `"true"` 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
- `"false"` 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 显示当前栏目的上一级栏目的内容列表 -->
<stl:contents parent="true">
  <stl:a></stl:a><br />
</stl:contents>
```

## upLevel

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 显示当前栏目的上两级栏目的内容列表 -->
<stl:contents upLevel="2">
  <stl:a></stl:a><br />
</stl:contents>
```

## topLevel

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 显示一级栏目的内容列表 -->
<stl:contents topLevel="1">
  <stl:a></stl:a><br />
</stl:contents>
```

## scope

内容范围。此属性只可属于以下可能的取值的一种。

- `"self"` 只展示本栏目下的所有内容
- `"children"` 只展示下一极子栏目下的所有内容
- `"selfAndChildren"` 展示本级栏目及下一极子栏目下的所有内容
- `"descendant"` 展示所有级别的子栏目下的所有内容
- `"all"` 展示全部内容

## groupChannel

栏目组别，如设置此属性，则只展示指定栏目组别的内容列表。

## groupChannelNot

非栏目组别，如设置此属性，则只展示不等于指定栏目组别的内容列表。

## groupContent

内容组别，如设置此属性，则只展示指定内容组别的内容列表。

## groupContentNot

非内容组别，如设置此属性，则只展示不等于内容组别的内容列表。

## tags

仅展示指定标签的内容列表，多个标签用","分隔。

## isTop

是否只展示置顶（非置顶）内容。

- `"true"` 仅展示置顶的内容。
- `"false"` 仅展示非置顶的内容。

## isRecommend

是否只展示推荐（非推荐）内容。

- `"true"` 仅展示推荐的内容
- `"false"` 仅展示非推荐的内容

## isHot

是否只展示热点（非热点）内容。

- `"true"` 仅展示热点的内容
- `"false"` 仅展示非热点的内容

## isColor

是否只展示醒目（非醒目）内容。

- `"true"` 仅展示醒目的内容
- `"false"` 仅展示非醒目的内容

## order

内容列表排序方式。此属性只可属于以下可能的取值的一种。

- `"default"` 默认排序，即内容管理界面中的排序
- `"back"` 默认排序的相反方向
- `"addDate"` 按添加时间排序
- `"addDateBack"` 按添加时间的相反方向排序
- `"lastEditDate"` 按最后更改时间排序
- `"lastEditDateBack"` 按最后更改时间的相反方向排序
- `"hits"` 按点击量排序
- `"hitsByDay"` 按日点击量排序
- `"hitsByWeek"` 按周点击量排序
- `"hitsByMonth"` 按月点击量排序
- `"random"` 随机展示内容

## isImage

是否只展示带有图片（不带图片）的内容。

- `"true"` 仅展示带有图片的内容
- `"false"` 仅展示不带图片的内容

## isVideo

是否只展示带有视频（不带视频）的内容。

- `"true"` 仅展示带有视频的内容
- `"false"` 仅展示不带视频的内容

## isFile

是否只展示带有附件（不带附件）的内容。

- `"true"` 仅展示带有附件的内容
- `"false"` 仅展示不带附件的内容

## isRelatedContents

是否展示相关内容列表

- `"true"` 展示相关内容列表
- `"false"` 不展示相关内容列表

## where

获取内容列表的条件判断

## totalNum

设置列表一共展示多少条信息，默认值为 0，代表展示所有信息。

```html
<stl:contents totalNum="7">
  <stl:a></stl:a><br />
</stl:contents>
```

## startNum

设置列表从第几条信息开始展示，默认值为 1，代表从第一条信息开始展示。

```html
<stl:contents startNum="3" totalNum="7">
  <stl:a></stl:a><br />
</stl:contents>
```

## layout

列表布局属性用于控制列表循环中每一项的展示方式，默认值为 `none`，即直接循环，不控制列表项展示。

- `"none"` 列表不使用布局，仅循环列表项，不控制列表项展示。此值是默认的，如果没有指定属性的话。
- `"table"` 列表使用表格布局，系统将把列表标签解析为 [HTML &lt;table&gt; 元素](/reference_html/table)，table 标签的所有属性（class、style、cellPadding、cellSpacing 等）均可用在列表标签中。

```html
<stl:contents layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:content type="Title"></stl:content></stl:a>
</stl:contents>
```

## columns

columns 属性决定要展示的列的数量。比如，如果要在列表中展示四列的项，那么可以把这个属性设为 4。

```html
<stl:contents layout="table" columns="3" width="90%" border="0" cellpadding="2">
    <stl:a><stl:content type="Title"></stl:content></stl:a>
</stl:contents>
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
