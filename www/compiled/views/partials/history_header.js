!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["history_header"]=a({1:function(a,e,n,l,r){var i;return'		<img id="account1" src="'+a.escapeExpression(a.lambda(null!=(i=null!=e?e.me:e)?i.profile_pic:i,e))+'" class="profile_pic round">\n'},3:function(a,e,n,l,r){return'		<i id="account1" class="material-icons account_circle"></i>\n'},compiler:[7,">= 4.0.0"],main:function(a,e,n,l,r){var i,t,c=null!=e?e:{};return'<header class="daheader">\n	<a href="#" data-rel="back" id="backBtn" >\n		<i id="back" class="material-icons arrow_back"></i>\n	</a>\n	<p>'+a.escapeExpression((t=null!=(t=n.header_title||(null!=e?e.header_title:e))?t:n.helperMissing,"function"==typeof t?t.call(c,{name:"header_title",hash:{},data:r}):t))+"</p>\n"+(null!=(i=n["if"].call(c,null!=e?e.logged_user:e,{name:"if",hash:{},fn:a.program(1,r,0),inverse:a.program(3,r,0),data:r}))?i:"")+"</header>"},useData:!0})}();