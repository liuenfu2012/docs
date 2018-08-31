# &lt;stl:queryString&gt; SQL 查询语句

```html
<stl:queryString>
</stl:queryString>
```

## 使用说明

通过 stl:queryString 标签在模板中定义 SQL 查询语句

&lt;stl:queryString&gt; 必须作为 &lt;stl:sqlContents&gt; 或者 &lt;stl:pageSqlContents&gt; 的子标签使用。
&lt;stl:queryString&gt; 用于设置数据库查询语句（SQL 语句），在此标签内放置 SQL 语句。

&lt;stl:queryString&gt; 中定义的 SQL 语句内可以嵌入 STL 语句，如{Channel.ChannelId}当前栏目 Id、{Stl.SiteId}站点 Id 等。

如果为动态调取（在&lt;stl:dynamic&gt;内部使用），可以采用{Request}实体获取页面地址栏参数，如当前页面地址为“page.html?Id=123”，即可使用{Request.Id}获取值并放到 SQL 语句中作为查询条件。

&lt;stl:queryString&gt; 标签对应的实体为{stl:queryString}。
