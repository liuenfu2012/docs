# &lt;stl:sqlContents&gt; 数据库列表

```html
<stl:sqlContents
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
  startNum="从第几条信息开始显示"
  totalNum="显示内容数目"
  width="整体宽度">
</stl:sqlContents>
```

## 使用说明

通过 stl:sqlContents 标签在模板中显示数据库列表

标签 `<stl:sqlContents>` 通过定义数据库链接字符串（connectionString 属性），使用 `<stl:queryString>` 和 `<stl:sqlContent>` 来获取数据库的数据。

通过标签 `<stl:queryString>` 定义数据库查询语句，即SQL 语句。
通过标签 `<stl:sqlContent>` 或 {Sql} 数据库实体 获取数据中的每一项。
`<stl:sqlContents>` 标签对应的实体为{stl:sqlContents}。

## 子标签

| 子标签           | 说明                    |
| ---------------- | ----------------------- |
| stl:queryString  | 定义数据库查询语句(SQL) |
| stl:itemTemplate | 设置数据库数据列表项    |

## 属性

| 属性                 | 说明                 |
| -------------------- | -------------------- |
| connectionStringName | 数据库链接字符串名称 |
| connectionString     | 数据库链接字符串     |
| cellPadding          | 填充                 |
| cellSpacing          | 间距                 |
| class                | Css类                |
| columns              | 列数                 |
| direction            | 方向                 |
| layout               | 指定列表布局方式     |
| height               | 整体高度             |
| width                | 整体宽度             |
| align                | 整体对齐             |
| itemHeight           | 项高度               |
| itemWidth            | 项宽度               |
| itemAlign            | 项水平对齐           |
| itemVerticalAlign    | 项垂直对齐           |
| itemClass            | 项Css类              |
| totalNum             | 显示内容数目         |
| startNum             | 从第几条信息开始显示 |
| order                | 排序                 |