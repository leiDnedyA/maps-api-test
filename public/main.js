var map = L.map('map').setView([41.9696, -71.3565], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

fetch('/api/directions/123/456')
.then((res)=>res.text())
.then((json)=>{ console.log(json) });