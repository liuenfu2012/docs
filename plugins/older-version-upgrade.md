# 老版本升级

可以通过 SiteServer CLI 命令行将老版本系统升级至最新版本。



升级命令当前支持的版本包括：

- `SiteServer CMS 3.6` 版本（3.6、3.6.1、3.6.2、3.6.3、3.6.4）升级至最新版本
- `SiteServer CMS 4.0` 版本升级至最新版本
- `SiteServer CMS 4.1` 版本升级至最新版本
- `SiteServer CMS 5.0` 版本升级至最新版本

所有版本的升级方式基本一致，下面我们以`SiteServer CMS 4.1` 版本为例说明升级命令的使用方式。

::: tip
SiteServer CMS 6.0 之后的版本均支持在线升级，此文档仅针对 6.0 之前版本。
:::

## 第一步：运行数据库备份命令

老版本升级前需要首先使用数据库备份命令 **`siteserver backup`** 将老版本的数据库备份至文件夹中，找到 SiteServer CMS 系统所在文件夹：

![](/assets/update/01.png)

打开Web.config，可以看到当前系统使用的数据库信息：

``` xml
<add key="DatabaseType" value="SqlServer" />
<add key="ConnectionString" value="Server=(local);Uid=sa;Pwd=123456;Database=cms_4.1;" />
```

将命令行切换到此文件夹，并运行备份命令将数据库数据备份至backup文件夹：

``` sh
siteserver backup -d backup
```

备份完成后可以看到文件夹中出现backup文件夹：

![](/assets/update/04.png)

## 第二步：运行系统升级命令

接下来我们需要使用系统升级命令 **`siteserver update`** 将老版本数据结构以及数据转换为新版本的数据结构及数据。

升级命令将把备份文件中存储的数据结构改为最新版本的数据结构，升级完成后将生成新的文件夹 **update**，用于恢复命令使用。

将命令行切换到系统根目录，运行升级命令并指定backup文件夹：

``` sh
siteserver update -d backup
```

注意，系统升级命令仅实现将备份数据文件转换为新的数据文件，命令不会对数据库进行操作。

系统升级命令执行完毕后，系统根目录将出现一个名为update的文件夹，此文件夹中存储了升级之后的数据文件：

![](/assets/update/06.png)

## 第三步：搭建新版本环境

通过备份以及升级命令，我们已将新版本系统所需要的数据准备好了，接下来我们需要为新版本准备运行环境。

首先，我们下载最新版本的 SiteServer CMS 系统并将新系统存放到`cms_new`文件夹中：

![](/assets/update/08.png)

然后，我们为新版本创建一个空的数据库（新版本数据库类型可以与老版本不一致），在此，我们新建了一个名为`cms_new`的数据库。

接下来，我们修改Web.config文件，将数据库信息存放进去：

``` xml
<add key="DatabaseType" value="SqlServer" />
<add key="ConnectionString" value="Server=(local);Uid=sa;Pwd=123456;Database=cms_new;" />
```

最后，我们新建IIS站点，指向此文件夹，同时给文件夹添加`NETWORK SERVICE`以及`IIS_IUSRS`账户权限。

完成以上步骤后，新版本系统的环境便全部搭建完成。

## 第四步：恢复数据

我们需要使用数据库恢复命令 **`siteserver resore`** 将老版本的数据恢复至新版本中。

进入老版本文件夹，将update文件夹从老版本根目录复制到新版本的根目录：

![](/assets/update/11.png)

将命令行切换到新版本系统的根目录，运行恢复命令（注意，恢复命令需要指定-d 参数，从 update 文件夹中恢复）：

``` sh
siteserver restore -d update
```

可以看到命令将逐个核对数据并将数据插入至新版本数据库中。

命令完成后，便可以打开浏览器访问新系统后台了：

![](/assets/update/13.png)

可以看到，老版本的数据已经转移到了新版本。

最后，将老版本系统文件夹中的站点文件复制到新版本系统文件夹中，切换域名，完成版本升级。