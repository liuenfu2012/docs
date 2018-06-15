# REST API 介绍

通过一个易于使用的HTTP REST API访问 SiteServer CMS 站点的数据。

## 关于 REST API

SiteServer REST API 为 SiteServer CMS 提供了一个基于HTTP的API调用，允许开发者通过发送和接收JSON对象来远程与站点进行交互。JSON是一种开放的标准数据格式，它是轻量级的，而且是人类可读的。

当向API发送内容或请求时，响应将以JSON形式返回，这使开发人员能够从客户端JavaScript或外部应用程序创建、读取和更新 SiteServer CMS 内容，甚至可以使用C#以外的语言编写。

## 为什么使用 REST API ?

SiteServer REST API 提供了一组易于使用的HTTP端点，可以让您以简单的JSON格式访问站点的数据，包括站点、栏目、内容等等。检索或更新数据就像发送HTTP请求一样简单。

SiteServer REST API 使开发者比以往更容易获取站点数据，通过使用REST API，您可以更容易地构造您想要从SiteServer中获取数据的方式。使用REST API可以极大地简化AJAX调用，使您能够更少地花时间访问所需的数据，并花更多时间创建更好的用户体验。

你可以创建一个应用来为 SiteServer 提供一个全新的管理界面，或创造一个全新的交互式前端体验。你甚至不需要在C#语言中编写应用程序，任何能够生成HTTP请求和解释JSON的编程语言都可以通过REST API与SiteServer交互。

## 如何访问 REST API ?

SiteServer REST API 通过URL地址提供访问接口，为了测试是否能够访问 SiteServer REST API，你可以简单地用浏览器打开地址：

[http://example.com/api/v1/ping](http://example.com/api/v1/ping)（需要将example.com替换为你的域名）

如果请求成功，SiteServer REST API 将从服务器返回字符串 pong。