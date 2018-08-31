# &lt;stl:tree&gt; 树状导航

```html
<stl:tree
  channelIndex="栏目索引"
  channelName="栏目名称"
  upLevel="上级栏目的级别"
  topLevel="从首页向下的栏目级别"
  groupChannel="指定展示的栏目组"
  groupChannelNot="指定不展示的栏目组"
  title="根节点展示名称"
  isLoading="是否AJAX方式即时载入"
  isShowContentNum="是否展示栏目内容数"
  isShowTreeLine="是否展示树状线"
  currentFormatString="当前项格式化字符串"
  target="打开窗口目标">
</stl:tree>
```

## 使用说明

以资源管理器树状列表的方式展示栏目列表。

title 属性展示树状列表中第一个栏目的名称。

currentFormatString 属性用来格式化当前栏目，使得当前栏目展示方式与其他栏目有所区别。currentFormatString 必须包含{0}，表示当前栏目的名称。

&lt;stl:tree&gt; 标签对应的实体为{stl:tree}。

## 属性

| 属性                                                          | 说明                 |
| ------------------------------------------------------------- | -------------------- |
| [channelIndex](tree/attributes?id=channelIndex)               | 栏目索引             |
| [channelName](tree/attributes?id=channelName)                 | 栏目名称             |
| [upLevel](tree/attributes?id=upLevel)                         | 上级栏目的级别       |
| [topLevel](tree/attributes?id=topLevel)                       | 从首页向下的栏目级别 |
| [groupChannel](tree/attributes?id=groupChannel)               | 指定展示的栏目组     |
| [groupChannelNot](tree/attributes?id=groupChannelNot)         | 指定不展示的栏目组   |
| [title](tree/attributes?id=title)                             | 根节点展示名称       |
| [isLoading](tree/attributes?id=isLoading)                     | 是否AJAX方式即时载入 |
| [isShowContentNum](tree/attributes?id=isShowContentNum)       | 是否展示栏目内容数   |
| [isShowTreeLine](tree/attributes?id=isShowTreeLine)           | 是否展示树状线       |
| [currentFormatString](tree/attributes?id=currentFormatString) | 当前项格式化字符串   |
| [target](tree/attributes?id=target)                           | 打开窗口目标         |