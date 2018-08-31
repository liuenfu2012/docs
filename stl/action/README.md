# &lt;stl:action&gt; 执行动作

```html
<stl:action
  type="动作类型">
</stl:action>
```

## 使用说明

通过 &lt;stl:action&gt; 标签在模板中创建链接，点击链接后将执行相应的动作

标签 &lt;stl:action&gt; 所执行的动作由属性 type 指定：

Translate 执行整个站点的简体/繁体文字转换功能。

Close 执行关闭本页功能。

stl:action 与 stl:a 标签类似，系统将会把此标签解析为 &lt;a&gt; 标签。
可以把文字或图片作为 stl:action 标签的子标签。

&lt;stl:action&gt;标签对应的实体为{stl:action}。

## 属性

| 属性                              | 说明     |
| --------------------------------- | -------- |
| [type](action/attributes?id=type) | 动作类型 |