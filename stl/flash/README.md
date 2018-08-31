# &lt;stl:flash&gt; 展示Flash

```html
<stl:flash
  channelIndex="栏目索引"
  channelName="栏目名称"
  parent="展示父栏目"
  upLevel="上级栏目的级别"
  topLevel="从首页向下的栏目级别"
  type="指定存储flash的字段"
  src="展示的flash地址"
  altSrc="当指定的flash不存在时展示的flash地址"
  width="宽度"
  height="高度">
</stl:flash>
```

## 使用说明

通过 stl:flash 标签在模板中获取并展示栏目或内容的Flash

stl:flash 标签的地址取自栏目或内容的图片地址，当图片地址为SWF结尾的flash文件时展示此标签，否则自动转成 &lt;stl:image&gt; 标签。

标签 在栏目模版中默认展示此栏目的flash，在内容模版中默认展示此内容的flash。

stl:flash 标签能够作为 &lt;stl:channels&gt; 等标签的子标签，当作为 的子标签使用时将展示栏目的flash。
stl:flash 标签能够作为 &lt;stl:contents&gt; 等标签的子标签，当作为 的子标签使用时将展示内容的flash。

&lt;stl:flash&gt; 标签对应的实体为{stl:flash}。

## 属性

| 属性                                             | 说明                                 |
| ------------------------------------------------ | ------------------------------------ |
| [channelIndex](flash/attributes?id=channelIndex) | 栏目索引                             |
| [channelName](flash/attributes?id=channelName)   | 栏目名称                             |
| [parent](flash/attributes?id=parent)             | 展示父栏目                           |
| [upLevel](flash/attributes?id=upLevel)           | 上级栏目的级别                       |
| [topLevel](flash/attributes?id=topLevel)         | 从首页向下的栏目级别                 |
| [type](flash/attributes?id=type)                 | 指定存储flash的字段                  |
| [src](flash/attributes?id=src)                   | 展示的flash地址                      |
| [altSrc](flash/attributes?id=altSrc)             | 当指定的flash不存在时展示的flash地址 |
| [width](flash/attributes?id=width)               | 宽度                                 |
| [height](flash/attributes?id=height)             | 高度                                 |