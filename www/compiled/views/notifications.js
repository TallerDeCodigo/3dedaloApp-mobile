!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["notifications"]=a({1:function(a,n,e,t,i){var o;return null!=(o=e.each.call(null!=n?n:{},null!=(o=null!=n?n.notifications:n)?o.pool:o,{name:"each",hash:{},fn:a.program(2,i,0),inverse:a.noop,data:i}))?o:""},2:function(a,n,e,t,i){return'				<div class="notifier"><div></div><p><b>Lorem ipsum dolor</b> sit amet, consectetur adipiscing elit. Feugiat ligula.</p></div>\n'},4:function(a,n,e,t,i){return'			<p class="message">You don\'t have new notifications</p>\n'},compiler:[7,">= 4.0.0"],main:function(a,n,e,t,i){var o;return'<div id="content" class="notif">\n'+(null!=(o=a.invokePartial(t.history_header,n,{name:"history_header",data:i,indent:"	",helpers:e,partials:t,decorators:a.decorators}))?o:"")+"\n	<section>\n"+(null!=(o=e["if"].call(null!=n?n:{},null!=(o=null!=n?n.notifications:n)?o.count:o,{name:"if",hash:{},fn:a.program(1,i,0),inverse:a.program(4,i,0),data:i}))?o:"")+"	</section>\n\n"+(null!=(o=a.invokePartial(t.dom_assets,n,{name:"dom_assets",data:i,indent:"	",helpers:e,partials:t,decorators:a.decorators}))?o:"")+(null!=(o=a.invokePartial(t.footer,n,{name:"footer",data:i,indent:"	",helpers:e,partials:t,decorators:a.decorators}))?o:"")+"</div>"},usePartial:!0,useData:!0})}();