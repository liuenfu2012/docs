# Include files

Include files are used to create headers, footers, or elements that can be reused across multiple pages.

The [&lt;stl:include&gt;](../include/) tag gets all the text/code/tags that exist in the specified file and copies them into a file that uses the include statement.

Include files are useful if you need to reference the same STL, HTML, or text on multiple pages of your site.

Included files save a lot of work, which means you can create standard headers, footers, or menu files for all pages. Then, when the header needs to be updated, you only need to update the header include file.

It's important to note that once the content in the include file has changed, all pages need to be generated to reflect the changes to the site.

### Example

Suppose we have a standard footer file called "footer.html" that is stored in the include folder in the root of the site, like this:

```html
<p>Copyright © 2006-2018 {stl.siteName}</p>
```

To reference this footer file in a template, use the include statement:

```html
<html>
<body>

<h1>Welcome!</h1>
<p>Content</p>

<stl:include file="/include/footer.html"></stl:include>

</body>
</html>
```
