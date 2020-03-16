# Connection String

You can use **`siteserver version`** to display the non-encrypted and the encrypted database connection string.

Run the version command in the SS CMS system root directory:

``` sh
PS C:\Windows\system32> cd C:\github\cms\cms-staging\SS CMS.Web
PS C:\github\cms\cms-staging\SS CMS.Web> siteserver version
欢迎使用 SS CMS Cli 命令行工具

SS CMS CLI 版本号: 6.9.0
当前文件夹: C:\github\cms\cms-staging\SS CMS.Web

SitServer CMS Version: 6.9.3-beta
数据库类型: SqlServer
连接字符串: Server=(local);Uid=sa;Pwd=123456;Database=cms;
连接字符串（加密）: 5TRGlFvX5U5gzX2Vi0sYmORh9DMNnA1MnHncFj259dJRN9l1tqf6dM30add0Zpd88Ni7bmNUsJ3G93HSJxIFoXqj0slash0Q0equals00equals00secret0
```

If the database connection string in Web.config is encrypted, you can use this command to retrieve the database connection string. If the database connection string in Web.config is unencrypted, you can use this command to get the encrypted connection string and set it to the Web.config.
