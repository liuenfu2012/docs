# &lt;stl:each&gt; 列表项循环

```html
<stl:each
  type="循环类型"
  totalNum="展示内容数目"
  startNum="从第几条信息开始展示"
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
</stl:each>
```

## 使用说明

通过 stl:each 标签在模板中遍历指定的列表项

type类型为ImageUrl时，stl:each的子标签需要包含stl:image标签，以展示图片项。

type类型为VideoUrl时，stl:each的子标签需要包含stl:player标签或者stl:video标签，以展示视频项。

type类型为FileUrl时，stl:each的子标签需要包含stl:file标签，以展示附件项。

&lt;stl:each&gt; 标签可以作为 &lt;stl:contents&gt; 标签的子标签,也可以放在内容模板中.

&lt;stl:each&gt; 标签对应的实体为{stl:each}。

## 属性

| 属性                                                      | 说明                 |
| --------------------------------------------------------- | -------------------- |
| [type](each/attributes?id=type)                           | 循环类型             |
| [totalNum](each/attributes?id=totalNum)                   | 展示内容数目         |
| [startNum](each/attributes?id=startNum)                   | 从第几条信息开始展示 |
| [columns](each/attributes?id=columns)                     | 列数                 |
| [direction](each/attributes?id=direction)                 | 方向                 |
| [height](each/attributes?id=height)                       | 指定列表布局方式     |
| [width](each/attributes?id=width)                         | 整体高度             |
| [align](each/attributes?id=align)                         | 整体宽度             |
| [itemHeight](each/attributes?id=itemHeight)               | 整体对齐             |
| [itemWidth](each/attributes?id=itemWidth)                 | 项高度               |
| [itemAlign](each/attributes?id=itemAlign)                 | 项宽度               |
| [itemVerticalAlign](each/attributes?id=itemVerticalAlign) | 项水平对齐           |
| [itemClass](each/attributes?id=itemClass)                 | 项垂直对齐           |
| [layout](each/attributes?id=layout)                       | 项Css类              |