!function(){var t=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["search_header"]=t({1:function(t,a,e,n,r){var i;return t.escapeExpression((i=null!=(i=e.search_term||(null!=a?a.search_term:a))?i:e.helperMissing,"function"==typeof i?i.call(null!=a?a:{},{name:"search_term",hash:{},data:r}):i))},3:function(t,a,e,n,r){return""},compiler:[7,">= 4.0.0"],main:function(t,a,e,n,r){var i;return'<header class="big daheader">\n\t<a id="backBtn">\n\t\t<i id="back" class="material-icons arrow_back"></i>\n\t</a>\n\t<div id="barra">\n\t\t<i class="material-icons search invert"></i>\n\t\t<form id="search_form" action="search_results.html" method="GET">\n\t\t\t<input type="text" name="s" placeholder="Search"  value="'+(null!=(i=e["if"].call(null!=a?a:{},null!=a?a.search_term:a,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.program(3,r,0),data:r}))?i:"")+'" style="color: rgb(255, 255, 255);">\n\t\t\t<input type="submit" value="" style="display:none; visibility: hidden; width: 0px; height=0px; ">\n\t\t</form>\n\t</div>\n\t<a id="photo-btn" href="direct_photo.html">\n\t\t<i id="photo" class="material-icons search photo_camera"></i>\n\t</a>\n</header>'},useData:!0})}();