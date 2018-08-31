# &lt;stl:dynamic&gt; 动态展示

```html
<stl:dynamic
  context="所处上下文"
  isPageRefresh="翻页时是否刷新页面"
  onBeforeSend="动态请求发送前执行的JS代码"
  onSuccess="动态请求成功后执行的JS代码"
  onComplete="动态请求结束后执行的JS代码"
  onError="动态请求失败后执行的JS代码">
</stl:dynamic>
```

## 使用说明

通过 stl:dynamic 标签在模板中实现动态展示功能

&lt;stl:dynamic&gt; 使用 AJAX 技术使页面中部分区域能够及时反应出变化内容，而不必生成页面后才能展示。

&lt;stl:dynamic&gt; 标签用于需要即时反应出变化的页面区域，可以将任何代码放置在 &lt;stl:dynamic&gt; 中，页面将展示出最新的内容。

大部分 STL 标签拥有 isDynamic 属性，如：`<stl:contents isDynamic="true"></stl:contents>`。设置此属性的结果与以下代码一致：`<stl:dynamic><stl:contents></stl:contents><stl:dynamic>`

&lt;stl:dynamic&gt; 中可以包含任何 STL 标签或 HTML 标签。

## Js脚本事件

&lt;stl:dynamic&gt; 标签是由Ajax来实现的，页面通过Js发起动态请求，服务器返回请求结果并展示在页面中。

动态内容由于通过Ajax加载，会有一定的延迟，我们可以通过定义Ajax事件来进行精确控制。

这是Ajax事件的完整列表，以及它们被触发的顺序。每个动态请求都会触发事件。

> Js脚本事件可以是一段可运行的Js代码，也可以是一个Js函数，如果是函数，请在函数名后加()以确保函数能够运行。

### onBeforeSend

这个事件是在Ajax请求启动之前触发的，它允许你再动态访问之前进行预处理操作。

在此事件中可以直接调用以下参数：

- containerId：动态加载完毕后将更新的HTML 元素的Id

### onSuccess

此事件仅在请求成功时调用(服务器没有错误，数据没有错误)。

在此事件执行完毕后，页面才会更新数据，可以通过 onSuccess 事件对返回的数据进行调整。

在此事件中可以直接调用以下参数：

- containerId：动态加载完毕后将更新的HTML 元素的Id
- data：返回的结果数据
- status：返回的 HTTP 状态码

### onError

此事件仅在请求发生错误时调用(对于请求，永远不能同时有错误和成功回调)。

在此事件中可以直接调用以下参数：

- containerId：动态加载完毕后将更新的HTML 元素的Id
- err：错误信息
- status：返回的 HTTP 状态码

### onComplete

不管请求是否成功，都会调用此事件。这个事件是最后触发的，可以通过 onComplete 事件对已更新的页面元素进行调整。

- containerId：动态加载完毕后将更新的HTML 元素的Id
- err：错误信息
- data：返回的结果数据
- status：返回的 HTTP 状态码

## 属性

| 属性                                                 | 说明                       |
| ---------------------------------------------------- | -------------------------- |
| [context](dynamic/attributes?id=context)             | 所处上下文                 |
| [isPageRefresh](dynamic/attributes?id=isPageRefresh) | 翻页时是否刷新页面         |
| [onBeforeSend](dynamic/attributes?id=onBeforeSend)   | 动态请求发送前执行的JS代码 |
| [onSuccess](dynamic/attributes?id=onSuccess)         | 动态请求成功后执行的JS代码 |
| [onComplete](dynamic/attributes?id=onComplete)       | 动态请求结束后执行的JS代码 |
| [onError](dynamic/attributes?id=onError)             | 动态请求失败后执行的JS代码 |
