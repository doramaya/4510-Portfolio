//map page//
const myToken = "pk.eyJ1IjoibWVnYmFyc2tpIiwiYSI6ImNrb2M1a2l6cTByYjMyb3FtYmlteHQyNXcifQ.J09K14DcBCKQmhLHDlvysw";

const mapCenterLat = 40.78494823111175;
const mapCenterLng = -73.97819106346167;

const mymap = L.map("leafletmap", {
    center: [mapCenterLat, mapCenterLng],
    zoom: 15,
})

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data & copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: myToken,
}).addTo(mymap);

const marker = L.marker([51.75462193971403, 19.47126006941666]).addTo(mymap);// JavaScript Document