# &lt;stl:tree&gt; 树状导航

```html
<stl:tree
  channelIndex="栏目索引"
  channelName="栏目名称"
  currentFormatString="当前项格式化字符串"
  groupChannel="指定显示的栏目组"
  groupChannelNot="指定不显示的栏目组"
  isDynamic="是否动态显示"
  isLoading="是否AJAX方式即时载入"
  isShowContentNum="是否显示栏目内容数"
  isShowTreeLine="是否显示树状线"
  target="打开窗口目标"
  title="根节点显示名称"
  topLevel="从首页向下的栏目级别"
  upLevel="上级栏目的级别">
</stl:tree>
```

## 使用说明

以资源管理器树状列表的方式显示栏目列表。

title 属性显示树状列表中第一个栏目的名称。

currentFormatString 属性用来格式化当前栏目，使得当前栏目显示方式与其他栏目有所区别。currentFormatString 必须包含{0}，表示当前栏目的名称。

`<stl:tree>` 标签对应的实体为{stl:tree}。

## 属性

| 属性                | 说明                 |
| ------------------- | -------------------- |
| channelIndex        | 栏目索引             |
| channelName         | 栏目名称             |
| upLevel             | 上级栏目的级别       |
| topLevel            | 从首页向下的栏目级别 |
| groupChannel        | 指定显示的栏目组     |
| groupChannelNot     | 指定不显示的栏目组   |
| title               | 根节点显示名称       |
| isLoading           | 是否AJAX方式即时载入 |
| isShowContentNum    | 是否显示栏目内容数   |
| isShowTreeLine      | 是否显示树状线       |
| currentFormatString | 当前项格式化字符串   |
| target              | 打开窗口目标         |