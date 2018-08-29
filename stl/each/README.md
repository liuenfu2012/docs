# &lt;stl:each&gt; 列表项循环

```html
<stl:each
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
  startNum="从第几条信息开始显示"
  totalNum="显示信息数目"
  type="循环类型"
  width="整体宽度">
</stl:each>
```

## 使用说明

通过 stl:each 标签在模板中遍历指定的列表项

type类型为Photo时，stl:each的子标签需要包含stl:photo标签，以显示图片项。
type类型为ImageUrl时，stl:each的子标签需要包含stl:image标签，以显示图片项。
type类型为VideoUrl时，stl:each的子标签需要包含stl:player标签或者stl:video标签，以显示视频项。
type类型为FileUrl时，stl:each的子标签需要包含stl:file标签，以显示附件项。
`<stl:each>` 标签可以作为 `<stl:contents>` 标签的子标签,也可以放在内容模板中.

`<stl:each>` 标签对应的实体为{stl:each}。

## 属性

| 属性              | 说明                 |
| ----------------- | -------------------- |
| type              | 循环类型             |
| totalNum          | 显示信息数目         |
| startNum          | 从第几条信息开始显示 |
| order             | 排序                 |
| cellPadding       | 填充                 |
| cellSpacing       | 间距                 |
| class             | Css类                |
| columns           | 列数                 |
| direction         | 方向                 |
| layout            | 指定列表布局方式     |
| height            | 整体高度             |
| width             | 整体宽度             |
| align             | 整体对齐             |
| itemHeight        | 项高度               |
| itemWidth         | 项宽度               |
| itemAlign         | 项水平对齐           |
| itemVerticalAlign | 项垂直对齐           |
| itemClass         | 项Css类              |