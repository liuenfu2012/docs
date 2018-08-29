# &lt;stl:navigation&gt; 显示导航

```html
<stl:navigation
  emptyText="当无内容时显示的信息"
  isDynamic="是否动态显示"
  isKeyboard="是否开启键盘，↑↓←→键分别为上下左右"
  tipText="导航提示信息"
  type="类型"
  wordNum="显示字数">
</stl:navigation>
```

## 使用说明

通过 stl:navigation 标签在模板中显示链接导航

显示当前页的前/后一条内容或前/后一条栏目的链接导航。

标签 `<stl:navigation>` 用于显示上一条内容/栏目或者下一条内容/栏目的链接。

stl:navigation 标签内可以嵌入任意代码，当条件满足时将显示嵌入的代码。如果需要根据测试是否成功显示不同的结果，需要使用子标签 `<stl:yes>` 和 `<stl:no>` ，测试条件成功时将显示 `<stl:yes>` 中的内容，测试条件失败时将显示 `<stl:no>` 中的内容。

标签 `<stl:navigation>` 默认类型为下一条内容。可以通过type属性修改导航类型。

`<stl:navigation>` 标签对应的实体为{stl:navigation}。

## 子标签列表

| 子标签  | 说明                             |
| ------- | -------------------------------- |
| stl:yes | 链接存在时显示的模板，可以省略   |
| stl:no  | 链接不存在时显示的模板，可以省略 |

## 属性

| 属性       | 说明                               |
| ---------- | ---------------------------------- |
| type       | 类型                               |
| emptyText  | 当无内容时显示的信息               |
| tipText    | 导航提示信息                       |
| wordNum    | 显示字数                           |
| isKeyboard | 是否开启键盘，↑↓←→键分别为上下左右 |