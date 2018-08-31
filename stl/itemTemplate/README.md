# &lt;stl:itemTemplate&gt; 列表项

```html
<stl:itemTemplate
  type="列表项类型"
  selected="列表当前选定项类型"
  selectedValue="当前选定项的值">
</stl:itemTemplate>
```

## 使用说明

通过 stl:itemTemplate 标签在模板中控制列表中每一项的展示内容及样式

type属性为Item、AlternatingItem、Separator三种类型的列表项在列表中最多只能有一个，SelectedItem类型的列表项可以有零个或多个。

SelectedItem类型的列表项所展示的内容由 selected 属性控制，默认当前内容为选中项。

&lt;stl:itemTemplate&gt; 标签对应的实体为{stl:itemTemplate}。

## 上级标签

&lt;stl:itemTemplate&gt; 标签用于展示列表项，必须嵌套在列表标签中使用，列表标签清单如下：

| 上级标签                                               | 说明                                                          |
| ------------------------------------------------------ | ------------------------------------------------------------- |
| [stl:channels 栏目列表](channels/)                     | 通过 stl:channels 标签在模板中展示栏目列表                    |
| [stl:contents 内容列表](contents/)                     | 通过 stl:contents 标签在模板中展示内容列表                    |
| [stl:pageChannels 翻页栏目列表](pageChannels/)         | 通过 stl:pageChannels 标签在模板中展示翻页栏目列表            |
| [stl:pageContents 翻页内容列表](pageContents/)         | 通过 stl:pageContents 标签在模板中展示翻页内容列表            |
| [stl:pageSqlContents 翻页数据库列表](pageSqlContents/) | 通过 stl:pageSqlContents 标签在模板中展示能够翻页的数据库列表 |
| [stl:sqlContents 数据库列表](sqlContents/)             | 通过 stl:sqlContents 标签在模板中展示数据库列表               |
| [stl:sites 站点列表](sites/)                           | 通过 stl:sites 标签在模板中展示站点列表                       |

## 属性

| 属性                                                      | 说明               |
| --------------------------------------------------------- | ------------------ |
| [type](itemTemplate/attributes?id=type)                   | 列表项类型         |
| [selected](itemTemplate/attributes?id=selected)           | 列表当前选定项类型 |
| [selectedValue](itemTemplate/attributes?id=selectedValue) | 当前选定项的值     |