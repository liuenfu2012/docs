### 问题

系统报错：

数据库的事务日志已满

### 答案

系统出现事务日志已满通常是由于SQL SERVER 数据库的日志存储空间不足导致的。

如果是6.0之前的版本，在浏览器中访问地址：`/siteserver/settings/pageDbLogDelete.aspx`

如果是6.0以及之后的版本，在浏览器中访问地址：`/siteserver/settings/pageUtilityDbLogDelete.aspx`

进入清除数据库日志界面：

![](assets/database-log-full/01.png)

点击`清空数据库日志`按钮，之后再次进入系统即可。