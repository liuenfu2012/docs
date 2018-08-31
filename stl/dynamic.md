# 动态展示

默认系统是通过生成全静态页面来展示内容的，这样的好处有很多，比如加载速度快、安全性高、服务器负载小、便于 SEO 优化等等。

但是有些情况下，我们希望能够实时展示数据，而不是每次需要生成页面后才能展示最新的数据，这种情况下我们就需要采用动态展示方式展示内容了。

我们可以通过属性来切换动态展示，也可以通过动态标签来切换动态展示，下面分别进行说明。

## 通过属性 isDynamic 切换动态展示

大部分标签都拥有 isDynamic 属性，用于设置是否将此标签动态展示。

```html
<stl:contents isDynamic="true">
  <stl:a></stl:a>
</stl:contents>
```

## 通过 &lt;stl:dynamic&gt; 元素切换动态展示

如果需要动态展示的标签比较多，可以使用 &lt;stl:dynamic&gt;将这些代码嵌套进来实现动态展示。请参考：[&lt;stl:dynamic&gt; 容器元素](dynamic/)。

```html
<stl:dynamic>
  <stl:channel type="title"></stl:channel>
  <stl:contents>
    <stl:a></stl:a>
  </stl:contents>
</stl:dynamic>
```

## Js 脚本事件

Js 脚本事件只能通过定义 &lt;stl:dynamic&gt; 元素的属性来支持。

&lt;stl:dynamic&gt; 标签是由 Ajax 来实现的，页面通过 Js 发起动态请求，服务器返回请求结果并展示在页面中。

动态内容由于通过 Ajax 加载，会有一定的延迟，我们可以通过定义 Ajax 事件来进行精确控制。

请参考：[Js 脚本事件](dynamic/?id=js脚本事件)。
