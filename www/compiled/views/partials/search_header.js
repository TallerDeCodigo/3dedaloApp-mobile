!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["search_header"]=a({1:function(a,e,r,n,t){var i;return a.escapeExpression((i=null!=(i=r.search_term||(null!=e?e.search_term:e))?i:r.helperMissing,"function"==typeof i?i.call(null!=e?e:{},{name:"search_term",hash:{},data:t}):i))},3:function(a,e,r,n,t){return""},compiler:[7,">= 4.0.0"],main:function(a,e,r,n,t){var i;return'<header class="big daheader">\n	<a id="backBtn">\n		<i id="back" class="material-icons arrow_back"></i>\n	</a>\n	<div id="barra">\n		<i class="material-icons search invert"></i>\n		<form id="search_form" action="search_results.html" method="GET">\n			<input type="text" name="s" placeholder="Search"  value="'+(null!=(i=r["if"].call(null!=e?e:{},null!=e?e.search_term:e,{name:"if",hash:{},fn:a.program(1,t,0),inverse:a.program(3,t,0),data:t}))?i:"")+'" style="color: rgb(255, 255, 255);">\n			<input type="submit" value="" style="display:none; visibility: hidden; width: 0px; height=0px; ">\n		</form>\n	</div>\n	<a href="direct_photo.html">\n		<i id="photo" class="material-icons search photo_camera"></i>\n	</a>\n</header>'},useData:!0})}();