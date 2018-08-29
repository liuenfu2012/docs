# &lt;stl:pageChannels&gt; 翻页栏目列表

```html
<stl:pageChannels
  align="整体对齐"
  cellPadding="填充"
  cellSpacing="间距"
  channelIndex="栏目索引"
  channelName="栏目名称"
  class="Css类"
  columns="列数"
  direction="方向"
  groupChannel="指定显示的栏目组"
  groupChannelNot="指定不显示的栏目组"
  height="整体高度"
  isAllChildren="是否显示所有级别的子栏目"
  isDynamic="是否动态显示"
  isImage="仅显示图片栏目"
  isTotal="是否从所有栏目中选择"
  itemAlign="项水平对齐"
  itemClass="项Css类"
  itemHeight="项高度"
  itemVerticalAlign="项垂直对齐"
  itemWidth="项宽度"
  layout="指定列表布局方式"
  order="排序"
  pageNum="每页显示的栏目数目"
  startNum="从第几条信息开始显示"
  titleWordNum="栏目名称文字数量"
  topLevel="从首页向下的栏目级别"
  totalNum="显示栏目数目"
  upLevel="上级栏目的级别"
  where="获取栏目列表的条件判断"
  width="整体宽度">
</stl:pageChannels>
```

## 使用说明

通过 stl:pageChannels 标签在模板中显示翻页栏目列表

`<stl:pageChannels>` 标签需要和STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 配合使用。

所有属于STL 标签 `<stl:channels>` 的成员均适用于 `<stl:pageChannels>` 标签。

`<stl:pageChannels>` 标签和 `<stl:channels>` 具有相同的属性，这两个标签的区别在于 `<stl:pageChannels>` 能够翻页，且 `<stl:pageChannels>` 标签仅能用在栏目模板中。

通常将STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 置于 `<stl:pageChannels>` 标签的下方，代表翻页按钮。

`<stl:pageChannels>` 只能在栏目模版中使用，如果需要在其他类型的模版中使用必须将 `<stl:pageChannels>` 标签和对应的 `<stl:pageItems>` 翻页标签放到`<stl:dynamic>` 动态标签中，否则 `<stl:pageChannels>` 标签将无法解析。

列表相关介绍请参见列表标签及列表项

`<stl:pageChannels>` 标签对应的实体为{stl:pageChannels}。

## 属性

| 属性    | 说明               |
| ------- | ------------------ |
| pageNum | 每页显示的栏目数目 |
