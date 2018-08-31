# &lt;stl:pageItem&gt; 示例

## 展示翻页项组合

下面的例子展示翻页项组合。

```html
<stl:pageItems>
<table width="100%">
  <tr>
    <td align="left">
      <stl:pageItem type="FirstPage" text="首页"></stl:pageItem> |
      <stl:pageItem type="PreviousPage" text="上一页"></stl:pageItem> |
      <stl:pageItem type="NextPage" text="下一页"></stl:pageItem> |
      <stl:pageItem type="LastPage" text="末页"></stl:pageItem>
    </td>
    <td> </td>
    <td align="right">
      <stl:pageItem type="CurrentPageIndex" text="当前页："></stl:pageItem>/<stl:pageItem type="TotalPageNum"></stl:pageItem>
      <stl:pageItem type="PageNavigation"></stl:pageItem>
      <stl:pageItem type="PageSelect" class="input-small"></stl:pageItem>
    </td>
  </tr>
</table>
</stl:pageItems>
```

## 展示翻页导航

翻页项根据是否当前页展示不同的风格

```html
<stl:pageItems>
<div class="pagination">
  <ul>
    <li><a href="{PageItem.PreviousPage}">Prev</a></li>
    <stl:pageItem type="PageNavigation">
      <stl:yes>
        <li><a href="{Current.Url}">{Current.Num}</a></li>
      </stl:yes>
      <stl:no>
        <li class="active"><span>{Current.Num}</span></li>
      </stl:no>
    </stl:pageItem>
    <li><a href="{PageItem.NextPage}">Next</a></li>
  </ul>
</div>
</stl:pageItems>
```

## 展示上一页、数字导航及下一页

下面的例子展示包含 CSS 样式的组合翻页标签，可以直接拷贝到模板中使用。

```html
<style type="text/css">
.page_wrap{clear:both; margin-bottom:10px; overflow:hidden;zoom:1;}
.paginator {float:right; height:25px; overflow:hidden; }
.paginator,
.paginator input,
.paginator button {font-family:Tahoma, "宋体"; font-size:12px; }
.paginator a,
.paginator span {float:left; height:23px; margin:0 5px 0 0; text-align:center; white-space:nowrap; vertical-align:middle; line-height:23px; background:#fff; }
.paginator a {color:#085C9B; }
.paginator b{font-family:"宋体"; margin:3px;font-weight:300;}
.paginator a:link,
.paginator a:visited,
.paginator a:hover,
.paginator a:active {text-decoration:none; }
.paginator .page-start,
.paginator a,
.paginator .page-end {padding:0 8px; border:1px solid #D3D3D3; background:#ffffff; }
.paginator .page-start {border-color:#d9d9d9; color:#d9d9d9; }
.paginator .page-end { border-color:#d9d9d9;  color:#d9d9d9; }
.paginator .page-this,
.paginator .page-break {padding:0 3px; }
.paginator .page-break {border:1px solid #fff; }
.paginator .page-this {border:1px solid #D3D3D3;background-color:#E9E9E9; color:#D4105A;padding:0px 8px; font-weight:bold; }
.paginator .page-skip {height:22px; line-height:22px; padding:0 3px; margin:0; background:none; }
.paginator .page-skip input {width:26px;  *width:23px;height:19px;line-height:19px;border:1px #D3D3D3 solid;font-size:12px; margin:-1px 6px 0px 6px;#margin-top:1px;_margin-top:0px;padding:0px 0px 0px 2px; vertical-align:middle; padding-top:0px; padding-bottom:0px; }
.paginator .page-skip button {font-size:12px; padding:0 5px 5px 5px;_padding:0 5px 0 5px; width:auto; _width:0; height:22px;  *height:23px; *line-height:20px; _height:16px; _line-height:16px; margin-left:10px;  *margin-top:-1px;overflow:visible; vertical-align:top; }
.paginator a:hover {border:1px solid #A6A6A6;color:#868688; }
</style>

<stl:pageItems>
<div class="page_wrap">
  <div class="paginator">
  <stl:pageItem type="PreviousPage">
    <stl:yes>
      <a class="page-prev" href="{Current.Url}">上一页</a>
    </stl:yes>
    <stl:no>
      <span class="page-start">上一页</span>
    </stl:no>
  </stl:pageItem>
  <stl:pageItem type="PageNavigation">
    <stl:yes>
      <a href="{Current.Url}">{Current.Num}</a>
    </stl:yes>
    <stl:no>
      <span class="page-this">{Current.Num}</span>
    </stl:no>
  </stl:pageItem>
  <stl:pageItem type="NextPage">
    <stl:yes>
      <a class="page-next" href="{Current.Url}">下一页</a>
    </stl:yes>
    <stl:no>
      <span class="page-end">下一页</span>
    </stl:no>
  </stl:pageItem>
  </div>
</div>
</stl:pageItems>
```
