# IParseContext.Set&lt;T&gt; method

将键/值对放入STL解析上下文中，对包含下级标签STL解析情况下共享数据有用。 注意：该数据是不稳定的 —— 它在当前STL解析完成后将丢失。

```csharp
public void Set<T>(string key, T objectValue)
```

| parameter | description |
| --- | --- |
| key | 键。 |
| objectValue | 值。 |

## See Also

* interface [IParseContext](../IParseContext.md)
* namespace [SiteServer.Plugin](../../SiteServer.Plugin.md)

<!-- DO NOT EDIT: generated by xmldocmd for SiteServer.Plugin.dll -->
