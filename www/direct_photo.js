!function(){var t=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a["direct_photo"]=t({1:function(t,a,e,s,n){var r;return null!=(r=t.invokePartial(s.sidemenu_logged,null!=a?a.me:a,{name:"sidemenu_logged",data:n,indent:"\t",helpers:e,partials:s,decorators:t.decorators}))?r:""},3:function(t,a,e,s,n){var r;return null!=(r=t.invokePartial(s.sidemenu,a,{name:"sidemenu",data:n,indent:"\t",helpers:e,partials:s,decorators:t.decorators}))?r:""},compiler:[7,">= 4.0.0"],main:function(t,a,e,s,n){var r;return'<div id="content" class="search">\n'+(null!=(r=t.invokePartial(s.history_header,a,{name:"history_header",data:n,indent:"\t",helpers:e,partials:s,decorators:t.decorators}))?r:"")+'\n\t<div id="no-cat" class="pages search_results">\n\n\t\t<section class="no_results 820">\n\t\t\t<p class="keyword">Request detailed model</p>\n\t\t\t<p class="message">Please provide further details and Dedalo\'s community will try to help you.</p>\n\t\t\t\n\t\t\t<form action="" id="further_search" class="further_form">\n\t\t\t\t<textarea name="message" id="message" placeholder="Comma separated keywords e.g. keychain, darth vader, plastic"></textarea>\n\t\t\t\t<div class="img_place"></div>\n\t\t\t\t<a id="send_form" class="submit_adv_search"><i class="material-icons send blue"></i>Send</a>\n\t\t\t\t<a id="add_photo_appear" class="add_photo"><i class="material-icons photo_camera medium"></i>Add photo</a>\n\t\t\t</form>\n\n\t\t\t<section class="upload_options close_on_touch hidden">\n\t\t\t\t<div class="wrapper to_bottom dont_close">\n\t\t\t\t\t<a id="get_pic_gallery" class="dont_close"><i class="material-icons upload dark"></i>Upload Photo</a>\n\t\t\t\t\t<a id="get_pic_camera" class="dont_close"><i class="material-icons photo_camera dark"></i>Use camera</a>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</section>\n\n\t</div>\n    \n</div>\n\n'+(null!=(r=t.invokePartial(s.dom_assets,a,{name:"dom_assets",data:n,helpers:e,partials:s,decorators:t.decorators}))?r:"")+(null!=(r=e["if"].call(null!=a?a:{},null!=a?a.logged_user:a,{name:"if",hash:{},fn:t.program(1,n,0),inverse:t.program(3,n,0),data:n}))?r:"")},usePartial:!0,useData:!0})}();