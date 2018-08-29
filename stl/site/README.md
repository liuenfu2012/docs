# &lt;stl:site&gt; 获取站点值

```html
<stl:site
  isDynamic="是否动态显示"
  siteName="站点名称"
  siteDir="站点文件夹">
</stl:site>
```

## 使用说明

通过 stl:site 标签在模板中显示站点值

`<stl:site>` 必须包含 siteName 或 siteDir 属性，用于指定站点并显示内容。

`<stl:site>` 必须包含子标签，否则将不起作用，系统将找到对应的站点并在对应站点下解析子标签。子标签可以是任意STL标签或HTML标签。

`<stl:site>` 标签对应的实体为{stl:site}。

## 属性

| 属性     | 说明       |
| -------- | ---------- |
| siteName | 站点名称   |
| siteDir  | 站点文件夹 |