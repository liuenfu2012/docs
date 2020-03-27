# Glossary

You may encounter some unfamiliar concepts in the document. This section lists the common terms in the document for easy reference, learning, and development.

## Site

A site, that is, a website. In SS CMS, a site is a website, which includes the homepage, sections, content, templates, images, CSS styles, JS scripts, and finally generated static pages.

SS CMS is a set of station group management system, that is, multiple sites can be uniformly managed in the background. Unified management is not simply putting multiple websites in one background, but administrators who need to assign different management rights to different sites, and each site is both independent and unified.

![](/docs/guide/images/getting-started/glossary/site-structure.png)

The system will create a folder for each site to store site files. The site can provide external access through a unified domain name, or an independent access domain name can be set for each site.

## Channel

Channels are also called channels or navigation. SS CMS organizes and manages content through channels. When adding content in the background, you must add the content under a specific column. Through the channels, the system can manage the content of a website in categories and set administrator permissions.

If a website is likened to a large leafy tree, the channels of the website are the branches of the tree, and the content of the website is the leaves on the branches. It can be seen that the channels of the website are the skeleton of the website. We usually call all the channels of the entire website "channels structure". As shown below:

![](/docs/guide/images/getting-started/glossary/channel-structure.png)

Website sections can be divided into parent sections and child sections. If necessary, they can also be divided down one level at a time. Each section can create its own sub-sections. In SS CMS, the "Homepage" is the highest-level column. You can create an unlimited number of channels under the "Homepage" column.

![](/docs/guide/images/getting-started/glossary/channel.jpg)

## Content

Content is all structured data, including articles, news, merchandise, advertising, recruitment, etc., which are all called content in SS CMS.

![](/docs/guide/images/getting-started/glossary/content.jpg)

The content and display of SS CMS are separated, that is to say, the content management and the content display style are independent and do not affect each other. When adding or modifying content, you do not need to consider the style. Similarly, when adding or modifying the template, you do not need to consider the content Therefore, only the content itself is responsible for the content maintenance, and only the style itself is responsible for the style maintenance.

## Template

A template is a technology that is responsible for organizing the content managed by the CMS back-end according to a certain expression to form a front-end page. Organized according to a certain form of expression. This is the content of the template. The template determines the effect of the background content displayed on the front page. Since pages are generally divided into website homepages, section pages, content pages, and single pages, the same template also corresponds to the homepage template, section template, content template, and single page template.

### Template's role

The functions of the template are:

+ Decide which background data is displayed on the front page;
+ Decide the style and style of the front page;
+ Using the same template for multiple pieces of content can generate multiple static pages with similar expressions. If you need to adjust the form of the page, you only need to adjust the template uniformly.

Take the content template as an example, suppose there are two pieces of content under a column in the background, as shown below:

![](/docs/guide/images/getting-started/glossary/template-content.jpg)

These two articles use the same content template, and the two front-end pages generated are as follows:

![](/docs/guide/images/getting-started/glossary/template-page1.jpg)

![](/docs/guide/images/getting-started/glossary/template-page2.jpg)

The above two front-end content pages are the same except for the title and content of the article. This is the function of the template, which organizes the background content in a certain expression form to form the front page.

### Template sample

There is no difference between templates and static pages (Html), that is, STL tag language is mixed in Html. As shown below:

![](/docs/guide/images/getting-started/glossary/template-editor.jpg)

## STL language

The STL language is called SS CMS Template Language. The SS CMS parsing engine will be responsible for converting the tags corresponding to the STL language into HTML tags.

The STL language can flexibly call various data managed by the SS CMS background without the need for a program developer, parse it into HTML, and finally generate a corresponding static page file.

The STL language is a special language of the SS CMS system. Like the HTML language, the STL language is a standard generalized markup language (SGML), which uses the same syntax and rules as the HTML language.

The STL template language is not complicated, but powerful, and its main features are as follows:

+ Simple: STL language version upgrade adopts superset method, which is more flexible and convenient.
+ Extensible: The extensive application of the STL language brings enhanced functions and requirements for adding identifiers. The STL language adopts subclass elements to ensure system expansion.
+ Easy to learn: Consistency with the HTML language rules ensures that the STL language is easy to learn and easy to use.

## Page

Pages, also called static pages, are web pages generated by the SS CMS system through templates and provided to users. Pages are generally divided into website homepages, section pages, content pages, and function pages (function pages are also called single pages, such as search, login, questionnaires, and form submissions, etc.)

### Home page

The homepage is the first page we see when we open a website (some websites will have a transition page, and we will not enter the homepage until after the display). The following figure shows a typical website homepage:

![](/docs/guide/images/getting-started/glossary/page-index.jpg)

### Channel pages

When you click on a specific section, you get to the section page. The following figure shows a typical news section list page:

![](/docs/guide/images/getting-started/glossary/page-channel.jpg)

### Content pages

When you click on a specific content, you enter the content page. The following figure shows a typical news content page:

![](/docs/guide/images/getting-started/glossary/page-content.jpg)

### File pages

In addition to the homepage, section pages, and content pages, there is a special page concept in SS CMS called "single page". This page is usually used to implement a specific function, such as search, questionnaire, form submission, Users log in and register, etc., so they are also called feature pages. These pages have nothing to do with any specific section. The following picture shows a user registration page is a typical single page (or feature page):

![](/docs/guide/images/getting-started/glossary/page-file.jpg)

## Plugin

The SS CMS plug-in is a code package that extends the core functions of the SS CMS product. The SS CMS plug-in consists of .NET code and other files (such as images, CSS, and JavaScript). By making your own plug-in, you can extend SS CMS and build additional features on top of what SS CMS already provides.

![](/docs/guide/images/getting-started/glossary/plugin.jpg)

SS CMS is not just a simple website management platform, but also an extremely powerful CMS content management platform with unlimited expansion capabilities. The unlimited scalability of SS CMS is achieved through the plug-in mechanism. With the template and plug-in mechanism of SS CMS, you can configure SS CMS to almost any type of site.

Because all the functions of the plug-in are developed through flexible modules and custom configurations, it can be said that through the plug-in you can implement any function you want to implement in the site. The only limitation of the plug-in is your imagination. The possibilities are endless!

For example, you can write a plug-in to control the content model of the corresponding column and submit and display content articles with custom fields; or you can write a plug-in to create a full-featured ticketing system with SMS notifications and support for third-party payment.