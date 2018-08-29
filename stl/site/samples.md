# &lt;stl:site&gt; 示例

## 显示指定站点的内容

下面的例子显示站点 "SiteServer STL" 下新闻栏目的内容列表。

```html
<stl:site siteName="站点">
  <ul>
      <stl:contents channelIndex="新闻" layout="None">
          <li><stl:a target="_blank"></stl:a></li>
      </stl:contents>
  </ul>
</stl:site>
```
