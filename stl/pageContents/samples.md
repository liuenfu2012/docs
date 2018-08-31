# &lt;stl:pageContents&gt; 示例

## 展示能够翻页的内容列表

下面的例子展示当前栏目下的所有内容的列表，列表下方展示翻页导航。

```html
<stl:pageContents channelIndex="新闻" pageNum="20" cellpadding="2" cellspacing="2">
    <stl:a target="_blank"></stl:a> <stl:content type="AddDate"></stl:content>
</stl:pageContents>
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
