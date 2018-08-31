# &lt;stl:navigation&gt; 展示导航

```html
<stl:navigation
  type="类型"
  emptyText="当无内容时展示的信息"
  tipText="导航提示信息"
  wordNum="展示字数"
  isKeyboard="是否开启键盘，↑↓←→键分别为上下左右">
</stl:navigation>
```

## 使用说明

通过 stl:navigation 标签在模板中展示链接导航

展示当前页的前/后一条内容或前/后一条栏目的链接导航。

标签 &lt;stl:navigation&gt; 用于展示上一条内容/栏目或者下一条内容/栏目的链接。

stl:navigation 标签内可以嵌入任意代码，当条件满足时将展示嵌入的代码。如果需要根据测试是否成功展示不同的结果，需要使用子标签 &lt;stl:yes&gt; 和 &lt;stl:no&gt; ，测试条件成功时将展示 &lt;stl:yes&gt; 中的内容，测试条件失败时将展示 &lt;stl:no&gt; 中的内容。

标签 &lt;stl:navigation&gt; 默认类型为下一条内容。可以通过type属性修改导航类型。

&lt;stl:navigation&gt; 标签对应的实体为{stl:navigation}。

## 子标签列表

| 子标签          | 说明                             |
| --------------- | -------------------------------- |
| [stl:yes](yes/) | 链接存在时展示的模板，可以省略   |
| [stl:no](no/)   | 链接不存在时展示的模板，可以省略 |

## 属性

| 属性                                              | 说明                               |
| ------------------------------------------------- | ---------------------------------- |
| [type](navigation/attributes?id=type)             | 类型                               |
| [emptyText](navigation/attributes?id=emptyText)   | 当无内容时展示的信息               |
| [tipText](navigation/attributes?id=tipText)       | 导航提示信息                       |
| [wordNum](navigation/attributes?id=wordNum)       | 展示字数                           |
| [isKeyboard](navigation/attributes?id=isKeyboard) | 是否开启键盘，↑↓←→键分别为上下左右 |