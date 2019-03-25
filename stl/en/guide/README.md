# Introduction

::: tip
The **Category** or **Index** drop down menu at the top right of the page can quickly locate the reference.
:::

The STL language, or STL tag, is called the SiteServer Template Language (SiteServer Template Language) and is the template tag language used by the SiteServer CMS system.

You can think of the STL language as a placeholder with specific meanings. These placeholders mark the website data and functions that need to be retrieved and displayed through tags (elements and entities); in the process of generating static pages, SiteServer The CMS system parses these placeholders through the STL parsing engine, retrieves the corresponding data from the site, and finally replaces the placeholder with an HTML tag with data or functionality and generates a corresponding static page file in the server.

The core of the SiteServer CMS system consists of two parts: content management and content analysis. The STL language is a bridge between content management and content analysis. It finally parses various dynamic data managed by the background into static pages that users can access.

In addition to parsing the dynamic data in the background into a static page in the foreground, the STL language can also implement a series of functions such as function interaction, dynamic display, data statistics, database parsing, etc. In addition to the STL tags that come with the SiteServer CMS system, various plug-ins also have Your own STL tags are used to implement different functions.

## STL language rules

Like the HTML language, the STL language is a standard universal markup language that uses syntax and rules consistent with the HTML language.

The STL language is not complicated, but powerful. The main rules are as follows:

- **Tags are case insensitive**

STL Tags are case-insensitive, like HTML Tags, `<stl:a>` and `<STL:A>` is the same.

- **Attribute values are case sensitive**

STL Tags attribute values are case-sensitive, for example `<stl:a channelIndex="News">` and `<stl:a channelIndex="NEWS">` is different.

- **Closing tags can be omitted**

Like HTML, the STL can omit closing tags in the absence of child tags. For example `<stl:value></stl:value>` and `<stl:value />` is the same.

- **Tags can be nested**

Like HTML, STL tags can be nested inside each other, placing one or more STL tags inside other STL tags. For example: `<stl:a><stl:content type="title"></stl:content></stl:a>`.

## Elements and entities

STL tags from the elements and entities, elements are angle brackets **`<>`** as a marker, the entity braces **`{}`** as a marker.

For example, the display content title can be an STL element: `<stl:content type="title"></stl:content>` it can also be an STL entity: `{stl:content type="title"}` or a shorthand for a content entity: `{content.title}`.

The biggest difference between STL elements and STL entities is that elements can nest sub-tags and entities cannot nest sub-tags. For example, link tags `<stl:a channelIndex="News">News</stl:a>` (which will be parsed into HTML A tags) cannot be represented by entities `{stl:a channelIndex="News"}` (which will be parsed into strings).

In the template, you can use elements or entities. Usually, STL elements are used when they are used independently. STL entities are used when embedding tag attributes. For example, when used independently `<stl:content type="summary"></stl:content>` , you can use: `<stl:a title="{stl:content type=summary}">`.

The attribute values ​​of STL tags are identified by double quotes. For example: `<stl:content type="title"></stl:content>` The attributes of STL entities can use double quotes, single quotes or no mark, such as: `{stl:content type="title"}`, `{stl:content type='title'}` or `{stl:content type=title}` both are correct.

## Address wildcard

In the STL tag, the address is stored and read using wildcard characters ("~") and ("@"). You can use the wildcard character ("~") to indicate the root directory of the application, using wildcard characters ("@"). To represent the domain name of the current site, without having to hardcode the address to the absolute address of the file.

For example, you can use the `<stl:a href="~/index.html">Root</stl:a>` generated index.html file to point to the primary site link, use `<stl:a href="@/index.html">Site</stl:a>` to generate a link pointing to the current site of the index.html file.

## Plugins

The STL Language Reference Manual only lists the SiteServer CMS system's own label, and does not include the label usage instructions for the specific plug-in.

Please refer to the corresponding plugin documentation for how to use the plugin related tags.
