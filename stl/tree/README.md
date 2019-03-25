---
sidebar: auto
---

# &lt;stl:tree&gt; 树状导航

```html
<stl:tree
    channelIndex="栏目索引"
    channelName="栏目名称"
    upLevel="上级栏目的级别"
    topLevel="从首页向下的栏目级别"
    groupChannel="指定栏目组"
    groupChannelNot="排除栏目组"
    title="根节点显示名称"
    isLoading="是否异步载入"
    isShowContentNum="显示内容数"
    isShowTreeLine="是否显示树状线"
    currentFormatString="当前项格式化"
    target="打开窗口目标">
</stl:tree>
```

## 说明

以资源管理器树状列表的方式显示栏目列表。

title 属性显示树状列表中第一个栏目的名称。

currentFormatString 属性用来格式化当前栏目，使得当前栏目显示方式与其他栏目有所区别。currentFormatString 必须包含{0}，表示当前栏目的名称。

&lt;stl:tree&gt; 标签对应的实体为{stl:tree}。

## 属性

| 属性                                                          | 说明                 |
| ------------------------------------------------------------- | -------------------- |
| [channelIndex](#channelindex-栏目索引)               | 栏目索引             |
| [channelName](#channelname-栏目名称)                 | 栏目名称             |
| [upLevel](#uplevel-上级栏目的级别)                         | 上级栏目的级别       |
| [topLevel](#toplevel-从首页向下的栏目级别)                       | 从首页向下的栏目级别 |
| [groupChannel](#groupchannel-指定栏目组)               | 指定栏目组     |
| [groupChannelNot](#groupchannelnot-排除栏目组)         | 排除栏目组   |
| [title](#title-根节点显示名称)                             | 根节点显示名称       |
| [isLoading](#isloading-是否异步载入)                     | 是否异步载入 |
| [isShowContentNum](#isshowcontentnum-显示内容数)       | 显示内容数   |
| [isShowTreeLine](#isshowtreeline-是否显示树状线)           | 是否显示树状线       |
| [currentFormatString](#currentformatstring-当前项格式化) | 当前项格式化   |
| [target](#target-打开窗口目标)                           | 打开窗口目标         |

### channelIndex - 栏目索引

栏目索引

### channelName - 栏目名称

栏目名称

### upLevel - 上级栏目的级别

显示上几级栏目的链接，0 为本级，1 为父栏目，以此类推。

### topLevel - 从首页向下的栏目级别

显示从首页向下某个级别栏目的链接，0 代表网站首页，1 代表一级栏目，以此类推。

### groupChannel - 指定栏目组

栏目组别，如设置此属性，则只显示指定栏目组别的内容列表。

### groupChannelNot - 排除栏目组

非栏目组别，如设置此属性，则只显示不等于指定栏目组别的内容列表。

### title - 根节点显示名称

根节点显示名称

### isLoading - 是否异步载入

是否 AJAX 方式异步载入

- `"true"` 异步载入
- `"false"` 静态生成

### isShowContentNum - 显示内容数

是否显示栏目内容数

- `"true"` 显示栏目内容数
- `"false"` 不显示栏目内容数

### isShowTreeLine - 是否显示树状线

是否显示树状线

- `"true"` 显示树状线
- `"false"` 不显示树状线

### currentFormatString - 当前项格式化

当前项格式化字符串

### target - 打开窗口目标

打开窗口目标

## 示例

### 显示所有不属于"树状导航"栏目组的栏目列表

下面的例子显示所有不属于"树状导航"栏目组的栏目列表。

```html
<stl:tree channelIndex="首页" groupChannelNot="树状导航" title="栏目列表" currentFormatString="<font color=red><strong>{0}</strong></font>">
</stl:tree>
```

### 显示父栏目的栏目列表

下面的例子显示父栏目下所有栏目列表。

```html
<stl:tree upLevel="1" title="栏目列表" currentFormatString="<font color=red><strong>{0}</strong></font>">
</stl:tree>
```

### 显示父栏目的栏目列表并显示栏目内容数

下面的例子显示父栏目的栏目列表并显示栏目内容数。

```html
<stl:tree channelIndex="首页" groupChannelNot="树状导航" title="栏目列表" currentFormatString="<font color=red><strong>{0}</strong></font>">
</stl:tree>
```
