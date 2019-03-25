# STL elements

STL elements are wrapped in start and end angle brackets **<>** , attributes are separated by spaces, and can contain other tags as sub-labels, for example:

```html
<stl:a channelIndex="Index">Link</stl:a>
```

STL elements can be nested within each other; for example:

```html
<stl:a channelIndex="Index">
  <stl:content type="title"></stl:content>
</stl:a>
```

The STL element will eventually be parsed as an HTML tag or plain text.

## Channel tags

The channel tags contains a list of tags associated with the channel properties.

| STL element                          | Description                                                                                |
|--------------------------------------|--------------------------------------------------------------------------------------------|
| [stl:channel](../channel/)           | Display the attribute value of the specified column in the template by the stl:channel tag |
| [stl:channels](../channels/)         | Display a list of columns in the template via the stl:channels tag                         |
| [stl:pageChannels](../pageChannels/) | Display the list of paged columns in the template via the stl:pageChannels tag             |

## Content tags

The content tag contains a list of tags associated with the content properties.

| STL element                          | Description                                                                                  |
|--------------------------------------|----------------------------------------------------------------------------------------------|
| [stl:content](../content/)           | Display the attribute value of the specified content in the template via the stl:content tag |
| [stl:contents](../contents/)         | Display a list of content in the template via the stl:contents tag                           |
| [stl:pageContents](../pageContents/) | Display a list of paged content in the template via the stl:pageContents tag                 |

## Navigation tags

Navigation tags contain all the tags associated with page navigation, including links, current location, navigation, and drop-down menus.

| STL element                      | Description                                                                                                           |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| [stl:a](../a/)                   | Create a link in the template with the stl:a tag, the system will calculate the link address according to the context |
| [stl:location](../location/)     | Insert the current position of the page in the template via the stl:location tag                                      |
| [stl:navigation](../navigation/) | Display link navigation in a template via the stl:navigation tag                                                      |
| [stl:tree](../tree/)             | Display tree navigation in the template via the stl:tree tag                                                          |

## Image and media tags

The image and media tags contains all the relevant tags that relate to displaying the image and organizing the image display style.

| STL element                        | Description                                                                              |
|------------------------------------|------------------------------------------------------------------------------------------|
| [stl:image](../image/)             | Display a picture of a column or content in a template via the stl:image tag             |
| [stl:file](../file/)               | Display the file download link in the template via the stl:file tag                      |
| [stl:video](../video/)             | Display the video player in the template via the stl:video tag                           |
| [stl:audio](../audio/)             | Display and play audio files in a template with the stl:audio tag                        |
| [stl:flash Flash](../flash/)       | Get and display the Flash of the column or content in the template via the stl:flash tag |
| [stl:player](../player/)           | Play a video in a template with the stl:player tag                                       |
| [stl:focusViewer](../focusViewer/) | Display scrolling focus map in template via stl:focusViewer tag                          |

## Judgment tags

The judgment tags is used to judge the display content according to the condition, and includes a general if tag and an itemTemplate tag for the list.

| STL element                          | Description                                                                                                     |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| [stl:if](../if/)                     | Judging the display content according to the conditions in the template by the stl:if tag                       |
| [stl:itemTemplate](../itemTemplate/) | Control the display content and style of each item in the list in the template through the stl:itemTemplate tag |
| [stl:loading](../loading/)           | Create the content displayed in the load in the template via the stl:loading tag                                |
| [stl:yes](../yes/)                   | Display a successful template in the template with the stl:yes tag                                              |
| [stl:no](../no/)                     | Display the failed template in the template with the stl:no tag                                                 |

## Pagination tags

The pagination tags contains all the tags that are needed to pagination the page .

| STL element                    | Description                                                                                                                                 |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| [stl:pageItems](../pageItems/) | Insert a container for page items into the template via the stl:pageItems tag                                                               |
| [stl:pageItem](../pageItem/)   | Display page page items in the template via the stl:pageItem tag (previous page, next page, current page, page jump, page navigation, etc.) |

## SQL tags

The SQL tag is used to get the specified database information, including the display list and the tags needed to get the value.

| STL element                                 | Description                                                                                   |
|---------------------------------------------|-----------------------------------------------------------------------------------------------|
| [stl:sqlContents](../sqlContents/)          | Display the list of databases in the template via the stl:sqlContents tag                     |
| [stl:sqlContent](../sqlContent/)            | Display database values ​​in the template via the stl:sqlContent tag                              |
| [stl:queryString](../queryString/) | Define SQL query statements in the template via the stl:queryString tag                       |
| [stl:pageSqlContents](../pageSqlContents/)  | Display a list of databases that can be paged in the template via the stl:pageSqlContents tag |

## Site tags

The Site tags contains a list of tags to site properties.

| STL element            | Description                                                     |
|------------------------|-----------------------------------------------------------------|
| [stl:value](../value/) | Get the value in the template with the stl:value tag            |
| [stl:sites](../sites/) | Display the list of sites in the template via the stl:sites tag |
| [stl:site](../site/)   | Display site values ​​in the template via the stl:site tag          |

## Others

Other useful STL tags.

| STL element                    | Description                                                                                          |
|--------------------------------|------------------------------------------------------------------------------------------------------|
| [stl:action](../action/)       | Create a link in the template via the stl:action tag, and click on the link to execute the action    |
| [stl:container](../container/) | Switch the context by defining the container in the template via the stl:container tag               |
| [stl:count](../count/)         | Display statistics in the template via the stl:count tag                                             |
| [stl:dynamic](../dynamic/)     | Dynamic display in templates via the stl:dynamic tag                                                 |
| [stl:each](../each/)           | Traverse the specified list item in the template with the stl:each tag                               |
| [stl:include](../include/)     | Include another file in the template as part of the template via the stl:include tag                 |
| [stl:marquee](../marquee/)     | Create a block of content that can be scrolled without gaps in the template with the stl:marquee tag |
| [stl:printer](../printer/)     | Print functionality in the template via the stl:printer tag                                          |
| [stl:rss](../rss/)        | Generate an Rss subscription that the Rss reader can browse in the template via the stl:rss tag      |
| [stl:search](../search/)       | Display search results in a template via the stl:search tag                                          |
| [stl:select](../select/)       | Display the column or content drop-down list in the template via the stl:select tag                  |
| [stl:tabs](../tabs/)           | Display tab switching in the template via the stl:tabs tag                                           |
| [stl:tags](../tags/)           | Display content labels in templates via the stl:tags tag                                             |
| [stl:zoom](../zoom/)           | Implement text scaling in templates with the stl:zoom tag                                            |
