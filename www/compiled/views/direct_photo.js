!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e["direct_photo"]=a({compiler:[7,">= 4.0.0"],main:function(a,e,s,o,t){var r;return'<div id="content" class="search">\n'+(null!=(r=a.invokePartial(o.history_header,e,{name:"history_header",data:t,indent:"	",helpers:s,partials:o,decorators:a.decorators}))?r:"")+'\n	<div id="no-cat" class="pages search_results">\n\n		<section class="no_results">\n			<p class="keyword">Request detailed model</p>\n			<p class="message">Please provide further details and Dedalo\'s community will try to help you.</p>\n			\n			<form action="" id="further_search" class="further_form">\n				<textarea name="message" id="message" placeholder="Comma separated keywords e.g. keychain, darth vader, plastic"></textarea>\n				<div class="img_place"></div>\n				<a id="send_form" class="submit_adv_search"><i class="material-icons send blue"></i>Send</a>\n				<a id="add_photo_appear" class="add_photo"><i class="material-icons photo_camera medium"></i>Add photo</a>\n			</form>\n\n			<section class="upload_options close_on_touch hidden">\n				<div class="wrapper to_bottom dont_close">\n					<a id="get_pic_gallery" class="dont_close"><i class="material-icons upload dark"></i>Upload Photo</a>\n					<a id="get_pic_camera" class="dont_close"><i class="material-icons photo_camera dark"></i>Use camera</a>\n				</div>\n			</section>\n		</section>\n\n	</div>\n    \n</div>\n'+(null!=(r=a.invokePartial(o.footer,e,{name:"footer",data:t,helpers:s,partials:o,decorators:a.decorators}))?r:"")+(null!=(r=a.invokePartial(o.dom_assets,e,{name:"dom_assets",data:t,helpers:s,partials:o,decorators:a.decorators}))?r:"")+(null!=(r=a.invokePartial(o.sidemenu,e,{name:"sidemenu",data:t,helpers:s,partials:o,decorators:a.decorators}))?r:"")},usePartial:!0,useData:!0})}();