$(window).on("load resize",function(){
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
    var numcats = numcats*72 + "px";
    $("#swipper div").css("width", numcats);
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
    /*
    if ($('.bigg img').width() < $('.bigg').width()) {
        var agrandar1 = $('.bigg').width();
        $('.bigg img').css('width', agrandar1);
        $('.bigg img').css('height', 'auto');
    } else {
        $('.bigg img').css('height', '110%');
        $('.bigg img').css('width', 'auto');
    }
    if ($('#ejemplo img').width() < $('.sml').width()) {
        var agrandar = $('.sml').width();
        $('.small img').css('width', agrandar);
        $('.small img').css('height', 'auto');
    } else {
        $('.small img').css('height', '110%');
        $('.small img').css('width', 'auto');
    }
    */
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

        $("#segundo").click(function(){
            var extra1 = '<a><img src="images/users/'+Math.floor((Math.random() * 9) + 1)+'.png"></a><a><img src="images/users/'+Math.floor((Math.random() * 9) + 1)+'.png"></a><a><img src="images/users/'+Math.floor((Math.random() * 9) + 1)+'.png"></a><a><img src="images/users/'+Math.floor((Math.random() * 9) + 1)+'.png"></a><a><img src="images/users/'+Math.floor((Math.random() * 9) + 1)+'.png"></a>';
            $("#dashboard2").append(extra1);
            $("#dashboard2 a").addClass( "usuario" );
        });

        $(".techBtn").click(function(){
            $("body").animate({scrollTop: 740}, 400);
        });

    });

});

$(document).on('click', '.choosed', function() {
    if ($(this).hasClass( "cat-choose" )) {
        $(this).removeClass( "cat-choose" );
    } else {
        $(this).addClass( "cat-choose" );
    }
});

$(document).on('click', '.usuario', function() {
    if ($(this).hasClass( "following" )) {
        $(this).removeClass( "following" );
    } else {
        $(this).addClass( "following" );
    }
});