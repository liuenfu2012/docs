# STL entities

STL entities are wrapped in start and end braces **{}** , attributes are separated by spaces, and cannot contain other tags as child tags; for example:

``` js
{stl:a channelIndex="Index"}
```

STL entities are usually parsed as JSON objects or plain text.

In general, most of the functionality can be implemented with STL elements, but in some cases STL elements are not suitable:

- Need to set data in the property
- Need to set data in JavaScript code

Since STL elements will eventually be parsed into HTML tags, placing HTML tags in HTML attributes or in JavaScript code will cause confusion, so in both cases you will need to use STL entities.

The attributes of the STL entity can be in English double quotes, English single quotes or no mark. For example, the following three ways are written correctly:

``` js
{stl:content type="title"}
```

``` js
{stl:content type='title'}
```

``` js
{stl:content type=title}
```

## STL entity shorthand

For convenience, STL entities can use shorthand, shorthand does not need to include the prefix stl:, and can not set properties.

### {stl.xyz}

Abbreviation for {stl:value type='xyz'}.

{stl.} represents the shorthand for the {stl:value} element, which is `{stl:value type=siteUrl}` equivalent to `{stl.siteUrl}`.

### {channel.xyz}

Abbreviation for {stl:channel type='xyz'}.

{channel.} represents the shorthand for the {stl:channel} element, which is `{stl:channel type=title}` equivalent to `{channel.title}`.

### {content.xyz}

Abbreviation for {stl:content type='xyz'}.

{content.} represents the shorthand for the {stl:content} element, which is `{stl:content type=title}` equivalent to `{content.title}`。

### {sql.xyz}

Abbreviation for {stl:sqlContent type='xyz'}.

{sql.} represents the shorthand for the {stl:sqlContent} element, which is `{stl:sqlContent type=xyz}` equivalent to `{sql.xyz}`.

## Use entity in properties

Usually getting data in HTML attributes or STL attributes usually uses entity tags, for example:

```html
<img alt="{stl:content type='summary'}"></img>
```

or

```html
<stl:a title="{stl:content type='title'}"></stl:a>
```

## Entities in JavaScript code

Objects processed by JS code are mainly pure data without formatting, so it is very important to use STL entities to return plain text or JSON objects, for example:

```javascript
<script type="text/javascript">
var arr = {stl:contents};
<script>
```

The parsed code is:

```javascript
<script type="text/javascript">
var arr = [
  {
    id: 10935,
    channelId: 1746,
    siteId: 1739,
    addUserName: "admin",
    lastEditUserName: "admin",
    writingUserName: "",
    lastEditDate: "2018-06-13 12:27:00",
    taxis: 6,
    groupNameCollection: "",
    tags: "",
    sourceId: 0,
    referenceId: 0,
    isChecked: "True",
    checkedLevel: 1,
    hits: 28,
    hitsByDay: 1,
    hitsByWeek: 28,
    hitsByMonth: 28,
    lastHitsDate: "2018-06-14 00:00:00",
    settingsXml:
      "titleformatstring=False_False_False_&translatecontenttype=Copy",
    title: "title",
    isTop: "False",
    isRecommend: "False",
    isHot: "False",
    isColor: "False",
    linkUrl: "",
    addDate: "2015-09-30 13:52:00",
    subTitle: "",
    imageUrl: "",
    videoUrl: "",
    fileUrl: "",
    content:
      "body",
    summary: "",
    author: "",
    source: "",
    titleformatstring: "False_False_False_",
    translatecontenttype: "Copy",
    navigationUrl: "/test19/contents/1746/10935.html"
  },
  ...
];
<script>
```

## STL elements and STL entities

Most STL elements have corresponding STL entities. Replace the angle brackets of the element with braces. If the closed label is removed, it is the corresponding entity. The attributes in the entity can be double quotes, single quotes or no quotes. Such as content value elements:

```html
<stl:content type="Title" wordNum="20"></stl:content>
```

Corresponding entity is

```html
{stl:content type='Title' wordNum='20'}
```
