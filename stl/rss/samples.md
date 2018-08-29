# &lt;stl:rss&gt; 示例

## 生成对栏目的 Rss 订阅

下面的例子生成对栏目"新闻"的 Rss 订阅。

```html
<stl:rss channelIndex="新闻"></stl:rss>
```

解析后的 HTML 代码：

```html
<!--?xml version="1.0" encoding="utf-8"?-->
<rss version="2.0">
  <channel>
    <title>新闻</title>
    <description>新闻</description>
    <link>javascript:;
    <docs>http://backend.userland.com/rss</docs>
    <generator>RSS.NET: http://www.rssdotnet.com/</generator>
    <item>
      <title>我是带图片的内容</title>
      <description>有效解决政府在信息公开工作建设中面临的问题，保障了政府信息公开体系的建设效率，为各级政府机构快速建立政府信息公开提供了技术支持。&nbsp;&nbsp;</description>
      <link>/news/4.html
      <pubdate>Fri, 07 Jun 2013 16:42:00 GMT</pubdate>
    </item>
    <item>
      <title>我也是带图片的内容</title>
      <description>我也是带图片的内容</description>
      <link>/news/3.html
      <pubdate>Fri, 07 Jun 2013 16:44:00 GMT</pubdate>
    </item>
    <item>
      <title>我也是带图片的内容</title>
      <description>我也是带图片的内容</description>
      <link>/news/2.html
      <pubdate>Fri, 07 Jun 2013 16:44:00 GMT</pubdate>
    </item>
    <item>
      <title>我是带图片的内容</title>
      <description>有效解决政府在信息公开工作建设中面临的问题，保障了政府信息公开体系的建设效率，为各级政府机构快速建立政府信息公开提供了技术支持。&nbsp;&nbsp;</description>
      <link>/news/1.html
      <pubdate>Fri, 07 Jun 2013 16:42:00 GMT</pubdate>
    </item>
  </channel>
</rss>
```
