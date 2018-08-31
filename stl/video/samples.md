# &lt;stl:video&gt; 示例

## 展示当前内容的视频文件

下面的例子展示当前内容的视频文件。

```html
<stl:video type="VideoUrl" width="640" height="264" isAutoPlay="false"></stl:video>
```

## 展示指定地址的视频文件

下面的例子展示文件名为“oceans-clip.mp4”的视频文件，同时设置不自动播放。

```html
<stl:video playUrl="@/images/oceans-clip.mp4" imageUrl="@/images/oceans-clip.png" width="640" height="264" isAutoPlay="false"></stl:video>
```
