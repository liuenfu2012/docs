# &lt;stl:tree&gt; 示例

## 展示所有不属于"树状导航"栏目组的栏目列表

下面的例子展示所有不属于"树状导航"栏目组的栏目列表。

```html
<stl:tree channelIndex="首页" groupChannelNot="树状导航" title="栏目列表" currentFormatString="<font color=red><strong>{0}</strong></font>">
</stl:tree>
```

## 展示父栏目的栏目列表

下面的例子展示父栏目下所有栏目列表。

```html
<stl:tree upLevel="1" title="栏目列表" currentFormatString="<font color=red><strong>{0}</strong></font>">
</stl:tree>
```

## 展示父栏目的栏目列表并展示栏目内容数

下面的例子展示父栏目的栏目列表并展示栏目内容数。

```html
<stl:tree channelIndex="首页" groupChannelNot="树状导航" title="栏目列表" currentFormatString="<font color=red><strong>{0}</strong></font>">
</stl:tree>
```
