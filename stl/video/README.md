# &lt;stl:video&gt; 播放视频

```html
<stl:video
  channelIndex="栏目索引"
  channelName="栏目名称"
  height="高度"
  imageUrl="图片地址"
  isAutoPlay="是否自动播放"
  isControls="是否显示播放控件"
  isDynamic="是否动态显示"
  isLoop="是否循环播放"
  isPreload="是否预载入"
  parent="显示父栏目"
  playUrl="视频地址"
  topLevel="从首页向下的栏目级别"
  type="指定视频的字段"
  upLevel="上级栏目的级别"
  width="宽度">
</stl:video>
```

## 使用说明

通过 stl:video 标签在模板中显示视频播放器

stl:video 标签为HTML5标签，最终将解析为HTML5标签 &lt;video&gt;，需要兼容IE6等低版本浏览器时请谨慎使用此标签。

stl:video 标签的视频地址取自内容的视频字段（VideoUrl），可以通过type属性指定其他字段。同时也可以直接使用playUrl属性指定具体的视频播放地址。

标签 `<stl:video>` 在内容模版中默认显示此内容的视频，在内容列表中将显示对应内容的视频。

stl:video 标签能够作为 `<stl:contents>` 等标签的子标签，当作为 `<stl:contents>` 的子标签使用时将显示内容的视频。

`<stl:video>` 标签对应的实体为{stl:video}。

## 属性

| 属性         | 说明                 |
| ------------ | -------------------- |
| channelIndex | 栏目索引             |
| channelName  | 栏目名称             |
| parent       | 显示父栏目           |
| upLevel      | 上级栏目的级别       |
| topLevel     | 从首页向下的栏目级别 |
| type         | 指定视频的字段       |
| playUrl      | 视频地址             |
| imageUrl     | 图片地址             |
| width        | 宽度                 |
| height       | 高度                 |
| isAutoPlay   | 是否自动播放         |
| isControls   | 是否显示播放控件     |
| isPreLoad    | 是否预载入           |
| isLoop       | 是否循环播放         |