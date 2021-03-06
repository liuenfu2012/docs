# IAdminApi.HasSitePermissions method

表示当前管理员是否有指定的站点权限

```csharp
public bool HasSitePermissions(int siteId, string[] sitePermissions)
```

| parameter | description |
| --- | --- |
| siteId | 站点Id。 |
| sitePermissions | 一个数组，其中包含需要判断的站点权限。 如果需要判断管理员是否有对应站点的插件管理权限，可将插件Id作为参数传入。 |

## Return Value

如果拥有指定的站点权限（任意一个），则为true；否则为false。

## See Also

* interface [IAdminApi](sdk/IAdminApi.md)
* namespace [SiteServer.Plugin](sdk/README.md)

<!-- DO NOT EDIT: generated by xmldocmd for SiteServer.Plugin.dll -->
