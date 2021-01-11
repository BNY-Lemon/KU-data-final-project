var myMap = L.map("map", {
  center: [20, 0],
  zoom: 3
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var myIcon = L.icon({
  iconUrl: 'marker_icon.png',
  iconSize: [20, 20],
  iconAnchor: [0, 0]
})

d3.csv("location_list.csv", function(location) {
  
  var heatArray = [];

  
  for (var i = 0; i < location.length; i++) {
    heatArray.push([location[i].Latitude, location[i].Longitude]);
    L.marker([location[i].Latitude, location[i].Longitude]).addTo(myMap)

  }

  var heat = L.heatLayer(heatArray, {
    radius: 80,
    blur: 60
  }).addTo(myMap);

})
