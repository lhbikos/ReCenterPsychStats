var OdoPopupWidget = {};

OdoPopupWidget.initializeGeocoder = function initializeGeocoder() {
    OdoPopupWidget.geocoder = new google.maps.Geocoder();
}

//Get the latitude and the longitude;
OdoPopupWidget.geocoderSuccessFunction = function (position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    OdoPopupWidget.geocoderCodeLatLng(lat, lng);
}

//Get the latitude and the longitude;
OdoPopupWidget.geocoderErrorFunction = function (position) {
	OdoPopupWidget.odoPopupWidgetParams.country = "n/a";
}


OdoPopupWidget.geocoderCodeLatLng = function (lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    OdoPopupWidget.geocoder.geocode({
        'latLng': latlng
    }, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                var indice = 0;
                for (var j = 0; j < results.length; j++) {
                    if (results[j].types[0] == 'locality') {
                        indice = j;
                        break;
                    }
                }
                for (var i = 0; i < results[j].address_components.length; i++) {
                    if (results[j].address_components[i].types[0] == "country") {
                        //this is the object you are looking for
                        country = results[j].address_components[i];                        
                        OdoPopupWidget.odoPopupWidgetParams["country"] = country.short_name;
                        Cookie.retrieve("appdata");
                        if (Cookie.getData("location") != undefined){                  		
                    		Cookie.setData("location", country.short_name);
                    		Cookie.store();
                    		
                        }	

                    }
                }
            }
        }
    });
}


//make the widget visible and put it by the word the even was triggered for
OdoPopupWidget.displayOdoPopupWidget = function () {
    $j('#odoPopupWidget').css('visibility', 'visible');
    if ($j('#odoPopupWidget').position().left != undefined) {
	    OdoPopupWidget.displayOdoPopupWidgetPostionBottom();
	    if ($j(window).width() < ($j('#odoPopupWidget').position().left + ($j('#odoPopupWidget').width()) + 10)) {
	        //the popup will display off the screen on the left so flip it so it points to the right
	        OdoPopupWidget.displayOdoPopupWidgetPostionBottomRight();
	    }
    }
}

OdoPopupWidget.displayOdoPopupWidgetPostionBottomRight = function () {
    $j('.odoPopupWidgetModule').addClass('topRightArrow');
    $j('.odoPopupWidgetModule').removeClass('bottomLeftArrow');
    $j('.odoPopupWidgetModule').removeClass('bottomRightArrow');
    $j('.odoPopupWidgetModule').removeClass('topLeftArrow');
    $j('#odoPopupWidget').css('left', (OdoPopupWidget.odoPopupWidget_posX - 350) + 'px');
    $j('#odoPopupWidget').css('top', (OdoPopupWidget.odoPopupWidget_posY + (parseInt($j(OdoPopupWidget.odoPopupWidgetParams.jquerySelector).css('line-height')))) + 'px');
}

OdoPopupWidget.displayOdoPopupWidgetPostionBottom = function () {
    $j('.odoPopupWidgetModule').addClass('topLeftArrow');
    $j('.odoPopupWidgetModule').removeClass('bottomRightArrow');
    $j('.odoPopupWidgetModule').removeClass('bottomLeftArrow');
    $j('.odoPopupWidgetModule').removeClass('topRightArrow');
    $j('#odoPopupWidget').css('left', (OdoPopupWidget.odoPopupWidget_posX - 50) + 'px');
    $j('#odoPopupWidget').css('top', (OdoPopupWidget.odoPopupWidget_posY + (parseInt($j(OdoPopupWidget.odoPopupWidgetParams.jquerySelector).css('line-height')))) + 'px');
}


OdoPopupWidget.displayOdoPopupWidgetHide = function () {
    $j('#odoPopupWidget').css('visibility', 'hidden');
}

OdoPopupWidget.errorFunction = function () {
	//alert("error error");
	1 + 1; //just a place to put a breakpoint while debugging
}

function setupOdoPopupWidget(params) {

    OdoPopupWidget.odoPopupWidgetParams = params;

    if (OdoPopupWidget.odoPopupWidgetParams.country == undefined) {        
        if (navigator.geolocation) {
        	Cookie.retrieve("appdata");
        	if (Cookie.getData("location") == undefined){
        		OdoPopupWidget.initializeGeocoder();
        		Cookie.setData("location", "n/a");
        		Cookie.store();
                navigator.geolocation.getCurrentPosition(OdoPopupWidget.geocoderSuccessFunction, OdoPopupWidget.geocoderErrorFunction);
        	}
        }
    }

    //enable double click on words in the readPanel
    $j(OdoPopupWidget.odoPopupWidgetParams.jquerySelector).dblclick(function (event) {
        var seltxt = '';

        if (window.getSelection) {
            seltxt = window.getSelection();
        } else if (document.getSelection) {
            seltxt = document.getSelection();
        } else if (document.selection) {
            seltxt = document.selection.createRange().text;
        }
        seltxt = $j.trim(seltxt);

        if (seltxt != "") {
	        var bodyOffsets = document.body.getBoundingClientRect();
	        OdoPopupWidget.odoPopupWidget_posX = event.pageX - bodyOffsets.left - $j(document).scrollLeft();
	        OdoPopupWidget.odoPopupWidget_posY = event.pageY;
	        if ($j.browser.msie == true) {
	    	    OdoPopupWidget.odoPopupWidget_posY = OdoPopupWidget.odoPopupWidget_posY + 15; 
	        }
	
	        var zoneId = "odoPopupWidgetZone"; // tml was <t:zone id="itemZone"...>
	        var zoneObject = Tapestry.findZoneManagerForZone(zoneId);
	
	        var country = OdoPopupWidget.odoPopupWidgetParams.country;
	        if (country == undefined) {
	        	Cookie.retrieve("appdata");
	        	if (Cookie.getData("location") != undefined) {
	        		country = Cookie.getData("location");
	        	} else{
	        		country = "n/a";
	        	}
	        }       
	        
	        //this should work but it doesn't on the home page for some reason... so calling it directly with prototype
	        //zoneObject.updateFromURL(OdoPopupWidget.odoPopupWidgetParams.ajaxUpdateURL + "&dictionaryQuery=" + seltxt + "&country=" + country);        
			new Ajax.Request(OdoPopupWidget.odoPopupWidgetParams.ajaxUpdateURL, {
			  method: 'post',
			  parameters: { "dictionaryQuery" : seltxt },
			  onException: OdoPopupWidget.errorFunction,
			  onFailure: OdoPopupWidget.errorFunction,
			  onSuccess : function (transport) {
			  zoneObject.processReply(transport.responseJSON);
			  }
			});
        }
    });

    //remove the popup if the use clicks anywhere else
    $j('body').click(function (event) {
        OdoPopupWidget.displayOdoPopupWidgetHide();
    });

    //relies on prototype to have this event registered
    $('odoPopupWidgetZone').observe(Tapestry.ZONE_UPDATED_EVENT, function (event) {
        OdoPopupWidget.displayOdoPopupWidget();
    });
}


(function ($) {
    $j.extend(Tapestry.Initializer, {
        OdoPopupWidgetModule: function (specs) {
            var ajaxUpdateURL = specs.ajaxUpdateURL;
            var jquerySelector = specs.jquerySelector;
            var country = specs.country;

            setupOdoPopupWidget({
                ajaxUpdateURL: ajaxUpdateURL,
                jquerySelector: jquerySelector,
                country: country
            });
        }
    });
})(jQuery);