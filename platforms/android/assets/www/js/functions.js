$(window).on("load resize",function(){
    var autocompleta = $("#inferior1 a").first().html();
    var autourl = $("#inferior1 a").first().attr("href");
    var autocompleta1 = $("#inferior1 a:nth-child(2)").html();
    var autourl1 = $("#inferior1 a:nth-child(2)").attr("href");
    var autocompleta2 = $("#inferior1 a:nth-child(3)").html();
    var autourl2 = $("#inferior1 a:nth-child(3)").attr("href");
    $( ".fotos" ).each(function() {
            if ($(this).attr('id') != "superior1" && $(this).find("a").length < 4) {
                if ($(this).find("a").length == 3) {
                    $(this).append( '<a class="small link" href="'+autourl+'">'+autocompleta+'</a>' );
                } 
                if ($(this).find("a").length == 2) {
                    $(this).append( '<a class="small link" href="'+autourl1+'">'+autocompleta1+'</a> <a class="small link" href="'+autourl2+'">'+autocompleta2+'</a>' );
                }
                if ($(this).find("a").length == 1) {
                    $(this).append( '<a class="small link" href="'+autourl+'">'+autocompleta+'</a> <a class="small link" href="'+autourl1+'">'+autocompleta1+'</a> <a class="small link" href="'+autourl2+'">'+autocompleta2+'</a>' );
                }
            }
    });
    $( ".section" ).each(function() {
            if ($(this).attr('id') != "section1" && $(this).find("a").length < 7) {
                if ($(this).find("a").length == 3 || $(this).find("a").length == 7) {
                    $(this).append( '<a class="replica sml" href="'+autourl+'"></a>' );
                } 
                if ($(this).find("a").length == 2 || $(this).find("a").length == 6) {
                    $(this).append( '<a class="replica sml" href="'+autourl1+'"></a><a class="replica sml" href="'+autourl2+'"></a>' );
                }
                if ($(this).find("a").length == 1 || $(this).find("a").length == 5) {
                    $(this).append( '<a class="replica sml" href="'+autourl+'"></a><a class="replica sml" href="'+autourl1+'"></a><a class="replica sml" href="'+autourl2+'"></a>' );
                }
            }
            if ($(this).find("a").length == 4) {
                var linksextras = $("#section1").html();
                linksextras = linksextras.substring(linksextras.indexOf("</a>") + 4);
                $(this).append( linksextras );
            }
    });
    if ($(".abajo").length < $(".arriba").length) {
        var paginaextra = $("#inferior1").html();
        $("#static").append('<div id="inferior'+$(".arriba").length+'" class="abajo fotos">'+paginaextra+'</div>');
    }
    var pathname = window.location.href;
    var ancho = document.documentElement.clientWidth;
    var alto = document.documentElement.clientHeight;
    var altfull = alto-156 + "px";
    var altfull1 = alto-104 + "px";
    $("#principalf").css("height", ancho);
    $("#static").css("height", altfull1);
    $(".pages").css("height", altfull);
    $(".pagina").css("height", altfull);
    var totitems = $('.actions').length;
    totitems = totitems + " ITEMS";
    $("#items").html( totitems );
    pathname = pathname.substring(pathname.indexOf("=") + 1);
    var pathname1 = "images/" + pathname + "/";
    pathname = "images/" + pathname + ".png";
    $(".define").attr("src",pathname);
    /*
    $(".define").each(function(index) {
        var file = index+1;
        var finalpath = pathname1 + "/" + file + ".png";
        $(this).attr("src",finalpath);
    });
    */
    var numcats = $('.cats').length;
    var total_length = 0;
    $('.cats').each(function(){
        total_length += $(this).width();
    });

    //var numcats = numcats*72 + "px";
    $("#swipper div").css("width", total_length);
    var numsubc = $('.sucats').length;
    var numsubc = numsubc*105 + "px";
    $("#swipper1 div").css("width", numsubc);
    var grd = $('.bigg').height();
    $('.grd').css('height', grd);
    var smler = $('.abajo a').height();
    $('.sml').css('height', smler);
    if (alto < 500) {
        $('.footer').css('bottom', '-150px');
    } else {
        $('.footer').css('bottom', '0px');
    }

});

$(window).load(function(){
    $(function() {

        $("#account1").click(function(){
            $(".wrapper").show();
            setTimeout(function() {$("#user").animate({"right":"0%"}, 300)}, 10);
        });

        $(".separate").click(function(){
        	$("#user").animate({"right":"-85%"}, 300);
            setTimeout(function() {$(".wrapper").hide()}, 300);
        });

        $(".element").click(function(){
            if ($(this).css('left') != '0px') {
                $(this).animate({"left":"0px"}, 200);
            }
        });

        $.fn.digits = function(){ 
            return this.each(function(){ 
                $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
            })
        }

        $(".mas").click(function(){
            var cantidad = parseInt($(this).parent().find( ".cantidad" ).html(), 10);
            var multip = parseInt($(this).parent().find( ".cantis" ).html().replace(/,/g, ''), 10);
            multip = (multip/cantidad)*(cantidad+1);
            ++cantidad;
            $(this).parent().find( ".cantidad" ).html( cantidad );
            $(this).parent().find( ".cantis" ).html( multip );
            $(this).parent().find( ".cantis" ).digits();
        });

        $(".menos").click(function(){
            var cantidad = parseInt($(this).parent().find( ".cantidad" ).html(), 10);
            var multip = parseInt($(this).parent().find( ".cantis" ).html().replace(/,/g, ''), 10);
            multip = (multip/cantidad)*(cantidad-1);
            --cantidad;
            if (cantidad <= 0) {
                $(this).parent().animate({"left":"-75px"}, 200);
            } else {
                $(this).parent().find( ".cantidad" ).html( cantidad );
                $(this).parent().find( ".cantis" ).html( multip );
                $(this).parent().find( ".cantis" ).digits();
            }
        });

        $(".close").click(function(){
            $(this).parent().animate({"left":"-75px"}, 200);
        });

        $(".fotel").click(function(){
            $(this).parent().animate({"left":"75px"}, 200);
        });

        $(".right").click(function(){
            $(this).parent().remove();
            var totitems = $('.actions').length;
            totitems = totitems + " ITEMS";
            $("#items").html( totitems ) ;
        });

        $(".shipp").click(function(){
            $(".shipp i").html( "panorama_fish_eye" );
            $(this).find( "i" ).html( "adjust" );
        });

        $(".paym").click(function(){
            $(".paym i").html( "panorama_fish_eye" );
            $(this).find( "i" ).html( "adjust" );
        });

        $(".bots").click(function(){
            $(".bots").removeClass( "active" );
            $(this).addClass( "active" );
        });

        $(".cats").click(function(){
            $("#no-cat").hide();
            $("#barra").hide();
            $("#photo").hide();
            $(".cats").removeClass( "select" );
            $(this).addClass( "select" );
            $(".sucats").removeClass( "select" );
            $("#subcats a").first().addClass( "select" );
            $("#swipper").animate({"top":"-50px"}, 200);
            setTimeout(function() {$("#subcats").show()}, 200);
            slider.uno();
            return false;
        });

        $(".cats1").click(function(){
            $(".cats1").removeClass( "select" );
            $(this).addClass( "select" );
        });

        $(".sucats").click(function(){
            $(".sucats").removeClass( "select" );
            $(this).addClass( "select" );
        });

        $("#check").click(function(){
            var sumatoria = 0;
            $(".mas").hide();
            $(".menos").hide();
            $(".close").hide();
            $(".cuenta").show();
            $(".detalles").show();
            $( ".cantis" ).each(function() {
                var acanti = parseInt($(this).html().replace(/,/g, ''), 10);
                sumatoria = sumatoria + acanti;
            });
            $("#sumar").html( sumatoria );
            $("#sumar").digits();
        });

        $("#items").click(function(){
            $(".mas").show();
            $(".menos").show();
            $(".close").show();
            $(".cuenta").hide();
            $(".detalles").hide();
        });

        $("#return").click(function(){
            $("#subcats").hide();
            $("#swipper").animate({"top":"0px"}, 200);
            $(".cats").removeClass( "select" );
            $(".sucats").removeClass( "select" );
            setTimeout(function() {
                $("#no-cat").show();
                $("#barra").show();
                $("#photo").show();
                slider.uno();
                return false;
            }, 150);
        });

        $("#primero").click(function(){
            var extra = '<a href="#">Lorem</a><a href="#">Ipsum</a><a href="#">Dolor</a><a href="#">Sit</a><a href="#">Amet</a><a href="#">Consectetur</a><a href="#">Adipiscing</a>';
            $("#dashboard1").append(extra);
            $("#dashboard1 a").addClass( "choosed" );
        });


        $(".techBtn").click(function(){
            var topAdjusted = $('#technical').position().top;
            $("body").animate({scrollTop: topAdjusted-50}, 400);
        });

    });

});



/***** EVENTS *****/


    /* Log In with a regular ol' account */
    $('#login_form').submit(function(e){
        app.showLoader();
        e.preventDefault();
        var data_login      = app.getFormData('#login_form');
        var responsedata    = apiRH.loginNative(data_login);
        if(responsedata) {
            console.log(responsedata);
            apiRH.save_user_data_clientside(responsedata);
            window.location.assign('feed.html?filter_feed=all');
            return;
        }
        app.toast('Tu email o contraseña no son válidos.');
    });

    /** Login with events **/
    $(document).on('click', '.login_button', function(){
        
        var provider = $(this).data('provider');
        if(provider == 'facebook')
            apiRH.loginOauth(provider, apiRH.loginCallbackFB);
        if(provider == 'google')
            apiRH.loginOauth(provider, apiRH.loginCallbackGP);
    });

    /* Log In with a regular ol' account */
    $('#create_account_form').submit(function(e){
        e.preventDefault();
        app.showLoader();
        var data_login      = app.getFormData('#create_account_form');
        var responsedata    = apiRH.registerNative(data_login);
        if(responsedata) {
            app.toast('Welcome to 3Dedalo');
            apiRH.save_user_data_clientside(responsedata);
            window.location.assign('feed.html?filter_feed=all');
            app.hideLoader();
            return;
        }
        app.toast('Sorry, we couldn\'t create your account, please try again.');
        // app.hideLoader();
        return;
    });
    
    /* Category follow events */
    $(document).on('click', '.follow_category', function(e){
        e.preventDefault();
        var $context    = $(this);
        var cat_id      = $(this).data('id');
        var response    = apiRH.makeRequest(user+'/categories/follow/', {'cat_id': cat_id});
        e.stopPropagation();
        if(response.success){
            e.stopPropagation();
            $context.removeClass('follow_category').addClass('unfollow_category choosed');
            return  app.toast('Category followed');
        }
        return app.toast('Oops! something happened');
    });

    $(document).on('click', '.unfollow_category', function(e){
        e.preventDefault();
        var $context    = $(this);
        var cat_id      = $(this).data('id');
        var response    = apiRH.makeRequest(user+'/categories/unfollow/', {'cat_id': cat_id});
        e.stopPropagation();
        if(response.success){
            e.stopPropagation();
            $context.removeClass('unfollow_category choosed').addClass('follow_category');
            return app.toast('Category unfollowed');
        }
        return app.toast('Oops! something happened');
    });

    /*** User follow events ***/
    $('body').on('click', '.follow_user', function(){
        var user_id = $(this).data('id');
        var response = apiRH.makeRequest(user+'/follow', {'user_id': user_id});
        if(response.success){
            $(this).removeClass('follow_user').addClass('unfollow_user following');
            app.toast("You are now following this maker");
            return;
        }
    });

    $('body').on('click', '.unfollow_user', function(){
        var user_id = $(this).data('id');
        var response = apiRH.makeRequest(user+'/unfollow', {'user_id': user_id});
        if(response.success){
            $(this).removeClass('unfollow_user following').addClass('follow_user');
            return;
        }
    });

   

    $('.trigger_getphoto').on('click', function(e){
        app.get_file_from_device('profile', 'gallery');
    })

     if($('#settings_form').length){
        /*
         * Update user profile
         */
        $('body').on('submit', '#settings_form', function(e){
            e.preventDefault();
            /* IMPORTANT! getFormData returns an array, we have to parse into a JSON object before making the PUT call */
            var data = app.getFormData('#settings_form');
            // if(data.password_nuevo && data.password_nuevo !== ''){
            //  if(data.password_nuevo == data.password_again){
            //      var response = apiRH.putRequest('user/'+user+"/password/" , data);
            //      if(!response.success){
            //          app.toast('There was an error saving your password');
            //          return false;
            //      }
            //  }
            //  app.toast('Tus passwords no coinciden');
            // }
            // var response = apiRH.putRequest('user/'+user+'/' , data);
            if( data.become_printer || data.become_scanner ){
                /*** Get geolocation ***/
                console.log(data);
            }
            var response = apiRH.makeRequest('user/'+user+'/' , data);
            if(response.success)
                app.toast('Profile updated successfully');
            return;
        });

        $('#become_printer').on('click', function(){
            if($('#become_printer').prop('checked')){
                $(this).parent().siblings('.form_part').removeClass('hidden');
                return;
            }
            $(this).parent().siblings('.form_part').addClass('hidden');
        });

        $('#become_scanner').on('click', function(){
            if($('#become_scanner').prop('checked')){
                $(this).parent().siblings('.form_part').removeClass('hidden');
                console.log($(this).parent().siblings('.form_part').removeClass('hidden'));
                return;
            }
            console.log($(this).parent().siblings('.form_part').removeClass('hidden'));
            $(this).parent().siblings('.form_part').addClass('hidden');
        });

     }