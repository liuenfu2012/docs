# &lt;stl:image&gt; 展示图片

```html
<stl:image channelIndex="栏目索引" channelName="栏目名称" parent="展示父栏目" upLevel="上级栏目的级别" topLevel="从首页向下的栏目级别" type="指定存储图片的字段" no="展示字段存储的第几幅图片，默认为 1" isOriginal="如果是引用内容，是否获取所引用内容的值" src="展示的图片地址" altSrc="当指定的图片不存在时展示的图片地址"></stl:image>
```

## 说明

通过 stl:image 标签在模板中展示栏目或内容的图片

stl:image 标签的地址取自栏目或内容的图片地址，当图片地址为SWF结尾时自动转成 &lt;stl:flash&gt; 标签。

标签 &lt;stl:image&gt; 在栏目模版中默认展示此栏目的图片，在内容模版中默认展示此内容的图片。

stl:image 标签能够作为 &lt;stl:channels&gt; 等标签的子标签，当作为 的子标签使用时将展示栏目的图片。
stl:image 标签能够作为 &lt;stl:contents&gt; 等标签的子标签，当作为 的子标签使用时将展示内容的图片。

stl:image 标签默认展示内容的图片字段，如果希望展示自定义的图片字段，则需要设置 type 属性。

 &lt;stl:image&gt; 标签对应的实体为{stl:image}。

## 属性

| 属性                                             | 说明                                   |
| ------------------------------------------------ | -------------------------------------- |
| [channelIndex](image/attributes?id=channelIndex) | 栏目索引                               |
| [channelName](image/attributes?id=channelName)   | 栏目名称                               |
| [parent](image/attributes?id=parent)             | 展示父栏目                             |
| [upLevel](image/attributes?id=upLevel)           | 上级栏目的级别                         |
| [topLevel](image/attributes?id=topLevel)         | 从首页向下的栏目级别                   |
| [type](image/attributes?id=type)                 | 指定存储图片的字段                     |
| [no](image/attributes?id=no)                     | 展示字段存储的第几幅图片，默认为 1     |
| [isOriginal](image/attributes?id=isOriginal)     | 如果是引用内容，是否获取所引用内容的值 |
| [src](image/attributes?id=src)                   | 展示的图片地址                         |
| [altSrc](image/attributes?id=altSrc)             | 当指定的图片不存在时展示的图片地址     |