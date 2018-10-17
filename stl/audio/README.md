# &lt;stl:audio&gt; 播放音频

```html
<stl:audio type="指定存储音频地址的内容字段，默认为VideoUrl" playUrl="音频地址，优先级高于type属性" isAutoPlay="是否自动播放" isPreload="是否预载入" isLoop="是否循环播放"></stl:audio>
```

## 说明

通过 stl:audio 标签在模板中展示并播放音频文件。

stl:audio 标签为HTML5标签，最终将解析为HTML5标签&lt;audio&gt;，需要兼容 IE8 等低版本浏览器时请谨慎使用此标签。

stl:audio 标签的音频地址取自内容的音频字段（videoUrl），可以通过type属性指定其他字段。同时也可以直接使用playUrl属性指定具体的音频播放地址。

标签 &lt;stl:audio&gt; 在内容模版中默认展示此内容的音频。

stl:audio 标签能够作为 &lt;stl:contents&gt; 等标签的子标签，当作为 &lt;stl:contents&gt; 的子标签使用时将展示内容的音频。

## 解析

如果使用 &lt;stl:audio&gt; 元素，系统将解析元素为 [HTML &lt;audio&gt; 元素](/reference_html/audio)。

如果使用 {stl:audio} 实体，系统将解析实体为音频的URL地址字符串。

## 属性

| 属性                                         | 说明                                       |
| -------------------------------------------- | ------------------------------------------ |
| [type](audio/attributes?id=type)             | 指定存储音频地址的内容字段，默认为videoUrl |
| [playUrl](audio/attributes?id=playUrl)       | 音频地址，优先级高于type属性               |
| [isAutoPlay](audio/attributes?id=isAutoPlay) | 是否自动播放                               |
| [isPreload](audio/attributes?id=isPreload)   | 是否预载入                                 |
| [isLoop](audio/attributes?id=isLoop)         | 是否循环播放                               |

<!-- done -->