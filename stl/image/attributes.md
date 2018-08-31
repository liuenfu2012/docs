# &lt;stl:image&gt; 属性

所有属于 Html 标签 &lt;img&gt; 的成员均适用于 &lt;stl:image&gt; 标签，请参考：[HTML &lt;img&gt; 元素](/reference_html/img)。

## channelIndex

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 链接到首页 -->
<stl:image channelIndex="首页"></stl:image>
```

## channelName

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 链接到当前栏目下的名称为“栏目名称”的栏目 -->
<stl:image channelName="栏目名称"></stl:image>
```

```html
<!-- 链接到“栏目索引”下的名称为“栏目名称”的栏目 -->
<stl:image channelIndex="栏目索引" channelName="栏目名称"></stl:image>
```

## parent

将上下文切换到当前栏目的上一级栏目。

- `"true"` 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
- `"false"` 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 链接到当前栏目的上一级栏目 -->
<stl:image parent="true"></stl:image>
```

## upLevel

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 链接到当前栏目的上两级栏目 -->
<stl:image upLevel="2"></stl:image>
```

## topLevel

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 链接到一级栏目 -->
<stl:image topLevel="1"></stl:image>
```

## context

通常如果标签被嵌套在列表元素中时，系统会设置上下文为当前的列表类型，同时对标签进行解析时也将根据列表类型进行判断，如将 `<stl:image></stl:image>` 放到内容列表以及栏目列表中时，stl:image 标签的链接会分别展示内容的连接以及栏目的连接。

如果希望`<stl:image></stl:image>`标签无论在内容列表还是栏目列表都只展示栏目链接，可以设置 context 属性为 Channel:`<stl:image context="channel"></stl:image>`

- `"default"` 默认，即当前所处上下文。
- `"content"` 内容上下文。
- `"channel"` 栏目上下文。
- `"sqlContent"` Sql 内容上下文。
- `"site"` 站点上下文。

```html
<!-- 分别展示栏目与内容链接 -->
<stl:channels>
  <stl:contents>
    栏目：<stl:image context="channel"></stl:image>
    内容：<stl:image></stl:image>
  </stl:contents>
</stl:channels>
```

## type

指定存储图片的字段，可以是自定义字段，默认为 ImageUrl

## no

展示字段存储的第几个图片，默认为 1

## isOriginal

如果是引用内容，是否获取所引用内容的值

## src

图片文件地址，可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录。

## altSrc

指定的图片不存在时的展示地址，可以用"@"开头表示当前网站根目录，用"~"开头表示系统根目录。
