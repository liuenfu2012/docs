# 翻页标签与实现

## 组成

翻页标签 由 `<stl:pageChannels>`、`<stl:pageContents>` 等翻页列表标签以及`<stl:pageItems>`、`<stl:pageItem>`等翻页项标签组成。

翻页列表元素`<stl:pageChannels>`与`<stl:pageContents>`的作用是显示翻页的列表项，翻页项元素`<stl:pageItems>`、`<stl:pageItem>`的作用是显示翻页按钮，如下一页、下一页等。

## 应用范围

翻页标签可以放到任何类型的模板中使用，唯一的例外是如果在单页模板中使用，需包含在`<stl:dynamic>`标签中。
