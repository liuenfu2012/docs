# &lt;stl:channels&gt; 示例

## 展示指定栏目的子栏目名称列表

下面的例子展示栏目“首页”的所有子栏目名称。

```html
<stl:channels channelIndex="首页">
  <stl:channel type="Title"></stl:channel><br>
</stl:channels>
```

解析后的 HTML 代码：

```html
  起 步<br>
  STL标签<br>
  STL实体<br>
  STL电子政务标签<br>
  新闻<br>
  人才招聘<br>
  互动交流<br>
  信息公开<br>
```

## 在栏目列表中展示栏目名称以及内容数

下面的例子展示上级栏目的所有子栏目名称列表，并在名称后展示对应的内容数。

```html
<stl:channels upLevel="1">
  <stl:channel type="Title"></stl:channel>(<stl:channel type="CountOfContents"></stl:channel>)<br>
</stl:channels>
```

解析后的 HTML 代码：

```html
  stl:channels 栏目列表(3)<br>
  stl:channel 获取栏目值(3)<br>
```
