function htmlEscape(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

$('.bs-docs-example').each(function(){
  var html = $(this).html();
  html = html.replace('\n','');
  $(this).nextAll('.stlparsed').html(htmlEscape(html));
});

window.prettyPrint && prettyPrint();