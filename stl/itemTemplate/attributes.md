# &lt;stl:itemTemplate&gt; 属性

## type

列表项的类型

- `"alternatingItem"` 为列表的交替项提供模板
- `"footer"` 为列表提供底部模板
- `"header"` 为列表提供头部模板
- `"item"` 为列表的项提供模板
- `"selectedItem"` 为列表当前选定项提供模板
- `"separator"` 为列表各项之间的分隔符提供模板

## selected

决定 SelectedItem 的选定内容项类型

- `"channelName"` 指定栏目名称的项
- `"current"` 当前项为选中项
- `"file"` 带附件项为选中项
- `"image"` 带图片项为选中项
- `"isColor"` 醒目项为选中项
- `"isHot"` 热点项为选中项
- `"isRecommend"` 推荐项为选中项
- `"isTop"` 置顶项为选中项
- `"top"` 当前栏目从首页向下的栏目为选中项
- `"up"` 当前栏目的上级栏目为选中项
- `"video"` 带视频项为选中项
- `"n"` n 为数字，代表列表的第 n 项为展示选择项，如：1
- `"n,m,p..."` 字母为数字，代表列表的第 n,m,p 等项为选择项，如：2,4,6
- `"n-m"` n 及 m 为数字，代表列表的第 n 项到第 m 项为选择项，如：2-8

## selectedValue

如果 selected 为 ChannelName,selectedValue 应该为栏目名称
