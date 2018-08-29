# &lt;stl:tags&gt; 示例

## 默认方式显示标签云

下面的例子显示站点内的所有标签，显示数量为 30。

```html
<stl:tags context="Channel" totalNum="30"></stl:tags>
```

## 自定义标签显示样式

下面的例子采用自定义的方式显示标签。

```html
<div class="mod">
  <div class="mBody">
  <div class="tagHead">标签列表</div>
    <ul class="tagCloud">
      <stl:tags context="Channel" totalNum="30">
        <li class="tag_popularity_{Tag.Level}">
          <stl:a target="_blank" href="/utils/tags.html?tagName={Tag.Name}">{Tag.Name}</stl:a>
        </li>
      </stl:tags>
    </ul>
  </div>
</div>
```
