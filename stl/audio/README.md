# &lt;stl:audio&gt; 播放音频

```html
<stl:audio
  isAutoPlay="是否自动播放"
  isDynamic="是否动态显示"
  isLoop="是否循环播放"
  isPreload="是否预载入"
  playUrl="音频地址"
  type="指定存储音频的内容字段，默认为VideoUrl">
</stl:audio>
```

## 使用说明

通过 stl:audio 标签在模板中显示并播放音频文件。

stl:audio 标签为HTML5标签，最终将解析为HTML5标签`<audio>`，需要兼容IE6等低版本浏览器时请谨慎使用此标签。

stl:audio 标签的音频地址取自内容的音频字段（VideoUrl），可以通过type属性指定其他字段。同时也可以直接使用playUrl属性指定具体的音频播放地址。

标签 `<stl:audio>` 在内容模版中默认显示此内容的音频，在内容列表中将显示对应内容的音频。

stl:audio 标签能够作为 `<stl:contents>` 等标签的子标签，当作为 `<stl:contents>` 的子标签使用时将显示内容的音频。

`<stl:audio>`标签对应的实体为{stl:audio}。

## 属性

| 属性       | 说明                                   |
| ---------- | -------------------------------------- |
| type       | 指定存储音频的内容字段，默认为VideoUrl |
| playUrl    | 音频地址                               |
| isAutoPlay | 是否自动播放                           |
| isPreLoad  | 是否预载入                             |
| isLoop     | 是否循环播放                           |