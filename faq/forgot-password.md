### 问题

忘记管理员帐号密码了怎么办？

### 答案

打开数据库 **siteserver_Administrator** 表，把Password字段改成明文密码，把PasswordFormat字段值改成Clear，如下图所示：

![](/assets/100.jpeg)

保存好刚才的修改，然后再通过浏览器打开登录后台，输入用户名和刚才的明文密码即可进入后台了。