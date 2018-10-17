# &lt;stl:tags&gt; 标签

```html
<stl:tags tagLevel="标签级别" totalNum="展示标签数目" isOrderByCount="是否按引用次数排序" theme="主题样式" context="所处上下文"></stl:tags>
```

## 说明

通过 stl:tags 标签在模板中展示内容标签

标签(Tag)是一种互联网内容组织方式，是相关性很强的关键字，它帮助人们轻松的描述和分类内容，以便于检索和分享，Tag是web 2.0的重要标签。

stl:tags 标签用于在页面中展示标签云（Tag Cloud），标签云中标签的排列顺序依照字典排序，按照热门程度确定字体的大小和颜色。最终使得依照字典或者热门程度来寻找信息便成为可能。

标签有三个重要属性：标签名、标签使用次数、标签级别（热门程度）。通常标签展示的字体大小和颜色由标签级别决定，标签级别由系统通过标签的使用次数计算而来。

&lt;stl:tags&gt; 标签能够包含代码，用于控制每一条标签的展示样式。在&lt;stl:tags&gt;内部可以嵌入任何HTML代码和STL代码，除此以外还能够嵌入以下三种实体：标签名、标签使用次数、标签级别（热门程度）。其中标签名使用{Tag.Name}表示，标签使用次数使用{Tag.Count}表示，标签级别使用{Tag.Level}表示。

如果&lt;stl:tags&gt; 标签内部不包含代码，系统将采用默认的展示样式展示标签云。

如果 &lt;stl:tags&gt; 标签置于内容模板中，系统将仅展示当前内容包含的标签，如果希望在内容模板中展示站点内的所有标签，需要设置 context （上下文）属性为 "Channel"。

属性 tagLevel 用于控制展示标签的级别，默认展示所有级别的标签。标签分为四个级别，代表有百分之多少的内容引用了此标签：

级别一的标签引用百分比为0%—20%
级别二的标签引用百分比为20%—50%
级别三的标签引用百分比为50%—70%
级别四的标签引用百分比为70%—100%
属性 totalNum 控制展示标签数量。

&lt;stl:tags&gt; 标签对应的实体为{stl:tags}。

## 属性

| 属性                                                | 说明               |
| --------------------------------------------------- | ------------------ |
| [tagLevel](tags/attributes?id=tagLevel)             | 标签级别           |
| [totalNum](tags/attributes?id=totalNum)             | 展示标签数目       |
| [isOrderByCount](tags/attributes?id=isOrderByCount) | 是否按引用次数排序 |
| [theme](tags/attributes?id=theme)                   | 主题样式           |
| [context](tags/attributes?id=context)               | 所处上下文         |