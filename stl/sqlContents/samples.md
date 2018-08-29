# &lt;stl:sqlContents&gt; 示例

## 显示最新添加的内容列表

下面的例子显示按最新添加时间获取内容列表。

```html
<stl:sqlContents connectionStringName="ConnectionString" pageNum="10" cellpadding="2">
  <stl:queryString>
    SELECT TOP 6 * FROM {Stl.TableForContent} WHERE PublishmentSystemId = {Stl.SiteId} ORDER BY AddDate DESC
  </stl:queryString>
  <a href="{Stl.RootUrl}/sitefiles/services/wcm/utils.aspx?type=Redirect&channelId={sql.nodeId}&contentId={sql.Id}" target="_blank"><stl:sqlContent type="Title" wordnum="20"></stl:sqlContent></a>
  (<stl:sqlContent type="AddDate" formatString="yyyy-MM-dd"></stl:sqlContent>)
  <br>
</stl:sqlContents>
```
