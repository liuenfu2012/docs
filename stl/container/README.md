# &lt;stl:container&gt; 容器

```html
<stl:container
  channelIndex="栏目索引"
  channelName="栏目名称"
  parent="父栏目"
  upLevel="上级栏目的级别"
  topLevel="从首页向下的栏目级别"
  context="所处上下文">
</stl:container>
```

## 使用说明

通过 stl:container 标签在模板中定义容器，切换上下文

&lt;stl:container&gt; 标签需要包含子标签，系统将在指定上下文情景下对子标签进行解析。

## 属性

| 属性                                                 | 说明                 |
| ---------------------------------------------------- | -------------------- |
| [channelIndex](container/attributes?id=channelIndex) | 栏目索引             |
| [channelName](container/attributes?id=channelName)   | 栏目名称             |
| [parent](container/attributes?id=parent)             | 父栏目               |
| [upLevel](container/attributes?id=upLevel)           | 上级栏目的级别       |
| [topLevel](container/attributes?id=topLevel)         | 从首页向下的栏目级别 |
| [context](container/attributes?id=context)           | 所处上下文           |