# &lt;stl:pageContents&gt; 翻页内容列表

```html
<stl:pageContents
  align="整体对齐"
  cellPadding="填充"
  cellSpacing="间距"
  channelIndex="栏目索引"
  channelName="栏目名称"
  class="Css类"
  columns="列数"
  direction="方向"
  group="指定显示的内容组"
  groupChannel="指定显示的栏目组"
  groupChannelNot="指定不显示的栏目组"
  groupContent="指定显示的内容组"
  groupContentNot="指定不显示的内容组"
  groupNot="指定不显示的内容组"
  height="整体高度"
  isColor="仅显示醒目内容"
  isDynamic="是否动态显示"
  isFile="仅显示附件内容"
  isHot="仅显示热点内容"
  isImage="仅显示图片内容"
  isNoDup="不显示重复标题的内容"
  isRecommend="仅显示推荐内容"
  isRelatedContents="显示相关内容列表"
  isTop="仅显示置顶内容"
  isVideo="仅显示视频内容"
  itemAlign="项水平对齐"
  itemClass="项Css类"
  itemHeight="项高度"
  itemVerticalAlign="项垂直对齐"
  itemWidth="项宽度"
  layout="指定列表布局方式"
  maxPage="翻页中生成的静态页面最大数，剩余页面将动态获取"
  order="排序"
  pageNum="每页显示的内容数目"
  scope="内容范围"
  startNum="从第几条信息开始显示"
  tags="指定标签"
  titleWordNum="内容标题文字数量"
  topLevel="从首页向下的栏目级别"
  totalNum="显示内容数目"
  upLevel="上级栏目的级别"
  where="获取内容列表的条件判断"
  width="整体宽度">
</stl:pageContents>
```

## 使用说明

通过 stl:pageContents 标签在模板中显示翻页内容列表

`<stl:pageContents>` 标签需要和 STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>` 配合使用。

所有属于 STL 标签 `<stl:contents>` 的成员均适用于 `<stl:pageChannels>` 标签。

`<stl:pageContents>` 标签和 `<stl:contents>` 具有相同的属性，这两个标签的区别在于 `<stl:pageContents>` 能够翻页，且 `<stl:pageContents>` 标签仅能用在栏目模板中。

通常将 STL 标签 `<stl:pageItems>` 及 `<stl:pageItem>`	置于 `<stl:pageContents>` 标签的下方，代表翻页按钮。

`<stl:pageContents>` 只能在栏目模版中使用，如果需要在其他类型的模版中使用必须将 `<stl:pageContents>` 标签和对应的 `<stl:pageItems>` 翻页标签放到 `<stl:dynamic>` 动态标签中，否则 `<stl:pageContents>` 标签将无法解析。

列表相关介绍请参见列表标签及列表项

`<stl:pageContents>` 标签对应的实体为{stl:pageContents}。

## 属性

| 属性    | 说明                                           |
| ------- | ---------------------------------------------- |
| pageNum | 每页显示的内容数目                             |
| maxPage | 翻页中生成的静态页面最大数，剩余页面将动态获取 |