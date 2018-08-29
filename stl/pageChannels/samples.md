# &lt;stl:pageChannels&gt; 示例

## 显示能够翻页的栏目列表

下面的例子显示当前栏目下的所有子栏目的列表，每 10 个栏目翻一页，列表下方显示翻页导航。

```html
<stl:pageChannels channelIndex="STL基本标签" pageNum="10" cellpadding="2" cellspacing="2">
    <stl:a></stl:a>
</stl:pageChannels>
<br />
<stl:pageItems>
    <table cellpadding="0" cellspacing="0" width="90%" height="40" align="center">
    <tr><td align="left">
    <stl:pageItem type="FirstPage" text="首页"></stl:pageItem> |
    <stl:pageItem type="PreviousPage" text="上一页"></stl:pageItem> |
    <stl:pageItem type="NextPage" text="下一页"></stl:pageItem> |
    <stl:pageItem type="LastPage" text="末页"></stl:pageItem>
    </td><td align="right">
    <stl:pageItem type="CurrentPageIndex" text="当前页："></stl:pageItem>
    <stl:pageItem type="PageNavigation"></stl:pageItem>
    </td></tr></table>
</stl:pageItems>
```
