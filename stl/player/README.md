# &lt;stl:player&gt; 播放视频

```html
<stl:player
  channelIndex="栏目索引"
  channelName="栏目名称"
  height="高度"
  imageUrl="图片地址"
  isAutoPlay="是否自动播放"
  isDynamic="是否动态显示"
  parent="显示父栏目"
  playBy="指定播放器"
  playUrl="视频地址"
  stretching="拉伸"
  topLevel="从首页向下的栏目级别"
  type="指定存储媒体的字段"
  upLevel="上级栏目的级别"
  width="宽度">
</stl:player>
```

## 使用说明

通过 stl:player 标签在模板中播放视频

标签 `<stl:player>` 在栏目模版中默认显示此栏目的视频/音频，在内容模版中默认显示此内容的视频/音频。

stl:player 标签能够作为 `<stl:channels>` 等标签的子标签，当作为 `<stl:channels>` 的子标签使用时将显示栏目的视频/音频。 
stl:player 标签能够作为 `<stl:contents>` 等标签的子标签，当作为 `<stl:contents>` 的子标签使用时将显示内容的视频/音频。

`<stl:player>` 标签对应的实体为{stl:player}。

## 属性

| 属性         | 说明                 |
| ------------ | -------------------- |
| channelIndex | 栏目索引             |
| channelName  | 栏目名称             |
| parent       | 显示父栏目           |
| upLevel      | 上级栏目的级别       |
| topLevel     | 从首页向下的栏目级别 |
| type         | 指定存储媒体的字段   |
| playUrl      | 视频地址             |
| imageUrl     | 图片地址             |
| playBy       | 指定播放器           |
| width        | 宽度                 |
| height       | 高度                 |
| isAutoPlay   | 是否自动播放         |