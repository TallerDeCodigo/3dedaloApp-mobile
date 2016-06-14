/* 
 * Prototype: requestHandlerAPI 
 * @params token (optional if not executing auth requests) Locally saved user token
 *
 */
function requestHandlerAPI(){
	/*** Attributes ***/
	this.token = null;
	this.upload_ready = false;
	this.version = "1.2";
	this.app_build = "1.2.7.2";
	this.device_model = (typeof device != 'undefined') ? device.model : 'not set';
	this.device_platform = (typeof device != 'undefined') ? device.platform : 'not set';
	this.device_platform_version = (typeof device != 'undefined') ? device.version : 'not set';
	this.device_info = {
							sdk_version: this.version,
							build: this.app_build,
							model: this.device_model,
							platform: this.device_platform,
							version: this.device_platform_version
						};
	var context = this;
	window.sdk_app_context = null;
	/* Production API URL */
	window.api_base_url = "https://3dedalo.org/rest/v1/";
	/* Development local API URL */
	// window.api_base_url = "http://dedalo.dev/rest/v1/";
	// window.api_base_url = "http://localhost/dedalo/rest/v1/";
	
	this.ls = window.localStorage;
	/* Constructor */
	this.construct = function(app_context){
					console.log('Initialized rest API Dedalo sdk v1.2');
					if(this.ls.getItem('request_token')) this.token = this.ls.getItem('request_token');
					sdk_app_context = app_context;
					/* For chaining purposes ::) */
					return this;
				};
				
		/*** Methods ***/
		/* 
		 * Manage pseudo Log in process to use protected API calls
		 * @param data_login JSON {user_login, user_password}
		 * @return status Bool true is successfully logged in; false if an error ocurred
		 */
		this.loginNative =  function(data_login){
								
								var data_object = {
													user_email : data_login.email, 
													user_password: data_login.password, 
													request_token: apiRH.get_request_token(),
													parts:  {
																model: context.device_model, 
																platform: context.device_platform, 
																version: context.device_platform_version 
															}
												  };
								var response = this.makeRequest('auth/login/', data_object);
								console.log(response);
								return (response.success) ? response.data : false;
							};

		/* 
		 * Register a new user account the old fashioned way
		 * @param data_login JSON {user_login, user_password}
		 * @return status Bool true is successfully logged in; false if an error ocurred (User already exists)
		 */
		this.registerNative =  function(data_login){
								var data = {
												username 	: data_login.user_email, 
												email 		: data_login.user_email,
												attrs 		: {
																password: data_login.user_pwd,
																bio: data_login.user_province,
																name 		: data_login.user_name, 
																last_name 	: data_login.user_last_name, 
																request_token: apiRH.get_request_token()
															  }
											};
								var response = this.makeRequest('auth/user/', data);
								if(response.success)
									initializeProfileFileTransfer();
								return (response.success) ? response.data : false;
							};
		/* 
		 * Log Out from the API and disable token server side
		 * @param user_data JSON {user_login : 'username', request_token : 'XY0XXX0Y0XYYYXXX'}
		 * @return status Bool true is successfully logged in; false if an error ocurred
		 */
		this.logOut =  function(user_data){
								return this.makeRequest('auth/'+user_data.user_login+'/logout/', { request_token: user_data.request_token });
							};
		/* 
		 * Creates an internal user to make calls to the API
		 * @param username String
		 * @param email String
		 * @param attrs array()
		 * TO DO: Within the attributes sent to this method we can send the profile image url
		 * @param token String
		 * @return status Bool true is successfully created a new user
		 * @return userdata JSON Contains the user info to be stored client side
		 * @see save_user_data_clientside()
		 */
		this.create_internal_user = function(username, email, attrs, token){
											var data, response, exists = null, var_return;
											/* If user exists, it returns the username and id */
											exists  = this.getRequest('user/exists/', username);
											console.log(JSON.stringify(exists));
												/* Exit and get new valid token if user already exists */
												if(exists.success){
													console.log('User already exists, saving data');
													this.save_user_data_clientside(exists.data);
													/* Validate token */
													data = {
																user_id     : 'none',
																token       : apiRH.get_request_token(),
																validate_id   : (exists.data.user_id) ? exists.data.user_id : 'none'
															};
													response = this.makeRequest('user/validateToken/', data);
													return;
												}
											/* Create new user and validate it's token */
											console.log('Creating new user');
											data = {
														email       : email,
														username    : username,
														attrs    	: attrs
													};
											console.log(JSON.stringify(data));
											response = this.makeRequest('auth/user/', data);
											/* End handshake with server by validating token and getting 'me' data */
											context.endHandshake(username);

											/* Validate token */
											data = {
														user_id     : 'none',
														token       : apiRH.get_request_token(),
														validate_id   : (window.localStorage.getItem('user_id')) ? window.localStorage.getItem('user_id') : 'none'
													};
											response = this.makeRequest('user/validateToken/', data);
											app.toast("User registered,\n ¡Welcome!");
											var_return = (response.success) ? true : false;
											return var_return;
									};
		/* 
		 * Save user data client side to execute auth requests to the API
		 * @return null
		 * @see this.create_internal_user
		 */
		this.save_user_data_clientside = function(data){
											var user_role = data.role;
											if(user_role == 'administrator') user_role = 'maker';
											this.ls.setItem('dedalo_log_info', 	JSON.stringify({
																					user_login: 	data.user_login,
																					username: 		data.user_login,
																					user_id: 		data.user_id,
																					user_role: 		data.role,
																					user_profile: 	data.profile_url,
																				}));
											/* Also save user ME info */
											$.getJSON(api_base_url+data.user_login+'/me/')
											 .done(function(response){
											 	apiRH.ls.setItem('me', JSON.stringify(response));
											 	apiRH.ls.setItem('me.logged', true);
											})
											 .fail(function(err){
												console.log(err);
											});
									};
		/* 
		 * Request new passive token from the API 
		 * @return new generated token
		 */
		this.request_token = function(){
								var response_data = this.getRequest('auth/getToken/', null);
								/* Verify we got a nice token */
								if( response_data.success !== false){
									this.token = response_data.data.request_token;
									this.ls.setItem('request_token', response_data.data.request_token);
									return this;
								}
								return this;
							};
		/* 
		 * Set token user
		 * @return the token
		 */
		this.set_user_token = function(){
								
							};
		/* 
		 * Wrapper for the getRequest, makeRequest methods 
		 * @param type Request type (POST, GET, PUT, DELETE)
		 * @param endpoint String The API endpoint (See Documentation)
		 * @param data JSON Data to pass to the endpoint in a JSON format
		 * @return stored token, false if no token is stored
		 * TO DO: Manage put, delete methods
		 */
		this.execute = function(type, endpoint, data){
						if(type === 'POST') return this.makeRequest(endpoint, data);
						if(type === 'GET')  return this.getRequest(endpoint, data);
						if(type === 'PUT')  return this.putRequest(endpoint, data);
					};
		/* 
		 * Check if the Request object has a token
		 * @return stored token, false if no token is stored
		 * @see localStorage
		 */
		this.has_token = function(){
							return (typeof this.token != 'undefined' || this.token !== '') ? this.token : false;
						};
		/* 
		 * Check if the Request object has a valid token
		 * @return stored token, false if no token is stored
		 */
		this.has_valid_token = function(){
							if(this.token !== undefined || this.token !== ''){

								console.log("Looks like you already have a token, let's check if it is valid");
								var dedalo_log_info = (typeof this.ls.getItem('dedalo_log_info') != undefined) ? JSON.parse(this.ls.getItem('dedalo_log_info')) : null;
								if(!dedalo_log_info) return false;

									var user 		= dedalo_log_info.user_id;
									var data_object =   {
															user_id : user, 
															request_token : apiRH.get_request_token(),
															device_info: this.device_info
														};
									var response 	= this.makeRequest('auth/user/checkToken/', data_object);
									var var_return 	= (response.success) ? true : false;
							}
							return var_return;
						};
		/* 
		 * Request token getter
		 * @return stored token, null if no token is stored
		 */
		this.get_request_token = function(){
									return this.token;
								};
		/* 
		 * Executes a POST call
		 * @param endpoint API endpoint to make the call to
		 * @param data url encoded data
		 * @return JSON encoded response
		 */
		this.makeRequest = function(endpoint, data){
								
								sdk_app_context.showLoader();
								var result = {};
								$.ajax({
								  type: 'POST',
								  url: window.api_base_url+endpoint,
								  data: data,
								  dataType: 'json',
								  async: false
								})
								 .done(function(response){
									result = response;
									sdk_app_context.hideLoader();
								})
								 .fail(function(e){
									result = false;
									console.log(JSON.stringify(e));
								});
								return result;
							};
		/* 
		 * Executes a GET call
		 * @param endpoint API endpoint to make the call to
		 * @param data JSON encoded data 
		 * *****(SEND data = NULL for closed endpoints)*****
		 * @return JSON encoded response
		 * @see API documentation about jsonp encoding
		 */
		this.getRequest = function(endpoint, data){
							
							sdk_app_context.showLoader();
							var result = {};
							endpoint = (data === null) ? endpoint : endpoint+data; 
							$.getJSON( window.api_base_url+endpoint, function( response ){
								result = response;
								sdk_app_context.hideLoader();
							});
							return result;
						};
		/* 
		 * Executes a PUT call
		 * @param endpoint API endpoint to make the call to
		 * @param data JSON encoded data 
		 * *****(SEND data = NULL for closed endpoints)*****
		 * @return JSON success
		 * @see API documentation
		 */
		this.putRequest = function(endpoint, data){
							
							sdk_app_context.showLoader();
							var result = {};
							/* ContentType is important to parse the data server side since PUT doesn't handle multipart form data */
							$.ajax({
								type: 	'PUT',
								data: 	$.param(data),
								contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
								url: 	window.api_base_url+endpoint,
							})
							 .done(function(response){
								result = response;
								sdk_app_context.hideLoader();
							 })
							 .fail(function(e){
								result = false;
								console.log(e);
							 });
							 return result;
						};

		/**
		 * Executes a PATCH update
		 * @param endpoint API endpoint to make the call to
		 * @param data JSON encoded data 
		 * *****(SEND data = NULL for closed endpoints)*****
		 * @return JSON success or JSON encoded data
		 * @see API documentation
		 * @todo Actually make the request via PATCH method
		 */
		this.patchRequest = function(endpoint, data){
							sdk_app_context.showLoader();
							var userInfo = {};

							var xhr = new XMLHttpRequest();
							xhr.open('POST', window.api_base_url+endpoint);
							xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
							xhr.onload = function() {
								console.log(xhr.status);
							    if (xhr.status === 200) {
							        var userInfo = JSON.parse(xhr.responseText);
							        console.log(userInfo);
							        sdk_app_context.hideLoader();
							    }
							};
							xhr.send(data);
							/* ContentType is important to parse the data server side since PUT doesn't handle multipart form data */
							 return userInfo;
						};
		/* 
		 * Perform OAuth authentication 
		 * @param provider String Values: 'facebook', 'twitter', 'google_plus'
		 * @param callback function The callback function depending on the provider
		 * @return null
		 * @see loginCallbackTW, loginCallbackFB, loginCallbackGP
		 */
		this.loginOauth   =  function(provider, callback){
								sdk_app_context.showLoader();
								OAuth.popup(provider)
								 .done(callback)
								 .fail(function(error){
									console.log(error);
								 });
								return;
							};
		/* 
		 * Log in callback for Twitter provider
		 * @return Bool TRUE if authentication was successful
		 * @see loginOauth
		 * @see API Documentation
		 */
		this.loginCallbackGP = function(response){
									//Get profile info
									response.me()
									 .done(function(response) {
										console.log(response);
										var email = response.email;
										var username = response.lastname+"_"+response.id;
										var found = apiRH.create_internal_user(username, email, {gpId: response.id, avatar: response.avatar, name: response.firstname, last_name: response.lastname}, window.localStorage.getItem('request_token'));
										/* End handshake with server by validating token and getting 'me' data */
										context.endHandshake(username);

										window.location.assign('feed.html?filter_feed=all');
										return;
									})
									 .fail(function(error){
										console.log(error);
									});
								};
		/* 
		 * Log in callback for Facebook provider
		 * @return Bool TRUE if authentication was successful
		 * @see loginOauth
		 * @see API Documentation
		 */
		this.loginCallbackFB = function(response){
									response.me()
									 .done(function(response){
									 	console.log(response);
										var email = response.email;
										var username = response.lastname+"_"+response.id;
										var found = apiRH.create_internal_user(username, email, {fbId: response.id, avatar: response.avatar, name: response.firstname, last_name: response.lastname}, window.localStorage.getItem('request_token'));
										/* End handshake with server by validating token and getting 'me' data */
										context.endHandshake(username);

										window.location.assign('feed.html?filter_feed=all');
										return;
									})
									 .fail(function(error){
										console.log(error);
									});
								};

		this.endHandshake = function(user_login){
								var exists  = context.getRequest('user/exists/'+ user_login, null);
								if(exists.success){
									/* Validate token */
									data = {
												user_id     : 'none',
												token       : apiRH.get_request_token(),
												validate_id   : (exists.data.user_id) ? exists.data.user_id : 'none'
											};
									response = this.makeRequest('user/validateToken/', data);
									context.save_user_data_clientside(exists.data);
								}
							};

		this.transfer_win = function (r) {
									app.toast("Se ha publicado una imagen");
									window.location.reload(true);
								};
		this.profile_transfer_win = function (r) {
									// app.toast("Imagen de perfil modificada");
									// window.location.reload(true);
									return true;
								};
		this.transfer_fail = function (error) {
								console.log(error);
								alert("An error has occurred: Code = " + error.code);
								console.log("upload error source " + error.source);
								console.log("upload error target " + error.target);
							};
		/*
		 * Initialize File transfer
		 * @param fileURL
		 * Note: to avoid passing the event value through these callbacks we save it to a localStorage item
		 */
		this.initializeEventFileTransfer = function(fileURL){
									app.showLoader();
									this.transfer_options = new FileUploadOptions();
									this.transfer_options.fileKey = "file";
									this.transfer_options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
									this.transfer_options.mimeType = "image/jpeg";

									var params = {};
										params.client = "app";

									this.transfer_options.params = params;

									var ft = new FileTransfer();
									var ls = window.localStorage;
									var event_id = ls.getItem('museo_last_selected_event');
									ft.upload(fileURL, encodeURI(api_base_url+"transfers/"+user+"/event_upload/"+event_id+"/"), context.transfer_win, context.transfer_fail, this.transfer_options);
								};
		/*
		 * Prepare params for Profile File transfer
		 * @param fileURL
		 */
		this.prepareProfileFileTransfer = function(fileURL){
									app.showLoader();
									this.transfer_options = new FileUploadOptions();
									this.transfer_options.fileUrl = fileURL;
									this.transfer_options.fileKey = "file";
									this.transfer_options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
									this.transfer_options.mimeType = "image/jpeg";

									var params = {};
										params.client = "app";
									this.transfer_options.params = params;
									this.upload_ready = true;
									console.log(this.transfer_options);
									console.log(this.upload_ready);
									app.hideLoader();
								};

		/*
		 * Prepare params for Search File transfer
		 * @param fileURL
		 */
		this.prepareSearchFileTransfer = function(fileURL){
									app.showLoader();
									this.transfer_options = new FileUploadOptions();
									this.transfer_options.fileUrl = fileURL;
									this.transfer_options.fileKey = "file";
									this.transfer_options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
									this.transfer_options.mimeType = "image/jpeg";

									var params = {};
										params.client = "app";
									this.transfer_options.params = params;
									this.upload_ready = true;
									console.log(this.transfer_options);
									console.log(this.upload_ready);
									app.hideLoader();
								};


		/*
		 * Initialize Profile File transfer
		 * @param fileURL
		 * @see prepareProfileTransfer MUST be executed before
		 */
		this.initializeProfileFileTransfer = function(){
									if(this.upload_ready){
										// var ft = new FileTransfer();
										ft.upload(  this.transfer_options.fileUrl, 
													encodeURI(api_base_url+"transfers/"+user+"/profile/"), 
													context.profile_transfer_win, 
													context.transfer_fail, 
													this.transfer_options
												);
									}
								};

		/*
		 * Initialize Search by image File transfer
		 * @param fileURL
		 * @see prepareProfileTransfer MUST be executed before
		 */
		this.initializeSearchFileTransfer = function(){
									if(this.upload_ready){
										var ft = new FileTransfer();
										ft.upload(  this.transfer_options.fileUrl, 
													encodeURI(api_base_url+"transfers/"+user+"/profile/"), 
													context.profile_transfer_win, 
													context.transfer_fail, 
													this.transfer_options
												);
									}
								};
								
		this.fileselect_win = function (r) {
								if(!r && r == '')
									return;
								// context.initializeEventFileTransfer(r);
								return context.prepareProfileFileTransfer(r);
							};

		this.search_fileselect_win = function (r) {
								if(!r && r == '')
									return;
								// context.initializeEventFileTransfer(r);
								return context.prepareProfileFileTransfer(r);
							};

		this.profileselect_win = function (r) {
								if(!r && r == '')
									
									return context.prepareProfileFileTransfer(r);
							};
		this.fileselect_fail = function (error) {
								app.toast("An error has occurred: " + error);
							};
		/**
		 * @param String destination Upload destination Options: "profile", "event"
		 * @param String source Source to get media file from Options: "camera", "gallery"
		 * @return void
		 */
		this.getFileFromDevice = function(destination, source){
			console.log(destination);
			console.log(source);
			this.photoDestinationType = navigator.camera.DestinationType;
			var sourcetype =  navigator.camera.PictureSourceType.PHOTOLIBRARY;
			if(source == "camera") sourcetype =  navigator.camera.PictureSourceType.CAMERA;
			if(destination == 'profile')
				navigator.camera.getPicture(context.profileselect_win, context.fileselect_fail, { quality: 50,
					destinationType: this.photoDestinationType.FILE_URI,
					sourceType: sourcetype,
					mediaType: navigator.camera.MediaType.ALLMEDIA  });
			if(destination == 'search')
				navigator.camera.getPicture(context.search_fileselect_win, context.fileselect_fail, { quality: 100,
						destinationType: this.photoDestinationType.FILE_URI,
						sourceType: sourcetype,
						mediaType: navigator.camera.MediaType.ALLMEDIA  });
			return;
		};

		
	}