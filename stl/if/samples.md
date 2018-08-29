# &lt;stl:if&gt; 示例

## 判断值是否为空

下面的例子判断内容副标题是否为空，如果不为空将显示带有副标题的行。

```html
<stl:if testType="SubTitle" testOperate="NotEmpty">
  <strong>副标题：</strong><stl:content type="SubTitle"></stl:content>
</stl:if>
```

解析后的 HTML 代码：

```html
<strong>副标题：</strong>stl:if 标签示例（简单）副标题
```

## 判断当前栏目名称是否为"栏目 1"或"栏目 2"

```html
<stl:if testType="ChannelName" testOperate="In" testValue="栏目1,栏目2">
  <stl:yes> <p>true</p> </stl:yes>
  <stl:no> <p>false</p> </stl:no>
</stl:if>
```

解析后的 HTML 代码：

```html
<p>true</p>
```

## 根据模板名称显示不同内容

下面的例子根据当前模板的模板名称显示不同的内容。

```html
<stl:if testType="TemplateName" testOperate="Equals" testValue="系统首页模板">
  <stl:yes>
      <li><A href="/" class="current">首 页</A></li>
  </stl:yes>
  <stl:no>
      <li>我不是首页</li>
  </stl:no>
</stl:if>
```

解析后的 HTML 代码：

```html
<li>我不是首页</li>
```

## 最新 10 天内更新的内容以红色突出显示

下面的例子显示整个站点中最新更新的 20 篇内容，并突出显示 10 天内更新的内容。

```html
<stl:contents topLevel="0" totalNum="20" order="LastEditDate" scope="All">
  <stl:if testType="LastEditDate" testOperate="LessThan" testValue="10d">
      <stl:yes>
          <li><stl:a target="_blank" style="color:#F00;"></stl:a></li>
      </stl:yes>
      <stl:no>
          <li><stl:a target="_blank"></stl:a></li>
      </stl:no>
  </stl:if>
</stl:contents>
```

## 根据用户是否登录显示不同的内容

下面的例子根据用户是否登录显示不同的内容

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
