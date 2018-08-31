# &lt;stl:search&gt; 示例

## 采用默认方式展示搜索结果

下面的例子实现页面的简体/繁体转换功能，如果希望所有页面均实现转换，需要把代码放到所有模板中（通常放到头部包含文件）。

```html
<stl:search pageNum="12" isDefaultDisplay="true"></stl:search>
```

## 采用自定义方式展示搜索结果，搜索结果关键字高亮展示

```html
<stl:search isDefaultDisplay="true" isHighlight="true">
  <stl:pageContents scope="All" pageNum="12">
    <div>
      <stl:a target="_blank"></stl:a><br />
      <stl:content type="Content" isClearTags="true" wordNum="120"></stl:content>
    </div>
  </stl:pageContents>
  <br />
  <stl:pageItems>
    <table cellpadding="0" cellspacing="0" width="90%" height="40" align="center">
      <tr>
        <td align="left">
          <stl:pageItem type="FirstPage" text="首页"></stl:pageItem> |
          <stl:pageItem type="PreviousPage" text="上一页"></stl:pageItem> |
          <stl:pageItem type="NextPage" text="下一页"></stl:pageItem> |
          <stl:pageItem type="LastPage" text="末页"></stl:pageItem>
        </td>
        <td align="right">
          <stl:pageItem type="CurrentPageIndex" text="当前页："></stl:pageItem>
          <stl:pageItem type="PageNavigation"></stl:pageItem>
        </td>
      </tr>
    </table>
  </stl:pageItems>
</stl:search>
```

## 自定义载入中、有搜索结果以及无搜索结果模板

下面的例子通过自定义载入中、有搜索结果以及无搜索结果模板来实现搜索页面的自定义。

```html
<stl:search>
  <stl:loading>
    <div class="alert alert-info" role="alert">
      <strong>提示!</strong> 系统正在搜索中，请稍后...
    </div>
  </stl:loading>
  <stl:yes>
    <stl:pageContents scope="All" pageNum="12">
      <stl:a target="_blank"></stl:a><br />
    </stl:pageContents>
    <br />
    <stl:pageItems>
      <table cellpadding="0" cellspacing="0" width="90%" height="40" align="center">
        <tr>
          <td align="left">
            <stl:pageItem type="FirstPage" text="首页"></stl:pageItem> |
            <stl:pageItem type="PreviousPage" text="上一页"></stl:pageItem> |
            <stl:pageItem type="NextPage" text="下一页"></stl:pageItem> |
            <stl:pageItem type="LastPage" text="末页"></stl:pageItem>
          </td>
          <td align="right">
            <stl:pageItem type="CurrentPageIndex" text="当前页："></stl:pageItem>
            <stl:pageItem type="PageNavigation"></stl:pageItem>
          </td>
        </tr>
      </table>
    </stl:pageItems>
  </stl:yes>
  <stl:no>
    <div class="alert alert-danger" role="alert">
      <strong>抱歉!</strong> 找不到和您的查询相符的项目
    </div>
  </stl:no>
</stl:search>
```
