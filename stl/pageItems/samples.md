# &lt;stl:pageItems&gt; 示例

## 展示翻页项组合

下面的例子展示组合了所有翻页标签的翻页项容器。

```html
<stl:pageItems>
<table width="100%">
<tr><td align="left">
  <stl:pageItem type="FirstPage" text="首页"></stl:pageItem> |
  <stl:pageItem type="PreviousPage" text="上一页"></stl:pageItem> |
  <stl:pageItem type="NextPage" text="下一页"></stl:pageItem> |
  <stl:pageItem type="LastPage" text="末页"></stl:pageItem>
</td><td align="right">
  <stl:pageItem type="CurrentPageIndex" text="当前页："></stl:pageItem>
  <stl:pageItem type="PageNavigation"></stl:pageItem>
</td></tr>
</table>
</stl:pageItems>
```
