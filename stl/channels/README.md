# &lt;stl:channels&gt; 栏目列表

```html
<stl:channels isTotal="是否从所有栏目中选择" isAllChildren="是否展示所有级别的子栏目" channelIndex="栏目索引" channelName="栏目名称" upLevel="上级栏目的级别" topLevel="从首页向下的栏目级别" groupChannel="指定展示的栏目组" groupChannelNot="指定不展示的栏目组" totalNum="展示内容数目" startNum="从第几条信息开始展示" order="排序" where="获取内容列表的条件判断" columns="列数" direction="方向" height="指定列表布局方式" width="整体高度" align="整体宽度" itemHeight="整体对齐" itemWidth="项高度" itemAlign="项宽度" itemVerticalAlign="项水平对齐" itemClass="项垂直对齐" layout="项Css类"></stl:channels>
```

## 说明

通过 stl:channels 标签在模板中展示栏目列表。

&lt;stl:channels&gt; 元素默认展示当前栏目的下级栏目列表，如果希望展示指定栏目的子栏目，请设置 [上下文切换](/context?id=通过属性切换上下文) 属性。

如果需要将 &lt;stl:channels&gt; 元素解析为 [HTML &lt;table&gt;](/reference_html/table)标签，或者需要对列表循环项进行处理，请设置列表属性或标签 [控制列表展示](/list)。

&lt;stl:channels&gt; 元素默认展示下一级栏目的列表，如果希望展示所有的下级栏目（包括子栏目和子子栏目），请设置属性 isAllChildren为 true。

可以通过 groupChannel 属性及 groupChannelNot 属性筛选出特定的栏目并进行展示。

## 解析

如果使用 &lt;stl:channels&gt; 元素，系统将对嵌套的标签进行解析并返回嵌套标签的循环列表。

如果使用 {stl:channels} 实体，系统将实体解析为栏目列表的JSON对象数组。

## 属性

| 属性                                                          | 说明                     |
| ------------------------------------------------------------- | ------------------------ |
| [isTotal](channels/attributes?id=isTotal)                     | 是否从所有栏目中选择     |
| [isAllChildren](channels/attributes?id=isAllChildren)         | 是否展示所有级别的子栏目 |
| [channelIndex](channels/attributes?id=channelIndex)           | 栏目索引                 |
| [channelName](channels/attributes?id=channelName)             | 栏目名称                 |
| [upLevel](channels/attributes?id=upLevel)                     | 上级栏目的级别           |
| [topLevel](channels/attributes?id=topLevel)                   | 从首页向下的栏目级别     |
| [groupChannel](channels/attributes?id=groupChannel)           | 指定展示的栏目组         |
| [groupChannelNot](channels/attributes?id=groupChannelNot)     | 指定不展示的栏目组       |
| [totalNum](channels/attributes?id=totalNum)                   | 展示内容数目             |
| [startNum](channels/attributes?id=startNum)                   | 从第几条信息开始展示     |
| [order](channels/attributes?id=order)                         | 排序                     |
| [where](channels/attributes?id=where)                         | 获取内容列表的条件判断   |
| [columns](channels/attributes?id=columns)                     | 列数                     |
| [direction](channels/attributes?id=direction)                 | 方向                     |
| [height](channels/attributes?id=height)                       | 指定列表布局方式         |
| [width](channels/attributes?id=width)                         | 整体高度                 |
| [align](channels/attributes?id=align)                         | 整体宽度                 |
| [itemHeight](channels/attributes?id=itemHeight)               | 整体对齐                 |
| [itemWidth](channels/attributes?id=itemWidth)                 | 项高度                   |
| [itemAlign](channels/attributes?id=itemAlign)                 | 项宽度                   |
| [itemVerticalAlign](channels/attributes?id=itemVerticalAlign) | 项水平对齐               |
| [itemClass](channels/attributes?id=itemClass)                 | 项垂直对齐               |
| [layout](channels/attributes?id=layout)                       | 项Css类                  |

<!-- done -->