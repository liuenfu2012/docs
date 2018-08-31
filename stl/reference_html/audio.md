# HTML &lt;audio&gt; 元素

HTML &lt;audio&gt; 元素用于在文档中表示音频内容。 &lt;audio&gt; 元素可以包含多个音频资源， 这些音频资源可以使用 src 属性或者&lt;source&gt; 元素来进行描述； 浏览器将会选择最合适的一个来使用。对于不支持&lt;audio&gt;元素的浏览器，&lt;audio&gt;元素也可以作为浏览器不识别的内容加入到文档中。

HTML &lt;audio&gt; 元素支持 [全局属性](/reference_html/global_attributes.md)。

## 属性

### autoplay

布尔属性；如果指定（默认值为"false"！）；指定后，音频会马上自动开始播放，不会停下来等着数据载入结束。

### buffered

你可以通过该属性获取已缓冲的资源的时间段信息。该属性包含一个 TimeRanges 对象。

### controls

如果设置了该属性，浏览器将提供一个包含声音，播放进度，播放暂停的控制面板，让用户可以控制音频的播放。

### loop

布尔属性；如果指定，将循环播放音频。

### mozCurrentSampleOffset

在音频播放时，表示相对于音频开始处的偏移量的一个数值。

### muted

表示是否静音的布尔值。默认值为 false，表示有声音。

### played

一个 TimeRanges 对象，表示所有已播放的音频片段。

### preload

枚举属性，让开发者自行思考来示意浏览器使用何种加载方式以达到最好的用户体验。可以是以下属性之一：

- none: 示意用户可能不会播放该音频，或者服务器希望节省带宽；换句话说，该音频不会被缓存；
- metadata: 示意即使用户可能不会播放该音频，但获取元数据 (例如音频长度) 还是有必要的。
- auto: 示意用户可能会播放音频；换句话说，如果有必要，整个音频都将被加载，即使用户不期望使用。
- 空字符串 : 等效于 auto 属性。

假如不设置，默认值就是浏览器定义的了（不同浏览器会选择自己的默认值）， 即使规范建议设置为 metadata.

使用备注：
autoplay 属性优先于 preload 假如用户想自动播放视频，那么很明显浏览器需要下载视频。同时设置 autoplay 和 preload 属性在规范里是允许的。
规范没有强制浏览器去遵循该属性的值；这仅仅只是个提示。

### src

嵌入的音频的 URL。 该 URL 应遵从 HTTP access controls. 这是一个可选属性；你可以在 audio 元素中使用 &lt;source&gt; 元素来替代该属性指定嵌入的音频。

### volume

音频播放的音量。值从 0.0 (无声) 到 1.0 (最大声).
时间偏移量目前是指定为 float 类型的值，表示偏移的秒数。

## 示例

### 基本用法

```html
<!-- Simple audio playback -->
<audio src="http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg" autoplay>
  Your browser does not support the <code>audio</code> element.
</audio>

<!-- Audio playback with captions -->
<audio src="foo.ogg">
  <track kind="captions" src="foo.en.vtt" srclang="en" label="English">
  <track kind="captions" src="foo.sv.vtt" srclang="sv" label="Svenska">
</audio>
```

### 使用 source 元素的 audio 元素

```html
<audio controls="controls">
  Your browser does not support the <code>audio</code> element.
  <source src="foo.wav" type="audio/wav">
</audio>
```
