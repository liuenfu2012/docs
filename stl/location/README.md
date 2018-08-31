# &lt;stl:location&gt; 当前位置

```html
<stl:location
  separator="当前位置分隔符"
  target="打开窗口的目标"
  linkClass="链接CSS样式"
  wordNum="链接字数"
  isContainSelf="是否包含当前栏目">
</stl:location>
```

## 使用说明

通过 stl:location 标签在模板中插入页面的当前位置。

标签 &lt;stl:location&gt; 是以分隔符分隔的栏目链接，表示当前页所处的位置。
separator 属性为栏目之间的分隔符，您也可以把分割字符串放在 &lt;stl:location&gt; 标签之间，作为子标签。

&lt;stl:location&gt; 标签对应的实体为{stl:location}。

## 属性

| 属性                                                  | 说明             |
| ----------------------------------------------------- | ---------------- |
| [separator](location/attributes?id=separator)         | 当前位置分隔符   |
| [target](location/attributes?id=target)               | 打开窗口的目标   |
| [linkClass](location/attributes?id=linkClass)         | 链接CSS样式      |
| [wordNum](location/attributes?id=wordNum)             | 链接字数         |
| [isContainSelf](location/attributes?id=isContainSelf) | 是否包含当前栏目 |