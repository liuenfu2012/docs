# &lt;stl:channels&gt; 栏目列表

```html
<stl:channels
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
  startNum="从第几条信息开始显示" 
  topLevel="从首页向下的栏目级别"
  totalNum="显示栏目数目"
  upLevel="上级栏目的级别"
  where="获取栏目列表的条件判断"
  width="整体宽度">
</stl:channels>
```

## 使用说明

通过 stl:channels 标签在模板中显示栏目列表

stl:channels是列表标签，用于栏目列表循环。

channelIndex="栏目索引"，channelName="栏目名称"，parent="显示父栏目属性"，upLevel="上级栏目的级别"以及topLevel="从首页向下的栏目级别"用于定位到具体的栏目。

## 备注

columns、direction 以及 layout 属性用于控制生成列表的HTML 标签。
columns 控制生成列表的列数，direction 控制生成列表的方向，layout 控制生成列表的HTML标签。
layout 为Table时系统使用 `<table>` 标签生成列表，layout 为Flow时系统使用 `<span>` 标签生成列表，默认为None，即仅循环列表项。

groupChannel 属性及 groupChannelNot 属性用于筛选需要显示的栏目。

如果设置了 channelIndex 属性，系统将寻找对应此栏目索引的栏目并对子栏目进行循环显示。
如果设置了 channelName 属性，系统将寻找对应此栏目名称的栏目并对子栏目进行循环显示。
如果设置了 parent 或 upLevel 属性，系统将寻找上级或上几级的栏目并对子栏目进行循环显示。
如果设置了 topLevel 属性，系统将寻找从首页向下的栏目级别并对子栏目进行循环显示。
如果以上属性都未设置，系统将寻找当前栏目并对子栏目进行循环显示。

`<stl:channels>` 标签对应的实体为{stl:channels}。

## 属性

| 属性              | 说明                     |
| ----------------- | ------------------------ |
| channelIndex      | 栏目索引                 |
| channelName       | 栏目名称                 |
| upLevel           | 上级栏目的级别           |
| topLevel          | 从首页向下的栏目级别     |
| isTotal           | 是否从所有栏目中选择     |
| isAllChildren     | 是否显示所有级别的子栏目 |
| groupChannel      | 指定显示的栏目组         |
| groupChannelNot   | 指定不显示的栏目组       |
| totalNum          | 显示栏目数目             |
| startNum          | 从第几条信息开始显示     |
| order             | 排序                     |
| isImage           | 仅显示图片栏目           |
| where             | 获取栏目列表的条件判断   |
| cellPadding       | 填充                     |
| cellSpacing       | 间距                     |
| class             | Css类                    |
| columns           | 列数                     |
| direction         | 方向                     |
| height            | 整体高度                 |
| width             | 整体宽度                 |
| align             | 整体对齐                 |
| layout            | 指定列表布局方式         |
| itemHeight        | 项高度                   |
| itemWidth         | 项宽度                   |
| itemAlign         | 项水平对齐               |
| itemVerticalAlign | 项垂直对齐               |
| itemClass         | 项Css类                  |