# Create an acquisition rule

The website to be sampled here is the news channel in the State Council website. This is a more general and practical rule.

Click on the left side of the system - `Information Collection` under `Site Plugin`. The right access interface is `Collection Rule Management`. Then click on `Add Information Collection`

![](/docs/ss/gather/assets/update/06.png)

### 1.Collection rule basic information

::: tip
The basic information includes the name of the collection rule and other collection parameter settings, as shown below:
:::


![](/docs/ss/gather/assets/update/07.png)

The name of the collection rule can take any name that you think is easy to remember. It is recommended to use the name and domain name of the target source for future management.

Collect the selected columns to collect the specific columns.

The page encoding must match the encoding of the collection site. The default is Unicode (UTF-8).

The number of collected content indicates the number of pieces to be collected. The default is 0, which means that the entire content is collected.

By default, the content image is a download image item to determine whether to download the image in the collected content to its own server, in case the image address of the other website cannot be accessed.

The cover image defaults to whether the cover image setting sets the first image in the body of the content as the cover image of the content.

Whether the default setting is collected when the content is empty is acquisition

Whether to collect the default setting when the content title is repeated is to collect

The default status of the audit status of the collected content is whether the content of the unaudited collection is directly added to the column without being reviewed.

The default setting of reverse sequence acquisition is reverse sequence. The reverse order acquisition can be kept in the same order as the collected news list. It is recommended that you select “reverse acquisition”.

### 2.collecting content list information

::: tip
The list information includes the address of the collection list and the string that must be included in the collection content address, and is used to obtain the address collection of the collected content, as shown in the following figure:
:::

![](/docs/ss/gather/assets/update/08.png)

Take the State Council's News Channel as an example, and specify the collection website “http://www.gov.cn/xinwen/yaowen.htm”.

Since the State Department's news channel does not turn pages, the rules for collecting URLs are as long as the “from the specified URL” is checked. If there is a page to be flipped, you need to check “From similar URLs” and fill in the number of pages.

![](/docs/ss/gather/assets/update/09.png)

The content address contains the content address used to filter the collection, and the system selects the address of the specified format from the list page as a link to the content page. As shown in the figure above, the system only captures http://www.gov.cn/*.htmcontent pages containing strings *representing any characters.

### 3.collecting content page information

The content page information includes information of the page to be collected, including the title, content, author, etc., as shown below:

![](/docs/ss/gather/assets/update/10.png)

Take the State Department's News Channel as an example. First enter the content page and select “View Source File” in the browser to get the code of the content page.

Find the content title in the code, then find the code before and after the title, copy it to the beginning of the content title and the end of the content title.

![](/docs/ss/gather/assets/update/11.png)


The content body, content column, content page turning and other elements are the same as the content title. After finding the corresponding code, the code before and after the code is extracted and filled in the corresponding item.

![](/docs/ss/gather/assets/update/12.png)

In addition to the default content title, body and other fields can also be collected, and other fields that need to be collected can be selected.

Need to pay attention to the content body exclusion and content Html clearance, these two can filter unwanted information, such as advertising, from the content body.

Optional items can be left blank unless necessary.

Then click Next to complete the addition of the information collection rules.

After adding the information collection rules, you need to test whether this rule works properly.


