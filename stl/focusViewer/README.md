# &lt;stl:focusviewer&gt; 滚动焦点图

```html
<stl:focusViewer
  bgColor="背景色"
  channelIndex="栏目索引"
  channelName="栏目名称"
  group="指定显示的内容组"
  groupChannel="指定显示的栏目组"
  groupChannelNot="指定不显示的栏目组"
  groupContent="指定显示的内容组"
  groupContentNot="指定不显示的内容组"
  groupNot="指定不显示的内容组"
  height="图片高度"
  isColor="仅显示醒目内容"
  isDynamic="是否动态显示"
  isHot="仅显示热点内容"
  isRecommend="仅显示推荐内容"
  isShowText="是否显示文字标题"
  isTop="仅显示置顶内容"
  isTopText="是否文字显示在顶端"
  order="排序"
  scope="范围"
  startNum="从第几条信息开始显示"
  tags="指定标签"
  theme="主题样式"
  titleWordNum="标题文字数量"
  totalNum="标题文字数量"
  where="获取滚动焦点图的条件判断"
  width="图片宽度">
</stl:focusViewer>
```

## 使用说明

通过 stl:focusviewer 标签在模板中实现由 FLASH 显示的图片轮播效果

stl:focusviewer 标签只能够显示 jpg 以及 png 类型的图片。

如果设置了 channelIndex 属性，系统将寻找对应此栏目索引的栏目并显示此栏目的内容图片。
如果设置了 channelName 属性，系统将寻找对应此栏目名称的栏目并显示此栏目的内容图片。

scope 和 groupChannel 、 groupChannelNot 、 groupContent 、 groupContentNot 属性用于控制内容的范围，order 属性控制内容的排序方式。

isShowText 和 titleWordNum 属性控制是否显示内容标题以及内容标题的显示字数。

`<stl:focusViewer>` 标签对应的实体为{stl:focusViewer}。

## 属性

| 属性            | 说明                     |
| --------------- | ------------------------ |
| channelIndex    | 栏目索引                 |
| channelName     | 栏目名称                 |
| scope           | 范围                     |
| groupChannel    | 指定显示的栏目组         |
| groupChannelNot | 指定不显示的栏目组       |
| groupContent    | 指定显示的内容组         |
| groupContentNot | 指定不显示的内容组       |
| group           | 指定显示的内容组         |
| groupNot        | 指定不显示的内容组       |
| tags            | 指定标签                 |
| order           | 排序                     |
| startNum        | 从第几条信息开始显示     |
| totalNum        | 标题文字数量             |
| titleWordNum    | 标题文字数量             |
| where           | 获取滚动焦点图的条件判断 |
| isTop           | 仅显示置顶内容           |
| isRecommend     | 仅显示推荐内容           |
| isHot           | 仅显示热点内容           |
| isColor         | 仅显示醒目内容           |
| theme           | 主题样式                 |
| width           | 图片宽度                 |
| height          | 图片高度                 |
| bgColor         | 背景色                   |
| isShowText      | 是否显示文字标题         |
| isTopText       | 是否文字显示在顶端       |