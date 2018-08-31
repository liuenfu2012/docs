# &lt;stl:pageSqlContents&gt; 示例

## 展示最新添加的内容列表

下面的例子展示按最新添加时间获取内容列表。

```html
<stl:pageSqlContents connectionStringName="ConnectionString" pageNum="6" totalNum="30" cellpadding="2">
  <stl:queryString>
    SELECT * FROM {stl.tableName} WHERE siteId = {Stl.SiteId} AND NodeId > 0 ORDER BY AddDate DESC
  </stl:queryString>
  <stl:sqlContent type="Title" wordnum="20"></stl:sqlContent>
  (<stl:sqlContent type="AddDate" formatString="yyyy-MM-dd"></stl:sqlContent>)
  <br>
</stl:pageSqlContents>

<hr>

<stl:pageItems>
<div class="pagination">
  <ul>
    <li><a href="{PageItem.PreviousPage}">Prev</a></li>
    <stl:pageItem type="PageNavigation">
      <stl:yes>
        <li><a href="{Current.Url}">{Current.Num}</a></li>
      </stl:yes>
      <stl:no>
        <li class="active"><span>{Current.Num}</span></li>
      </stl:no>
    </stl:pageItem>
    <li><a href="{PageItem.NextPage}">Next</a></li>
  </ul>
</div>
</stl:pageItems>
```
