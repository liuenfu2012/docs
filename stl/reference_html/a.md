# HTML &lt;a&gt; 元素

HTML &lt;a&gt; 元素 (或锚元素) 可以创建一个到其他网页、文件、同一页面内的位置、电子邮件地址或任何其他 URL 的超链接。

HTML &lt;a&gt; 元素支持 [全局属性](/reference_html/global_attributes.md)。

## 属性

### download(仅 HTML5 适用)

此属性指示浏览器下载 URL 而不是导航到 URL，因此将提示用户将其保存为本地文件。

如果属性有一个值，它将在保存提示中用作预先填写的文件名 (用户仍然可以根据需要更改文件名)。对允许的值没有限制，但是/和\被转换为下划线。大多数文件系统限制文件名中的一些标点符号，浏览器会相应地调整建议的名称。

### href

这是一个必需属性为锚定义一个超文本链接来源。这表示链接目标的 URL 或 URL 片段。URL 片段是由一个 hash 符号（＃），它指定一个内部目标在当前文档中的位置（ID）开头的名字。URL 不限于网页（HTTP）的文件。URL 可能使用浏览器所支持的任何协议。例如，文件，FTP，大多数用户代理 mailto 工作。

### referrer

一个指示在获取资源时应该使用哪个提交者 (referer) 的字符串：

- "no-referrer" 表示 Referer: 头将不会被发送。
- "no-referrer-when-downgrade" 表示当从使用 HTTPS 的页面导航到不使用 TLS(HTTPS)的来源 时不会发送 Referer: 头。如果没有指定策略，这将是用户代理的默认行为。
- "origin" 表示 referrer 将会是页面的来源，大致为这样的组合：主机和端口（不包含具体的路径和参数的信息）。
- "origin-when-cross-origin" 表示导航到其它来源将会限制为这种组合：主机 + 端口，而导航到相同的来源将会包含 referrer 的路径。
- "unsafe-url" 表示 referrer 将会包含来源和路径（但是不会是包含密码或用户名的片段）。这种情况是不安全的，因为它可能会将 TLS 保护的资源的来源和路径泄露给不安全的来源。

### rel

该属性指定了目标对象到链接对象的关系。该值是空格分隔的列表类型值。

### target

该属性指定在何处展示链接的资源。 取值为标签（tab），窗口（window），或框架（iframe）等浏览上下文的名称或其他关键词。以下关键字具有特殊的意义:

- \_self: 当前页面加载，即当前的响应到同一 HTML 4 frame（或 HTML5 浏览上下文）。此值是默认的，如果没有指定属性的话。
- \_blank: 新窗口打开，即到一个新的未命名的 HTML4 窗口或 HTML5 浏览器上下文
- \_parent: 加载响应到当前框架的 HTML4 父框架或当前的 HTML5 浏览上下文的父浏览上下文。如果没有 parent 框架或者浏览上下文，此选项的行为方式相同 \_self。
- \_top: IHTML4 中：加载的响应成完整的，原来的窗口，取消所有其它 frame。 HTML5 中：加载响应进入顶层浏览上下文（即，浏览上下文，它是当前的一个的祖先，并且没有 parent）。如果没有 parent 框架或者浏览上下文，此选项的行为方式相同\_self。

## 示例

### 链接到外部地址

```html
<!-- anchor linking to external file -->
<a href="http://www.mozilla.com/">
External Link
</a>
```

### 链接到本页的某个部分

```html
<!-- links to element on this page with id="attr-href" -->
<a href="#属性">
Description of Same-Page Links
</a>
```

### 创建一个可点击的图片

这个小例子使用图像链接到 MDN 主页。主页将在新的浏览环境，这是一个新的页面或新标签中打开研究。

```html
<a href="https://developer.mozilla.org/en-US/">
  <img src="https://mdn.mozillademos.org/files/6851/mdn_logo.png"
       alt="MDN logo" />
</a>
```
