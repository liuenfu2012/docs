---
sidebar: auto
---

# &lt;stl:marquee&gt; 无间隔滚动

```html
<stl:marquee
    scrollDelay="滚动延迟时间"
    direction="滚动方向"
    width="宽度"
    height="高度">
</stl:marquee>
```

## 说明

通过 stl:marquee 标签在模板中创建一个能够无间隔滚动的内容块

&lt;stl:marquee&gt; 的作用与 HTML 标签 &lt;marquee&gt; 类似，区别在于 &lt;stl:marquee&gt; 能够将滚动的底部和头部连接起来，形成无间隔的滚动。

&lt;stl:marquee&gt; 标签适合作为滚动的新闻公告等页面标签显示。

&lt;stl:marquee&gt; 标签对应的实体为{stl:marquee}。

## 属性

| 属性                                             | 说明                 |
| ------------------------------------------------ | -------------------- |
| [scrollDelay](#scrolldelay-滚动延迟时间) | 滚动延迟时间 |
| [direction](#direction-滚动方向)     | 滚动方向             |
| [width](#width-宽度)             | 宽度                 |
| [height](#height-高度)           | 高度                 |

### scrollDelay - 滚动延迟时间

滚动延迟时间，单位为毫秒，不设置系统默认为40毫秒。

### direction - 滚动方向

滚动方向

- `"vertical"` 垂直
- `"horizontal"` 水平

### width - 宽度

100% 宽度

### height - 高度

高度

## 示例

### 显示由下向上的滚动链接

下面的例子使用了 stl:marquee 标签创建了由下向上的滚动链接，滚动对象为栏目索引为"新闻"的内容列表。

```html
<stl:marquee direction="Vertical" width="220" height="160">
  <stl:contents channelIndex="新闻" cellpadding="2" cellspacing="2">
      <stl:a target="_blank"></stl:a>  <br />
  </stl:contents>
</stl:marquee>
```

### 显示由右至左的滚动链接

下面的例子使用了 stl:marquee 标签创建了由右至左的滚动链接，滚动对象为栏目名称为"新闻"的内容列表。

```html
<stl:marquee direction="Horizontal" width="600">
    <stl:contents channelIndex="新闻" layout="None">
        <stl:a target="_blank"></stl:a>
    </stl:contents>
</stl:marquee>
```

### 显示由右至左的滚动图片链接

下面的例子使用了 stl:marquee 标签创建了由右至左的滚动图片链接，滚动对象为栏目名称为"新闻"的内容图片列表。

```html
<stl:marquee direction="Horizontal" width="600">
  <stl:contents channelIndex="新闻" isImage="true" layout="None">
    <stl:a target="_blank"><stl:image></stl:image></stl:a>
  </stl:contents>
</stl:marquee>
```
