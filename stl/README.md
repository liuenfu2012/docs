# SiteServer STL 语言参考手册

STL 语言，全称为 SiteServer Template Language（SiteServer 模版语言），是用于 SiteServer CMS 模版使用的标签语言。

STL 语言能够通过各种方式获取站点内的数据，SiteServer CMS 通过将STL 标签解析为HTML标签，从而实现网页的静态化。

> **小提示** 页面左上角搜索框可以快速寻找对应的STL 标签。

## 内容标签

内容标签包含获取内容列表以及内容属性相关的标签。

| STL元素                            | 说明                                              |
| ---------------------------------- | ------------------------------------------------- |
| [stl:contents 内容列表](contents/) | 通过 stl:contents 标签在模板中展示内容列表        |
| [stl:content 获取内容值](content/) | 通过 stl:content 标签在模板中展示指定内容的属性值 |

## 栏目标签

栏目标签包含获取栏目列表以及栏目属性的相关标签。

| STL元素                            | 说明                                              |
| ---------------------------------- | ------------------------------------------------- |
| [stl:channels 栏目列表](channels/) | 通过 stl:channels 标签在模板中展示栏目列表        |
| [stl:channel 获取栏目值](channel/) | 通过 stl:channel 标签在模板中展示指定栏目的属性值 |

## 站点标签

站点标签包含获取网站列表以及网站属性相关的标签。

| STL元素                      | 说明                                    |
| ---------------------------- | --------------------------------------- |
| [stl:sites 站点列表](sites/) | 通过 stl:sites 标签在模板中展示站点列表 |
| [stl:site 获取站点值](site/) | 通过 stl:site 标签在模板中展示站点值    |

## 翻页标签

翻页标签包含所有涉及翻页时所需要用到的标签，包括翻页元素、栏目翻页列表、内容翻页列表等。

| STL元素                                                | 说明                                                                                 |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| [stl:pageItems 翻页项容器](pageItems/)                 | 通过 stl:pageItems 标签在模板中插入翻页项的容器，当不需要翻页时容器内的内容不展示    |
| [stl:pageItem 翻页项](pageItem/)                       | 通过 stl:pageItem 标签在模板中展示翻页项（上一页、下一页、当前页、页跳转、页导航等） |
| [stl:pageChannels 翻页栏目列表](pageChannels/)         | 通过 stl:pageChannels 标签在模板中展示翻页栏目列表                                   |
| [stl:pageContents 翻页内容列表](pageContents/)         | 通过 stl:pageContents 标签在模板中展示翻页内容列表                                   |
| [stl:pageSqlContents 翻页数据库列表](pageSqlContents/) | 通过 stl:pageSqlContents 标签在模板中展示能够翻页的数据库列表                        |

## 导航标签

导航标签包含所有与页面导航相关的标签，包括链接、当前位置、导航、以及下拉菜单等。

| STL元素                                | 说明                                                              |
| -------------------------------------- | ----------------------------------------------------------------- |
| [stl:a 获取链接](a/)                   | 通过 stl:a 标签在模板中创建链接，系统将根据所处上下文计算链接地址 |
| [stl:location 当前位置](location/)     | 通过 stl:location 标签在模板中插入页面的当前位置                  |
| [stl:navigation 展示导航](navigation/) | 通过 stl:navigation 标签在模板中展示链接导航                      |
| [stl:tree 树状导航](tree/)             | 通过 stl:tree 标签在模板中展示树状导航                            |

## 图片及多媒体标签

图片标签包含所有涉及到展示图片以及组织图片展示样式的相关标签。

| STL元素                        | 说明                                                   |
| ------------------------------ | ------------------------------------------------------ |
| [stl:image 展示图片](image/)   | 通过 stl:image 标签在模板中展示栏目或内容的图片        |
| [stl:file 文件下载链接](file/) | 通过 stl:file 标签在模板中展示文件下载链接             |
| [stl:flash 展示Flash](flash/)  | 通过 stl:flash 标签在模板中获取并展示栏目或内容的Flash |
| [stl:player 播放视频](player/) | 通过 stl:player 标签在模板中播放视频                   |
| [stl:video 播放视频](video/)   | 通过 stl:video 标签在模板中展示视频播放器              |
| [stl:audio 播放音频](audio/)   | 通过 stl:audio 标签在模板中展示并播放音频文件          |

## 判断标签

判断标签用于根据条件判断展示内容，包含通用的if标签以及用于列表的itemTemplate标签。

| STL元素                                  | 说明                                                               |
| ---------------------------------------- | ------------------------------------------------------------------ |
| [stl:if 条件判断](if/)                   | 通过 stl:if 标签在模板中根据条件判断展示内容                       |
| [stl:itemTemplate 列表项](itemTemplate/) | 通过 stl:itemTemplate 标签在模板中控制列表中每一项的展示内容及样式 |
| [stl:loading 载入模板](loading/)         | 通过 stl:loading 标签在模板中创建载入中展示的内容                  |
| [stl:yes 成功模板](yes/)                 | 通过 stl:yes 标签在模板中展示成功模板                              |
| [stl:no 失败模板](no/)                   | 通过 stl:no 标签在模板中展示失败模板                               |

## 数据库标签

数据库标签用于获取指定数据库信息，包括展示列表以及获取值所需要的标签。

| STL元素                                     | 说明                                             |
| ------------------------------------------- | ------------------------------------------------ |
| [stl:sqlContents 数据库列表](sqlContents/)  | 通过 stl:sqlContents 标签在模板中展示数据库列表  |
| [stl:sqlContent 数据库值](sqlContent/)      | 通过 stl:sqlContent 标签在模板中展示数据库值     |
| [stl:queryString SQL查询语句](queryString/) | 通过 stl:queryString 标签在模板中定义SQL查询语句 |

## 其他标签

其他常用的STL 标签。

| STL元素                            | 说明                                                             |
| ---------------------------------- | ---------------------------------------------------------------- |
| [stl:search 搜索](search/)         | 通过 stl:search 标签在模板中展示搜索结果                         |
| [stl:include 包含文件](include/)   | 通过 stl:include 标签在模板中包含另一个文件，作为模板的一部分    |
| [stl:dynamic 动态展示](dynamic/)   | 通过 stl:dynamic 标签在模板中实现动态展示功能                    |
| [stl:each 列表项循环](each/)       | 通过 stl:each 标签在模板中遍历指定的列表项                       |
| [stl:value 获取值](value/)         | 通过 stl:value 标签在模板中获取值                                |
| [stl:count 展示数值](count/)       | 通过 stl:count 标签在模板中展示统计数字                          |
| [stl:marquee 无间隔滚动](marquee/) | 通过 stl:marquee 标签在模板中创建一个能够无间隔滚动的内容块      |
| [stl:select 下拉列表](select/)     | 通过 stl:select 标签在模板中展示栏目或内容下拉列表               |
| [stl:zoom 文字缩放](zoom/)         | 通过 stl:zoom 标签在模板中实现文字缩放功能                       |
| [stl:printer 打印](printer/)       | 通过 stl:printer 标签在模板中实现打印功能                        |
| [stl:action 执行动作](action/)     | 通过 stl:action 标签在模板中创建链接，点击链接后将执行相应的动作 |
| [stl:tags 标签](tags/)             | 通过 stl:tags 标签在模板中展示内容标签                           |
| [stl:rss Rss订阅](rss/)            | 通过 stl:rss 标签在模板中生成Rss阅读器能够浏览的Rss订阅          |
| [stl:container 容器](container/)   | 通过 stl:container 标签在模板中定义容器，切换上下文              |