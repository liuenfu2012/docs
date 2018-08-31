# &lt;stl:audio&gt; 示例

## 展示当前内容的音频文件

下面的例子展示当前内容的音频文件。

```html
<stl:audio></stl:audio>
```

解析后的 HTML 代码：

```html

```

## 展示指定地址的音频文件

下面的例子展示文件名为“ChasingCorporate.mp3”的音频文件。

```html
<stl:audio playUrl="@/images/ChasingCorporate.mp3"></stl:audio>
```

解析后的 HTML 代码：

```html
<audio src="/images/ChasingCorporate.mp3">
    <object width="460" height="40" type="application/x-shockwave-flash" data="http://api.siteserver.cn/sitefiles/assets/flashes/mediaelement/flashmediaelement.swf">
        <param name="movie" value="http://api.siteserver.cn/sitefiles/assets/flashes/mediaelement/flashmediaelement.swf">
        <param name="flashvars" value="controls=true&amp;file=/images/ChasingCorporate.mp3">
    </object>
</audio>
<script>$('audio').mediaelementplayer();</script>
```
