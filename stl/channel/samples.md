# &lt;stl:channel&gt; 示例

## 指定栏目的子栏目名称列表

下面的例子展示栏目“首页”的所有子栏目名称。

```html
<stl:channels channelIndex="首页">
  <stl:channel type="Title"></stl:channel><br>
</stl:channels>
```

解析后的 HTML 代码：

```html
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

## 展示当前栏目的名称

下面的例子展示当前栏目的栏目名称。

```html
<stl:channel type="Title"></stl:channel>
```

解析后的 HTML 代码：

```html
stl:channel 获取栏目值
```

## 展示指定栏目的所有下级栏目数量

下面的例子展示栏目索引为"首页"的所有下级栏目数量。

```html
<stl:channel channelIndex="首页" type="CountOfChannels"></stl:channel>
```

解析后的 HTML 代码：

```html
110
```

## 展示父栏目的栏目内容

下面的例子展示父栏目的栏目内容。

```html
<stl:channel parent="true" type="Content"></stl:channel>
```

解析后的 HTML 代码：

```html
<p style="color:#333333;font-family:'helvetica neue', helvetica, arial, sans-serif;font-size:14px;line-height:20px;margin-top:0px;margin-bottom:10px;">栏目标签包含获取栏目列表以及栏目属性的相关标签</p>
```
