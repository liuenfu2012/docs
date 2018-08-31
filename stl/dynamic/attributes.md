# &lt;stl:dynamic&gt; 属性

## context

所处上下文

- `"Content"` 内容
- `"Channel"` 栏目
- `"SqlContent"` 获取数据库数据

## isPageRefresh

包含翻页时是否刷新页面

- `"true"` 翻页时刷新页面
- `"false"` 翻页时不刷新页面

## onBeforeSend

这个事件是在 Ajax 请求启动之前触发的，它允许你再动态访问之前进行预处理操作。

在此事件中可以直接调用以下参数：

- containerId：动态加载完毕后将更新的 HTML 元素的 Id

## onSuccess

此事件仅在请求成功时调用(服务器没有错误，数据没有错误)。

在此事件执行完毕后，页面才会更新数据，可以通过 onSuccess 事件对返回的数据进行调整。

在此事件中可以直接调用以下参数：

- containerId：动态加载完毕后将更新的 HTML 元素的 Id
- data：返回的结果数据
- status：返回的 HTTP 状态码

## onError

此事件仅在请求发生错误时调用(对于请求，永远不能同时有错误和成功回调)。

在此事件中可以直接调用以下参数：

- containerId：动态加载完毕后将更新的 HTML 元素的 Id
- err：错误信息
- status：返回的 HTTP 状态码

## onComplete

不管请求是否成功，都会调用此事件。这个事件是最后触发的，可以通过 onComplete 事件对已更新的页面元素进行调整。

- containerId：动态加载完毕后将更新的 HTML 元素的 Id
- err：错误信息
- data：返回的结果数据
- status：返回的 HTTP 状态码
