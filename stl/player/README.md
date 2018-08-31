# &lt;stl:player&gt; 播放视频

```html
<stl:player
  type="指定存储媒体的字段"
  playUrl="视频地址"
  imageUrl="图片地址"
  playBy="指定播放器"
  width="宽度"
  height="高度"
  isAutoPlay="是否自动播放">
</stl:player>
```

## 使用说明

通过 stl:player 标签在模板中播放视频

标签 &lt;stl:player&gt; 在栏目模版中默认展示此栏目的视频/音频，在内容模版中默认展示此内容的视频/音频。

stl:player 标签能够作为 &lt;stl:channels&gt; 等标签的子标签，当作为 &lt;stl:channels&gt; 的子标签使用时将展示栏目的视频/音频。 
stl:player 标签能够作为 &lt;stl:contents&gt; 等标签的子标签，当作为 &lt;stl:contents&gt; 的子标签使用时将展示内容的视频/音频。

&lt;stl:player&gt; 标签对应的实体为{stl:player}。

## 属性

| 属性                                          | 说明               |
| --------------------------------------------- | ------------------ |
| [type](player/attributes?id=type)             | 指定存储媒体的字段 |
| [playUrl](player/attributes?id=playUrl)       | 视频地址           |
| [imageUrl](player/attributes?id=imageUrl)     | 图片地址           |
| [playBy](player/attributes?id=playBy)         | 指定播放器         |
| [width](player/attributes?id=width)           | 宽度               |
| [height](player/attributes?id=height)         | 高度               |
| [isAutoPlay](player/attributes?id=isAutoPlay) | 是否自动播放       |