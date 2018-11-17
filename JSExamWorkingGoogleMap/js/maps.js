//alert('reloading');
 var geocoder;
  var map;
  var address;
  

  //alert(address);
  //var address ="951 Shine Ave, Myrtle Beach, SC 29577";
  function initialize(event) {
	 
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
      zoom: 8,
      center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {
		style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
		position: google.maps.ControlPosition.TOP_CENTER
		},
	streetViewControl: true,
    streetViewControlOptions: {
		position: google.maps.ControlPosition.TOP_CENTER
		},
	zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.TOP_LEFT
    },
		navigationControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	
    if (geocoder) {
		
      geocoder.geocode( { 'address': event}, function(results, status) {
		  
        if (status == google.maps.GeocoderStatus.OK) {
			
          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
			  
          map.setCenter(results[0].geometry.location);

            var infowindow = new google.maps.InfoWindow(
                { content: '<b>'+address+'</b>',
                  size: new google.maps.Size(150,50)
                });

            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map, 
                title:address
            }); 
			
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });

          } else {
            alert("No results found");
          }
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }	
  }
  function checkAddress() {                             // Declare checkAddress() function
    var elMsg = document.getElementById('address'); 
	var elAdd= document.getElementById('addressHolder'); 
    //alert(elMsg.value);
	elAdd.textContent = elMsg.value;
    address = elMsg.value;
	initialize(address);
	//alert(address + " address inside check address");
    
}

var elForm = document.getElementById('addressButton');  // Get reference to address button
var elAddress = document.getElementById('address');
elAddress.addEventListener("keyup", function(event) {
    event.preventDefault();
	if(event.keyCode === 13) {
		elForm.click();
		return false;
	}
});
// When form submits call checkAddress()
elForm.addEventListener('click', checkAddress, false);




 /*function loadScript() {
 
  var script = document.createElement('script');
  script.src = 'http://maps.google.com/maps/api/js?key=AIzaSyA4yaQ1gXtjIFm0-FPod6m_xb1hdYDUvjU&callback=initMap';
  document.body.appendChild(script);
}

window.onload = loadScript;*/




