# &lt;stl:action&gt; 执行动作

```html
<stl:action
  type="动作类型"
  returnUrl="动作完成后的返回地址">
</stl:action>
```

## 使用说明

通过 &lt;stl:action&gt; 标签在模板中创建链接，点击链接后将执行相应的动作

标签 `<stl:action>` 所执行的动作由属性 type 指定：

Login 显示登录链接，登录完成后转向到属性 returnUrl 指定的地址中。

Logout 显示退出登录链接，退出登录后转向到属性 returnUrl 指定的地址中。

Register 显示注册链接，注册成功后转向到属性 returnUrl 指定的地址中。

AddFavorite 执行将站点添加到收藏夹功能。

SetHomePage 执行将页面设置为首页功能。

Translate 执行整个站点的简体/繁体文字转换功能。

Close 执行关闭本页功能。

stl:action 与 stl:a 标签类似，系统将会把此标签解析为 `<a>` 标签。
可以把文字或图片作为 stl:action 标签的子标签。

`<stl:action>`标签对应的实体为{stl:action}。

## 属性

| 属性 | 说明     |
| ---- | -------- |
| type | 动作类型 |