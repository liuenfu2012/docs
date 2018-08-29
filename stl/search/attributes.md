# &lt;stl:search&gt; 属性

## siteName

站点名称，设置后系统将只搜索对应站点的内容

## siteDir

站点文件夹，设置后系统将只搜索对应站点的内容

## siteIds

站点 Id 列表，多个站点 Id 以“,”分割，设置后系统将只搜索对应站点集合的内容

## channelIndex

栏目索引，设置后系统将只搜索对应栏目及其下级栏目的内容

## channelName

栏目名称，设置后系统将只搜索对应栏目及其下级栏目的内容

## channelIds

栏目 Id 列表，多个栏目 Id 以“,”分割，设置后系统将只搜索对应栏目集合及其下级栏目的内容

## type

title 定义搜索字段，默认为 title，可以定义多个搜索字段，如：title,content

## word

定义搜索关键词，通常不设置在模板中，系统从地址栏参数中获取

## dateAttribute

AddDate 日期搜索字段，定义 dateFrom、dateTo 或者 since 日期过滤条件的对应日期字段

## dateFrom

搜索日期开始时间

## dateTo

搜索日期结束时间

## since

搜索时间段，格式为"数字+日期符号"，日期符号有"y"、"m"、"d"及"h"，分别代表年、月、天及小时。

## pageNum

每页显示多少条内容

## isHighlight

是否关键字高亮显示

- `"true"` 高亮显示
- `"false"` 正常显示
