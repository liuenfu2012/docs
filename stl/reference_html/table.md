# HTML &lt;table&gt; 元素

HTML 的 table 元素表示表格数据 — 即通过二维数据表表示的信息。

HTML &lt;table&gt; 元素支持 [全局属性](/reference_html/global_attributes.md)。下面列出的属性现在已经弃用（请使用 CSS 代替）。

## 属性

### align

这个枚举属性指定了包含在文档中的表格必须如何对齐。有如下值:

- left，表格将在文档左侧展示；
- center， 表格将在文档中央展示；
- right， 表格将在文档右侧展示；

> 小贴士: 不要使用这个属性，它已经不赞成被使用。 &lt;table&gt; 元素应该使用 CSS 制定样式。设置 margin-left 、margin-right 为 auto ( 或者 margin 设置为 0 auto) 来实现类似于 align 属性的效果。

### bgcolor

这个属性定义了表格的背景颜色。 它是一个 6 位的十六进制编码，定义于 sRGB，需要加上'#'作为前缀。 当然也可以使用下面已经被预先定义的字符串，来表示常用的 16 种颜色：

> 小贴士: 不要使用这个属性, 该属性已废弃，&lt;table&gt; 元素应当使用 CSS 定制样式。 CSS 中的 background-color 属性能够和 bgcolor 属性达到一样的效果。

### border

这个整型元素使用像素，定义了表格边框的大小。 如果设置为 0，这意味着 frame 属性被设置为空。如果设置为 1，表示表格具有 1px 大小的边框。

> 小贴士: 不要使用这个属性, 该属性已废弃，&lt;table&gt; 元素应当使用 CSS 定制样式。 CSS 属性 border, border-color, border-width 和 border-style 可实现相同效果。

### cellpadding

这个属性定义了表格单元的内容和边框之间的空间。如果它是一个像素长度单位，这个像素将被应用到所有的四个侧边；如果它是一个百分比的长度单位，内容将被作为中心，总的垂直（上和下）长度将代表这个百分比。这同样适用于总的水平（左和右）空间。

> 小贴士：不要使用这个属性，因为它已经被废弃。 &lt;table&gt; 元素应该使用 CSS 定制样式。 在&lt;table&gt; 元素上使用 CSS 属性值为 collapse 的 border-collapse 属性，在 &lt;td&gt; 元素上使用属性 padding，以达到类似于 cellpadding 的效果。

cellspacing
这个属性（使用百分比或像素）定义了两个单元格之间空间的大小（从水平和垂直方向上），包括了表格的顶部与第一行的单元格，表的左边与第一列单元格，表的右边与最后一列的单元格，表的底部与最后一行单元格之间的空间。

> 小贴士：不要使用这个属性，因为它已经被废弃。 &lt;table&gt; 元素应该使用 CSS 定制样式。在 &lt;table&gt; 元素上使用 CSS 的属性 border-spacing ，以达到类似于 cellspacing 的效果。

### frame

这个枚举属性定义了包围在表格周围的框架的哪个边必须展示。

> 小贴士：不要使用这个属性，因为它已经被废弃。 &lt;table&gt; 元素应该使用 CSS 定制样式。在 &lt;table&gt; 元素上使用 CSS 的属性 border-style 和 border-width ，以达到类似于 frame 的效果。

### rules

这个枚举属性定义了在一个表格中规则的展示位置。它可以有以下值：:

- none, 这表明没有规格将被展示；这是默认的值；
- groups, 这将使规则只展示在行组（row groups，通过 &lt;thead&gt; ， &lt;tbody&gt; 和 &lt;tfoot&gt; 元素定义）和列组（ column groups，通过&lt;col&gt; 和 &lt;colgroup&gt; 元素定义）之间
- rows, 这将使规则在行之间展示；
- columns, 这将使规则在列之间展示；
- all, 这将使规则在列和行之间展示；

> 小贴士：不要使用这个属性，因为它已经被废弃。规则应该使用 CSS 定义和设计样式。使用 border 属性，在适当的 &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;, &lt;col&gt; 或 &lt;colgroup&gt; 元素上。

### summary

该属性定义了一个替代文本，当表格无法在用户代理中展示的时候用来描述表格。通常，它被用来为残障人士提供可用性，比如，盲人使用盲文屏幕（Braille screen） 浏览网页，从中获取信息。如果要想对于非视力受限的人来说也可以提供作用，考虑使用 &lt;caption&gt; 代替。summary 属性不是强制性的，当一个 &lt;caption&gt; 发挥它应有的作用时，可以省略 summary 属性。

> 小贴士: 不要使用这个属性，因为它已经被废弃。

### width

该属性定义了表格的宽度。宽度可能是一个像素或者是一个百分比值，宽度的百分比值将被定义为表格容器的宽度。

> 小贴士: 不要使用这个属性，因为它已经被废弃。规则应该使用 CSS 定义和设计样式。使用 width 属性代替。

## 示例

### 简单的表格

```html
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```
