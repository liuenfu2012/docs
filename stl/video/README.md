# &lt;stl:video&gt; 播放视频

```html
<stl:video type="指定视频的字段" playUrl="视频地址" imageUrl="图片地址" width="宽度" height="高度" isAutoPlay="是否自动播放" isControls="是否展示播放控件" isLoop="是否循环播放"></stl:video>
```

## 说明

通过 stl:video 标签在模板中展示视频播放器

stl:video 标签为HTML5标签，最终将解析为HTML5标签 &lt;video&gt;，需要兼容IE6等低版本浏览器时请谨慎使用此标签。

stl:video 标签的视频地址取自内容的视频字段（VideoUrl），可以通过type属性指定其他字段。同时也可以直接使用playUrl属性指定具体的视频播放地址。

标签 &lt;stl:video&gt; 在内容模版中默认展示此内容的视频，在内容列表中将展示对应内容的视频。

stl:video 标签能够作为 &lt;stl:contents&gt; 等标签的子标签，当作为 &lt;stl:contents&gt; 的子标签使用时将展示内容的视频。

&lt;stl:video&gt; 标签对应的实体为{stl:video}。

## 属性

| 属性                                         | 说明             |
| -------------------------------------------- | ---------------- |
| [type](video/attributes?id=type)             | 指定视频的字段   |
| [playUrl](video/attributes?id=playUrl)       | 视频地址         |
| [imageUrl](video/attributes?id=imageUrl)     | 图片地址         |
| [width](video/attributes?id=width)           | 宽度             |
| [height](video/attributes?id=height)         | 高度             |
| [isAutoPlay](video/attributes?id=isAutoPlay) | 是否自动播放     |
| [isControls](video/attributes?id=isControls) | 是否展示播放控件 |
| [isLoop](video/attributes?id=isLoop)         | 是否循环播放     |