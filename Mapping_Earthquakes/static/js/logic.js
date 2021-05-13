// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//  Add a marker to the map for Los Angeles, California.
//Code = let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle marker to the map for Los Angeles, California
//L.circle([34.0522, -118.2437], {
//    color: 'black',
//    fillColor: '#FFFF99',
//    fillOpacity: 0.5,
//    radius: 300
// }).addTo(map);

// Add a yellow circle marker to the map for Los Angeles, California using circleMarker() function
L.circleMarker([34.0522, -118.2437], {
    color: "black",
    fillColor: '#FFFFa1',
    radius: 300
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// To change the map's style, change the map id using the list of Mapbox ids below:
// mapbox.streets
// mapbox.light
// mapbox.dark
// mapbox.satellite
// mapbox.streets-satellite
// mapbox.wheatpaste
// mapbox.streets-basic
// mapbox.comic
// mapbox.outdoors
// mapbox.run-bike-hike
// mapbox.pirates
// mapbox.emerald
// mapbox.high-contrast

// Use python -m http.server to show index file
