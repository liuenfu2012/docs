# HTML &lt;select&gt; 元素

HTML select (&lt;select&gt;) 元素是一种表单控件，可创建选项菜单。菜单内的选项为&lt;option&gt; , 可以由 &lt;optgroup&gt; 元素分组。选项可以被用户预先选择。

HTML &lt;select&gt; 元素支持 [全局属性](/reference_html/global_attributes.md)。

## 属性

## autofocus(仅 HTML5 适用)

这个属性能够让一个对象在页面加载的时候获得焦点. 在一个页面上下文中, 只有一个对象可以有这个属性，并且是布尔值(true 或者 false).

## disabled

这个布尔值的属性表明一个用户是否可以操控该表单对象. 如果这个属性没有被明确定义, 则从它的父元素继承, 例如 fieldset; 如果没有父元素设置 disabled 属性, 那么默认该表单对象 enabled.

## form(仅 HTML5 适用)

select 所关联的 form 表单 (它的"表单拥有者"). 如果这个属性被明确定义, 那么它的值一定是在同一个 document 中表单 ID. 这样能够让你把 select 标签放在任何的位置, 不仅限于作为 form 表单的后代元素.

## multiple

这个布尔值的属性标记 select 是否可以多选. 默认是单选.

## name

控件名称

## required(仅 HTML5 适用)

规定 select 的值不能为空(布尔值).

## size

如果控件展示为滚动列表框，则此属性表示为控件中同时可见的行数。浏览器不需要将选择元素呈现为滚动列表框。默认值为 0

## 示例

### 基本用法

```html
<!-- The second value will be selected initially -->
<select name="select">
  <option value="value1">Value 1</option>
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>
```
