# &lt;stl:if&gt; 属性

## type

测试类型

- `"IsUserLoggin"` 用户是否已登录
- `"IsAdministratorLoggin"` 管理员是否已登录
- `"IsUserOrAdministratorLoggin"` 用户或管理员是否已登录
- `"UserGroup"` 用户组
- `"ChannelName"` 栏目名称
- `"ChannelIndex"` 栏目索引
- `"TemplateName"` 模板名称
- `"TemplateType"` 模板类型，可能的 value 值：
  - `"IndexPageTemplate"` 首页模板
  - `"ChannelTemplate"` 栏目模板
  - `"ContentTemplate"` 内容模板
  - `"FileTemplate"` 单页模板
- `"TopLevel"` 栏目级别
- `"UpChannel"` 上级栏目
- `"UpChannelOrSelf"` 当前栏目或上级栏目
- `"GroupChannel"` 栏目组名称
- `"GroupContent"` 内容组名称
- `"IsTop"` 内容属性为置顶
- `"IsRecommend"` 内容属性为推荐
- `"IsHot"` 内容属性为热点
- `"IsColor"` 内容属性为醒目
- `"CountOfContents"` 内容数
- `"CountOfImageContents"` 图片内容数
- `"CountOfChannels"` 子栏目数
- `"AddDate"` 添加时间
- `"LastEditDate"` 最后编辑时间（仅用于判断内容）
- `"ItemIndex"` 当前项序号
- `"OddItem"` 是否为奇数项
- `"自定义字符串"` 栏目或内容的字段名称

## operate

测试操作

- `"Empty"` 值为空
- `"NotEmpty"` 值不为空
- `"Equals"` 值等于
- `"NotEquals"` 值不等于
- `"GreatThan"` 值大于
- `"LessThan"` 值小于
- `"In"` 值属于
- `"NotIn"` 值不属于

## value

测试值

## context

所处上下文

- `"Content"` 内容
- `"Channel"` 栏目
- `"SqlContent"` 获取数据库数据
