!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["dashboard"]=a({1:function(a,n,l,e,t){var r;return(null!=(r=l.each.call(null!=n?n:{},null!=(r=null!=(r=null!=n?n.data:n)?r.categories:r)?r.pool:r,{name:"each",hash:{},fn:a.program(2,t,0),inverse:a.noop,data:t}))?r:"")+"\t\t</div>\n"},2:function(a,n,l,e,t){var r,o,s=null!=n?n:{},i=l.helperMissing,u="function",c=a.escapeExpression;return'\t\t\t\t<a class="'+(null!=(r=l["if"].call(s,null!=n?n.followed:n,{name:"if",hash:{},fn:a.program(3,t,0),inverse:a.program(5,t,0),data:t}))?r:"")+' cat-choose" data-id="'+c((o=null!=(o=l.ID||(null!=n?n.ID:n))?o:i,typeof o===u?o.call(s,{name:"ID",hash:{},data:t}):o))+'" href="#">'+c((o=null!=(o=l.name||(null!=n?n.name:n))?o:i,typeof o===u?o.call(s,{name:"name",hash:{},data:t}):o))+"</a>\n"},3:function(a,n,l,e,t){return" choosed unfollow_category "},5:function(a,n,l,e,t){return" follow_category "},7:function(a,n,l,e,t){return'\t\t\t<p class="message">Sorry, no categories</p>\n\t\t</div>\n'},9:function(a,n,l,e,t){var r;return(null!=(r=l.each.call(null!=n?n:{},null!=(r=null!=(r=null!=n?n.data:n)?r.makers:r)?r.pool:r,{name:"each",hash:{},fn:a.program(10,t,0),inverse:a.noop,data:t}))?r:"")+"\t\t</div>\n"},10:function(a,n,l,e,t){var r,o,s=null!=n?n:{};return'\t\t\t\t\t<a class="usuario '+(null!=(r=l["if"].call(s,null!=n?n.followed:n,{name:"if",hash:{},fn:a.program(11,t,0),inverse:a.program(13,t,0),data:t}))?r:"")+'" data-id="'+a.escapeExpression((o=null!=(o=l.ID||(null!=n?n.ID:n))?o:l.helperMissing,"function"==typeof o?o.call(s,{name:"ID",hash:{},data:t}):o))+'"><img src="'+(null!=(r=l["if"].call(s,null!=n?n.profile_pic:n,{name:"if",hash:{},fn:a.program(15,t,0),inverse:a.program(17,t,0),data:t}))?r:"")+'"></a>\n'},11:function(a,n,l,e,t){return" following unfollow_user "},13:function(a,n,l,e,t){return" follow_user "},15:function(a,n,l,e,t){var r;return a.escapeExpression((r=null!=(r=l.profile_pic||(null!=n?n.profile_pic:n))?r:l.helperMissing,"function"==typeof r?r.call(null!=n?n:{},{name:"profile_pic",hash:{},data:t}):r))},17:function(a,n,l,e,t){return"images/avatar.svg"},19:function(a,n,l,e,t){return'\t\t\t\t<p class="message">Sorry, no users</p>\n\t\t</div>\n'},21:function(a,n,l,e,t){var r;return null!=(r=a.invokePartial(e.sidemenu_logged,null!=n?n.me:n,{name:"sidemenu_logged",data:t,indent:"\t",helpers:l,partials:e,decorators:a.decorators}))?r:""},23:function(a,n,l,e,t){var r;return null!=(r=a.invokePartial(e.sidemenu,n,{name:"sidemenu",data:t,indent:"\t",helpers:l,partials:e,decorators:a.decorators}))?r:""},compiler:[7,">= 4.0.0"],main:function(a,n,l,e,t){var r,o=null!=n?n:{};return'<div id="content" class="settings">\n'+(null!=(r=a.invokePartial(e.history_header,n,{name:"history_header",data:t,indent:"\t",helpers:l,partials:e,decorators:a.decorators}))?r:"")+'\t<section>\n\t\t<table><tr><td>Choose from categories to follow</td></tr></table>\n\t\t<div id="dashboard1" class="dashboard_section">\n'+(null!=(r=l["if"].call(o,null!=(r=null!=(r=null!=n?n.data:n)?r.categories:r)?r.count:r,{name:"if",hash:{},fn:a.program(1,t,0),inverse:a.program(7,t,0),data:t}))?r:"")+'\t\t\n\t\t<table><tr><td>Choose from users to follow</td></tr></table>\n\t\t<div id="dashboard2" class="dashboard_section">\n'+(null!=(r=l["if"].call(o,null!=(r=null!=(r=null!=n?n.data:n)?r.makers:r)?r.count:r,{name:"if",hash:{},fn:a.program(9,t,0),inverse:a.program(19,t,0),data:t}))?r:"")+"\t\t\n\t</section>\n\n</div>\n"+(null!=(r=l["if"].call(o,null!=n?n.logged_user:n,{name:"if",hash:{},fn:a.program(21,t,0),inverse:a.program(23,t,0),data:t}))?r:"")},usePartial:!0,useData:!0})}();