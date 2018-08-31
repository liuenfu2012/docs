# &lt;stl:marquee&gt; 示例

## 展示由下向上的滚动链接

下面的例子使用了 stl:marquee 标签创建了由下向上的滚动链接，滚动对象为栏目索引为"新闻"的内容列表。

```html
<stl:marquee direction="Vertical" width="220" height="160">
  <stl:contents channelIndex="新闻" cellpadding="2" cellspacing="2">
      <stl:a target="_blank"></stl:a>  <br />
  </stl:contents>
</stl:marquee>
```

## 展示由右至左的滚动链接

下面的例子使用了 stl:marquee 标签创建了由右至左的滚动链接，滚动对象为栏目名称为"新闻"的内容列表。

```html
<stl:marquee direction="Horizontal" width="600">
    <stl:contents channelIndex="新闻" layout="None">
        <stl:a target="_blank"></stl:a>
    </stl:contents>
</stl:marquee>
```

## 展示由右至左的滚动图片链接

下面的例子使用了 stl:marquee 标签创建了由右至左的滚动图片链接，滚动对象为栏目名称为"新闻"的内容图片列表。

```html
<stl:marquee direction="Horizontal" width="600">
  <stl:contents channelIndex="新闻" isImage="true" layout="None">
    <stl:a target="_blank"><stl:image></stl:image></stl:a>
  </stl:contents>
</stl:marquee>
```
