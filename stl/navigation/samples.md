# &lt;stl:navigation&gt; 示例

## 展示上一篇内容和下一篇内容的导航

下面的例子展示上一篇内容和下一篇内容的导航。

```html
<table cellpadding="0" width="95%" cellspacing="0" height="40" align="center">
  <tr>
    <td align="left" width="50%">
      <stl:navigation tipText="上一篇:" emptyText="无" type="PreviousContent"></stl:navigation>
    </td>
    <td width="50%">
      <stl:navigation tipText="下一篇:" emptyText="无" type="NextContent"></stl:navigation>
    </td>
  </tr>
</table>
```

解析后的 HTML 代码：

```html
<table cellpadding="0" width="95%" cellspacing="0" height="40" align="center">
  <tbody><tr>
    <td align="left" width="50%">
     上一篇:<a href="/navigation/index.html">stl:navigation 标签用法</a>
    </td>
    <td width="50%">
     下一篇:<a href="/navigation/1.html">stl:navigation 标签示例（高级）</a>
    </td>
  </tr>
 </tbody></table>
```

## 展示上一个栏目和下一个栏目的导航

下面的例子展示上一个栏目和下一个栏目的导航。

```html
<table cellpadding="0" width="95%" cellspacing="0" height="40" align="center">
  <tr>
    <td align="left" width="50%">
      <stl:navigation tipText="上一篇:" emptyText="无" type="PreviousChannel"></stl:navigation>
    </td>
    <td width="50%">
      <stl:navigation tipText="下一篇:" emptyText="无" type="NextChannel"></stl:navigation>
    </td>
  </tr>
</table>
```

解析后的 HTML 代码：

```html
<table cellpadding="0" width="95%" cellspacing="0" height="40" align="center">
  <tbody>
    <tr>
      <td align="left" width="50%">
        上一篇:<a href="/location/index.html">stl:location 当前位置</a>
      </td>
      <td width="50%">
        下一篇:<a href="/tree/index.html">stl:tree 树状导航</a>
      </td>
    </tr>
  </tbody>
</table>
```

## 当上一篇/下一篇内容存在时展示对应链接

下面的例子仅当上一篇/下一篇内容存在时展示对应链接，否则不展示。

```html
<stl:navigation type="PreviousContent">
  <p>
    上一篇： <stl:a></stl:a>
  </p>
</stl:navigation>
<stl:navigation type="NextContent">
  <p>
    下一篇： <stl:a></stl:a>
  </p>
</stl:navigation>
```

解析后的 HTML 代码：

```html
<p>
  上一篇： <a href="/navigation/2.html">stl:navigation 标签示例（简单）</a>
</p>
```
