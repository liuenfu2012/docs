# &lt;stl:select&gt; 属性

所有属于 HTML 标签&lt;select&gt;的属性均适用于&lt;stl:select&gt;标签，请参考：[HTML &lt;select&gt; 元素](/reference_html/select)。

## isChannel

是否展示栏目下拉列表

- `"true"` 不从所有栏目总选择
- `"false"` 从网站的所有栏目中选择合适的栏目进行展示

## channelIndex

栏目索引是一个站点中栏目的标识，具有唯一性。

如果设置了 channelIndex 属性，系统将寻找对应索引的栏目并将上下文切换到此栏目。

```html
<!-- 链接到首页 -->
<stl:select channelIndex="首页"></stl:select>
```

## channelName

栏目名称可以重复，所以应该尽量避免使用栏目名称来切换上下文，但是如果 channelName 与 channelIndex 属性配合使用，系统将首先定位到 channelIndex 索引所在的栏目，之后再寻找此栏目下栏目名称为 channelName 的栏目。

```html
<!-- 链接到当前栏目下的名称为“栏目名称”的栏目 -->
<stl:select channelName="栏目名称"></stl:select>
```

```html
<!-- 链接到“栏目索引”下的名称为“栏目名称”的栏目 -->
<stl:select channelIndex="栏目索引" channelName="栏目名称"></stl:select>
```

## parent

将上下文切换到当前栏目的上一级栏目。

- `"true"` 表示切换到当前栏目的上一级栏目，等价于 upLevel="1"。
- `"false"` 表示不切换到当前栏目的上一级栏目。

如果同时设置了 parent 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上级栏目。

```html
<!-- 链接到当前栏目的上一级栏目 -->
<stl:select parent="true"></stl:select>
```

## upLevel

切换到上级栏目，1 为上一级栏目，2 为上两级栏目，以此类推。

如果同时设置了 upLevel 以及 channelIndex 属性，系统将首先定位到 channelIndex 栏目索引所在的栏目，之后再切换到对应栏目的上 N 级栏目。

```html
<!-- 链接到当前栏目的上两级栏目 -->
<stl:select upLevel="2"></stl:select>
```

## topLevel

切换到从首页向下第 N 个级别的栏目，0 代表切换到首页，1 代表一级栏目，2 代表二级栏目，以此类推。

```html
<!-- 链接到一级栏目 -->
<stl:select topLevel="1"></stl:select>
```

## context

通常如果标签被嵌套在列表元素中时，系统会设置上下文为当前的列表类型，同时对标签进行解析时也将根据列表类型进行判断，如将 `<stl:select></stl:select>` 放到内容列表以及栏目列表中时，stl:select 标签的链接会分别展示内容的连接以及栏目的连接。

如果希望`<stl:select></stl:select>`标签无论在内容列表还是栏目列表都只展示栏目链接，可以设置 context 属性为 Channel:`<stl:select context="channel"></stl:select>`

- `"default"` 默认，即当前所处上下文。
- `"content"` 内容上下文。
- `"channel"` 栏目上下文。
- `"sqlContent"` Sql 内容上下文。
- `"site"` 站点上下文。

```html
<!-- 分别展示栏目与内容链接 -->
<stl:channels>
  <stl:contents>
    栏目：<stl:select context="channel"></stl:select>
    内容：<stl:select></stl:select>
  </stl:contents>
</stl:channels>
```

## scope

内容范围。此属性只可属于以下可能的取值的一种。

- `"Self"` 展示本栏目下的所有内容(仅内容下拉列表可用)
- `"Children"` 当栏目下拉列表时展示所有下级栏目，当内容下拉列表时展示本栏目下级栏目下的所有内容
- `"SelfAndChildren"` 展示本级栏目及下一极子栏目下的所有内容(仅内容下拉列表可用)
- `"Descendant"` 当栏目下拉列表时展示所有级别的子栏目，当内容下拉列表时展示所有级别的子栏目下的所有内容
- `"All"` 展示本级栏目及所有级别子栏目下的所有内容(仅内容下拉列表可用)

## groupChannel

栏目组别，如设置此属性，则只展示指定栏目组别的内容列表。

## groupChannelNot

非栏目组别，如设置此属性，则只展示不等于指定栏目组别的内容列表。

## groupContent

内容组别，如设置此属性，则只展示指定内容组别的内容列表。

## groupContentNot

非内容组别，如设置此属性，则只展示不等于内容组别的内容列表。

## tags

仅展示指定标签的内容，多个标签用","分隔。 (仅内容下拉列表可用)

## order

内容列表排序方式。此属性只可属于以下可能的取值的一种。

- `"default"` 默认排序，即 CMS 后台界面中的排序
- `"back"` 默认排序的相反方向
- `"addDate"` 按添加时间排序
- `"addDateBack"` 按添加时间的相反方向排序
- `"lastEditDate"` 按最后更改时间排序(仅内容下拉列表可用)
- `"lastEditDateBack"` 按最后更改时间的相反方向排序(仅内容下拉列表可用)

## totalNum

设置列表一共展示多少条信息，0 代表展示所有信息。

## titleWordNum

设置内容标题展示的字数，0 代表不限制字数。

## where

获取下拉列表的条件判断

## queryString

链接参数

## isTop

是否只展示置顶（非置顶）内容。

- `"true"` 仅展示置顶的内容
- `"false"` 仅展示非置顶的内容

## isRecommend

是否只展示推荐（非推荐）内容。

- `"true"` 仅展示推荐的内容
- `"false"` 仅展示非推荐的内容

## isHot

是否只展示热点（非热点）内容。

- `"true"` 仅展示热点的内容
- `"false"` 仅展示非热点的内容

## isColor

是否只展示醒目（非醒目）内容。

- `"true"` 仅展示醒目的内容
- `"false"` 仅展示非醒目的内容

## title

下拉列表中的第一项，作为提示文字

## openWin

选择下拉列表后是否在新窗口打开链接

- `"true"` 新窗口打开链接
- `"false"` 原窗口打开链接
