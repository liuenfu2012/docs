# 获取站点值

### 简要描述

获取站点值，系统将根据参数计算出对应的站点值

### 请求URL

`
/api/v1/stl/site
`

### 请求方式

GET

### 请求参数说明

参数名  | 类型  | 说明
------  | ------  | ------  | ------
apiKey | 字符串 | API 密钥
siteId | 字符串 | 站点Id
siteDir | 字符串 | 站点文件夹

`/api/v1/stl/site`的其他参数与`<stl:site>`标签一致。

### 请求示例

`
GET /api/v1/stl/site?siteId=1
`

### 返回示例

`
{
  "value": {
    "id": 1,
    "siteDir": "test2",
    "siteName": "我的站点",
    "tableName": "model_Content",
    "isRoot": false,
    "parentId": 0,
    "taxis": 7,
    "attributes": {
      "charset": "utf-8",
      "pageSize": 3,
      "isCheckContentLevel": false,
      "checkContentLevel": 1,
      "isCountDownload": true,
      "isCountHits": false,
      "isCountHitsByDay": false,
      "isSaveImageInTextEditor": true,
      "isAutoPageInTextEditor": false,
      "autoPageWordNum": 1500,
      "isContentTitleBreakLine": false,
      "isAutoCheckKeywords": false,
      "photoSmallWidth": 70,
      "photoMiddleWidth": 400,
      "isWaterMark": false,
      "isImageWaterMark": false,
      "waterMarkPosition": 9,
      "waterMarkTransparency": 5,
      "waterMarkMinWidth": 200,
      "waterMarkMinHeight": 200,
      "waterMarkFormatString": "",
      "waterMarkFontName": "",
      "waterMarkFontSize": 12,
      "waterMarkImagePath": "",
      "isSeparatedWeb": false,
      "separatedWebUrl": "http://web.chinacampus.org",
      "webUrl": "/test2",
      "isSeparatedAssets": false,
      "separatedAssetsUrl": "",
      "assetsDir": "upload",
      "assetsUrl": "/test2/upload/",
      "channelFilePathRule": "/channels/{@ChannelID}.html",
      "contentFilePathRule": "/contents/{@ChannelID}/{@ContentID}.html",
      "isCreateContentIfContentChanged": true,
      "isCreateChannelIfChannelChanged": true,
      "isCreateShowPageInfo": false,
      "isCreateIe8Compatible": false,
      "isCreateBrowserNoCache": false,
      "isCreateJsIgnoreError": false,
      "isCreateWithJQuery": true,
      "isCreateDoubleClick": true,
      "createStaticMaxPage": 10,
      "isCreateStaticContentByAddDate": false,
      "createStaticContentAddDate": "0001-01-01 00:00:00",
      "isCrossSiteTransChecked": false,
      "configTemplateIsCodeMirror": true,
      "configVideoContentInsertWidth": 420,
      "configVideoContentInsertHeight": 280,
      "configExportType": "ContentExcel",
      "configExportPeriods": "0",
      "configExportDisplayAttributes": "Id,Title,LinkUrl,AddDate,Hits,GroupNameCollection,Tags,FreeReadings,FullReadingPrice,PaidReadings,PaperPrice,SubTitle,ImageUrl,VideoUrl,FileUrl,Content,Summary,Author,Source",
      "configExportIsChecked": "All",
      "configSelectImageCurrentUrl": "upload/images",
      "configSelectVideoCurrentUrl": "@/upload/videos",
      "configSelectFileCurrentUrl": "@/upload/files",
      "configUploadImageIsTitleImage": "False",
      "configUploadImageTitleImageWidth": "152",
      "configUploadImageTitleImageHeight": "109",
      "configUploadImageIsShowImageInTextEditor": "False",
      "configUploadImageIsLinkToOriginal": "False",
      "configUploadImageIsSmallImage": "False",
      "configUploadImageSmallImageWidth": "500",
      "configUploadImageSmallImageHeight": "",
      "siteSettingsCollection": "",
      "imageUploadDirectoryName": "upload/images",
      "imageUploadDateFormatString": "Month",
      "isImageUploadChangeFileName": true,
      "imageUploadTypeCollection": "gif|jpg|jpeg|bmp|png|pneg|swf",
      "imageUploadTypeMaxSize": 15360,
      "videoUploadDirectoryName": "upload/videos",
      "videoUploadDateFormatString": "Month",
      "isVideoUploadChangeFileName": true,
      "videoUploadTypeCollection": "asf|asx|avi|flv|mid|midi|mov|mp3|mp4|mpg|mpeg|ogg|ra|rm|rmb|rmvb|rp|rt|smi|swf|wav|webm|wma|wmv|viv",
      "videoUploadTypeMaxSize": 307200,
      "fileUploadDirectoryName": "upload/files",
      "fileUploadDateFormatString": "Month",
      "isFileUploadChangeFileName": true,
      "fileUploadTypeCollection": "zip,rar,7z,js,css,txt,doc,docx,ppt,pptx,xls,xlsx,pdf",
      "fileUploadTypeMaxSize": 307200
    }
  }
}
`

### 返回参数说明

参数名  | 类型  | 说明
------  | ------  | ------  | ------
value | 对象 | 根据type参数的不同，返回不同的value值，如果不传type参数，将返回整个站点对象

详细字段请参考 [站点表](https://docs.siteserver.cn/model#/siteserver_Site)

### 备注

更多返回错误代码请参考错误代码描述