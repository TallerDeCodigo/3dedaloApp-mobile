!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["file_map"]=a({1:function(a,e,n,r,t){var s;return null!=(s=a.invokePartial(r.sidemenu_logged,null!=e?e.me:e,{name:"sidemenu_logged",data:t,indent:"	",helpers:n,partials:r,decorators:a.decorators}))?s:""},3:function(a,e,n,r,t){var s;return null!=(s=a.invokePartial(r.sidemenu,e,{name:"sidemenu",data:t,indent:"	",helpers:n,partials:r,decorators:a.decorators}))?s:""},compiler:[7,">= 4.0.0"],main:function(a,e,n,r,t){var s;return'<div id="content" class="map">\n'+(null!=(s=a.invokePartial(r.history_header,e,{name:"history_header",data:t,indent:"	",helpers:n,partials:r,decorators:a.decorators}))?s:"")+'	<div id="no-cat" class="pages not_that_much">\n		<section>\n    		<div id="map"></div>\n    		<section id="insert_info" class="insert_info">\n    			\n    		</section>\n    	</section>\n	</div>\n'+(null!=(s=a.invokePartial(r.footer,e,{name:"footer",data:t,indent:"	",helpers:n,partials:r,decorators:a.decorators}))?s:"")+"</div>\n"+(null!=(s=a.invokePartial(r.dom_assets,e,{name:"dom_assets",data:t,helpers:n,partials:r,decorators:a.decorators}))?s:"")+(null!=(s=n["if"].call(null!=e?e:{},null!=e?e.logged_user:e,{name:"if",hash:{},fn:a.program(1,t,0),inverse:a.program(3,t,0),data:t}))?s:"")},usePartial:!0,useData:!0})}();