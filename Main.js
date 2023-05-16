//javascript.js
//set map options

//let reisAfstand;
// export default reisAfstand

var myLatLng = { lat: 52.17493435140199, lng: 5.370268159659525 };
var mapOptions = {
  center: myLatLng,
  zoom: 7,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
};

//create map
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);

//define calcRoute function
 function calcRoute() {
  output.innerHTML =
    "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Oeps foutje....Heb je wel een internet verbinbing?</div>";

  //create request
  var request = {
    // origin: document.getElementById("from").value,
    origin: "Haarlem",

    destination: document.getElementById("to").value,
    travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
    unitSystem: google.maps.UnitSystem.METRIC,
  };

  //pass the request to the route method
  directionsService.route(request, function (result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      //Get distance and time
      const output = document.querySelector("#output");
      let travelDistanceEl = document.getElementById("travelDistance");//rob
      let reisAfstand = result.routes[0].legs[0].distance.value; //RvB
      
      reisAfstand = (reisAfstand / 1000).toFixed(0); //RvB

      console.log("de reis afstand is " + reisAfstand + " km."); //RvB
      // output.innerHTML = "<div class='alert-info'>van: " + document.getElementById("from").value + ".<br />Naar: " + document.getElementById("to").value + ".<br /> Is de afstand <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Reistijd <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";
      output.innerHTML =
        "<div class='alert-info'>de afstand Haarlem-" +
        document.getElementById("to").value +
        " is <i class='fas fa-road'></i>  " +
        result.routes[0].legs[0].distance.text +
        ".<br />Reistijd <i class='fas fa-hourglass-start'></i> : " +
        result.routes[0].legs[0].duration.text +
        ".</div>"
      travelDistanceEl.innerText = reisAfstand;//RvB
      
    
        

      //display route
      directionsDisplay.setDirections(result);
    } else {
      //delete route from map
      directionsDisplay.setDirections({ routes: [] });
      //center map in London
      map.setCenter(myLatLng);

      //show error message
      output.innerHTML =
        "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Oeps foutje....Heb je wel een internet verbinbing?</div>";
    }
  });
}

//create autocomplete objects for all inputs
var options = {
  types: ["(cities)"],
};

var input1 = document.getElementById("from");
var autocomplete1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
