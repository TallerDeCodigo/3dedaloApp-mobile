!function(){var a=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n["sidemenu"]=a({compiler:[7,">= 4.0.0"],main:function(a,n,o,e,i){return'<div class="wrapper" style="display:none">\n	<div id="user">\n		<div class="logout" >\n			<p>Sign in</p>\n			<form id="login_form" class="login_form">\n				<input name="email" type="email" placeholder="email" value=""><br>\n				<input name="password" type="password" placeholder="password"><br>\n				<input type="submit" class="icon_hack" value=""><i class="material-icons post_submit send"></i>\n			</form>\n			<p><a class="underline1" href="#">Forgot password</a></p>\n			<p>New to Dedalo?<br>\n			<a class="underline" href="create_account.html">Create an account</a></p>\n			<p>or</p>\n			<a href="#" data-provider="facebook" class="media login_button facebook" >Sign in with Facebook</a><br>\n			<a href="#" data-provider="google" class="media login_button google" >Sign in with Google</a><br>\n		</div>\n		<div class="footer">\n			<p><a onclick="window.open(\'http://3dedalo.org/\', \'_blank\', \'location=yes\');" ><span>About</span> <img width="134" height="32" src="images/logo.svg" /></a></p>\n			<p><a onclick="window.open(\'http://3dedalo.org/\', \'_blank\', \'location=yes\');" >Terms and conditions</a> | <a onclick="window.open(\'http://3dedalo.org/\', \'_blank\', \'location=yes\');" >Privacy policies</a></p>\n		</div>\n	</div>\n	<div class="separate"></div>\n</div>'},useData:!0})}();