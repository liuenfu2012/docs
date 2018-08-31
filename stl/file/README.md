# &lt;stl:file&gt; 文件下载链接

```html
<stl:file
  type="指定存储附件的字段"
  no="展示字段的顺序"
  src="需要下载的文件地址"
  isFileSize="展示文件大小"
  isCount="是否记录文件下载次数"
  leftText="展示在信息前的文字"
  rightText="展示在信息后的文字">
</stl:file>
```

## 使用说明

通过 stl:file 标签在模板中展示文件下载链接

type="指定存储附件的字段"用于明确存储附件的字段。

stl:file 通常作为 &lt;stl:contents&gt; 内容列表标签的子标签使用或在内容模板中使用，用于展示内容附件的下载链接。
如果指定 src 属性，页面将展示指定文件的下载链接。
如果设置 isCount 属性为 true，系统将统计下载链接的点击次数。
stl:file 标签默认展示内容的附件字段，如果希望展示自定义的附件字段，则需要设置 type 属性。
stl:file 标签内可以嵌入任意代码，如"下载"或图片标签，用于展示下载链接；如果没有嵌入内容，系统将展示文件的文件名。

若附件字段有多个值，可以使用 &lt;stl:each&gt; 遍历所有的附件。

&lt;stl:file&gt; 标签对应的实体为{stl:file}。

## 属性

| 属性                                        | 说明                 |
| ------------------------------------------- | -------------------- |
| [type](file/attributes?id=type)             | 指定存储附件的字段   |
| [no](file/attributes?id=no)                 | 展示字段的顺序       |
| [src](file/attributes?id=src)               | 需要下载的文件地址   |
| [isFileSize](file/attributes?id=isFileSize) | 展示文件大小         |
| [isCount](file/attributes?id=isCount)       | 是否记录文件下载次数 |
| [leftText](file/attributes?id=leftText)     | 展示在信息前的文字   |
| [rightText](file/attributes?id=rightText)   | 展示在信息后的文字   |