# &lt;stl:sqlContent&gt; 示例

## 展示最新添加的内容列表

下面的例子展示按最新添加时间获取内容列表。

```html
<stl:sqlContents connectionStringName="ConnectionString" pageNum="10" cellpadding="2">
  <stl:queryString>
    SELECT TOP 6 * FROM {stl.tableName} WHERE siteId = {Stl.SiteId} ORDER BY AddDate DESC
  </stl:queryString>
  <stl:sqlContent type="Title" wordnum="20"></stl:sqlContent>
  (<stl:sqlContent type="AddDate" formatString="yyyy-MM-dd"></stl:sqlContent>)
  <br>
</stl:sqlContents>
```
