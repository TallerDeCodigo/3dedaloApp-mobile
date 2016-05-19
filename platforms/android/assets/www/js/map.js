(function() {
        
    // if(!!navigator.Geolocation || !!navigator.Geolocation) {
        var map;
        var mapOptions = {
            zoom: 16,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var printer = [ new google.maps.LatLng(position.coords.latitude-0.001, position.coords.longitude-0.002), new google.maps.LatLng(position.coords.latitude+0.002, position.coords.longitude+0.001) ];
            var scanner = [ new google.maps.LatLng(position.coords.latitude-0.002, position.coords.longitude-0.001), new google.maps.LatLng(position.coords.latitude+0.001, position.coords.longitude+0.003) ];
            var witship = [ new google.maps.LatLng(position.coords.latitude-0.003, position.coords.longitude+0.002), new google.maps.LatLng(position.coords.latitude+0.003, position.coords.longitude-0.003) ];

            var infowindow = new google.maps.InfoWindow({
                map: map,
                position: geolocate,
                content: '<h2>Est&aacute;s aqu&iacute;&nbsp;</h2>',
                buttons: { close: { visible: false } }
            });

            var image = 'images/marker.png';

            var marker1 = [];
            var marker2 = [];
            var marker3 = [];

            for (var i = 0; i < printer.length; i++) { marker1[i] = new google.maps.Marker({ position: printer[i], map: map, icon: image }) }
            for (var i = 0; i < scanner.length; i++) { marker2[i] = new google.maps.Marker({ position: scanner[i], map: map, icon: image }) }
            for (var i = 0; i < witship.length; i++) { marker3[i] = new google.maps.Marker({ position: witship[i], map: map, icon: image }) }

            var allBtn = document.getElementById("allBtn");
            var printBtn = document.getElementById("printBtn");
            var scanBtn = document.getElementById("scanBtn");
            var shipBtn = document.getElementById("shipBtn");

            google.maps.event.addDomListener(printBtn, "click", onlyprint);
            google.maps.event.addDomListener(scanBtn, "click", onlyscan);
            google.maps.event.addDomListener(shipBtn, "click", onlyship);
            google.maps.event.addDomListener(allBtn, "click", showall);

            for (var i = 0; i < marker1.length; i++) { marker1[i].addListener('click', function() { $("#info-maker").show() }) }
            for (var i = 0; i < marker2.length; i++) { marker2[i].addListener('click', function() { $("#info-maker").show() }) }
            for (var i = 0; i < marker3.length; i++) { marker3[i].addListener('click', function() { $("#info-maker").show() }) }

            map.setCenter(geolocate);

            function onlyprint() {
                for (var i = 0; i < marker1.length; i++) { marker1[i].setVisible(true) }
                for (var i = 0; i < marker2.length; i++) { marker2[i].setVisible(false) }
                for (var i = 0; i < marker3.length; i++) { marker3[i].setVisible(false) }
                $("#info-maker").hide();
            }

            function onlyscan() {
                for (var i = 0; i < marker1.length; i++) { marker1[i].setVisible(false) }
                for (var i = 0; i < marker2.length; i++) { marker2[i].setVisible(true) }
                for (var i = 0; i < marker3.length; i++) { marker3[i].setVisible(false) }
                $("#info-maker").hide();
            }

            function onlyship() {
                for (var i = 0; i < marker1.length; i++) { marker1[i].setVisible(false) }
                for (var i = 0; i < marker2.length; i++) { marker2[i].setVisible(false) }
                for (var i = 0; i < marker3.length; i++) { marker3[i].setVisible(true) }
                $("#info-maker").hide();
            }

            function showall() {
                for (var i = 0; i < marker1.length; i++) { marker1[i].setVisible(true) }
                for (var i = 0; i < marker2.length; i++) { marker2[i].setVisible(true) }
                for (var i = 0; i < marker3.length; i++) { marker3[i].setVisible(true) }
                $("#info-maker").hide();
            }

        });  
    
    // }
})();

