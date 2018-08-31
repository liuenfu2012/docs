# &lt;stl:if&gt; 示例

## 判断值是否为空

下面的例子判断内容副标题是否为空，如果不为空将展示带有副标题的行。

```html
<stl:if type="SubTitle" op="NotEmpty">
  <strong>副标题：</strong><stl:content type="SubTitle"></stl:content>
</stl:if>
```

## 判断当前栏目名称是否为"栏目 1"或"栏目 2"

```html
<stl:if type="ChannelName" op="In" value="栏目1,栏目2">
  <stl:yes> <p>true</p> </stl:yes>
  <stl:no> <p>false</p> </stl:no>
</stl:if>
```

## 根据模板类型展示不同内容

下面的例子判断当前模板是不是内容模板。

```html
<stl:if type="TemplateType" op="Equals" value="ContentTemplate">
  <stl:yes>
      这是内容页面
  </stl:yes>
  <stl:no>
      这不是内容页面
  </stl:no>
</stl:if>
```

## 根据模板名称展示不同内容

下面的例子根据当前模板的模板名称展示不同的内容。

```html
<stl:if type="TemplateName" op="Equals" value="系统首页模板">
  <stl:yes>
      <li><A href="/" class="current">首 页</A></li>
  </stl:yes>
  <stl:no>
      <li>我不是首页</li>
  </stl:no>
</stl:if>
```

## 最新 10 天内更新的内容以红色突出展示

下面的例子展示整个站点中最新更新的 20 篇内容，并突出展示 10 天内更新的内容。

```html
<stl:contents topLevel="0" totalNum="20" order="LastEditDate" scope="All">
  <stl:if type="LastEditDate" op="LessThan" value="10d">
      <stl:yes>
          <li><stl:a target="_blank" style="color:#F00;"></stl:a></li>
      </stl:yes>
      <stl:no>
          <li><stl:a target="_blank"></stl:a></li>
      </stl:no>
  </stl:if>
</stl:contents>
```

## 根据用户是否登录展示不同的内容

下面的例子根据用户是否登录展示不同的内容

```html
<stl:if type="IsUserLoggin">
    <stl:yes>
        欢迎"{user.displayName}"
        <stl:a href="{stl.HomeUrl}">用户中心</stl:a>
        <stl:a href="{stl.LogoutUrl}">退出</stl:a>
    </stl:yes>
    <stl:no>
        <stl:a href="{stl.LoginUrl}">登陆</stl:a>
        <stl:a href="{stl.RegisterUrl}">注册</stl:a>
    </stl:no>
</stl:if>
```
