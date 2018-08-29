# &lt;stl:pageSqlContents&gt; 翻页数据库列表

```html
<stl:pageSqlContents
  align="整体对齐"
  cellPadding="填充"
  cellSpacing="间距"
  class="Css类"
  columns="列数"
  connectionString="数据库链接字符串"
  connectionStringName="数据库链接字符串名称"
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
  pageNum="每页显示的内容数目"
  startNum="从第几条信息开始显示"
  totalNum="显示内容数目"
  width="整体宽度">
</stl:pageSqlContents>
```

## 使用说明

通过 stl:pageSqlContents 标签在模板中显示能够翻页的数据库列表

`<stl:pageSqlContents>` 标签需要和 STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 配合使用。

所有属于 STL 标签 `<stl:sqlContents>` 的成员均适用于 `<stl:pageChannels>` 标签。

`<stl:pageSqlContents>` 标签和 `<stl:sqlContents>` 具有相同的属性，这两个标签的区别在于 `<stl:pageSqlContents>` 能够翻页。

通常将 STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 置于 `<stl:pageSqlContents>` 标签的下方，代表翻页按钮。

列表相关介绍请参见列表标签及列表项

`<stl:pageSqlContents>` 标签对应的实体为{stl:pageSqlContents}。

## 属性

| 属性    | 说明               |
| ------- | ------------------ |
| pageNum | 每页显示的内容数目 |