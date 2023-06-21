var map = L.map('map').setView([41.9696, -71.3565], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(41.98285088332745, -71.36393262052391),
        L.latLng(41.98626463081817, -71.33170362108166)
    ]
}).addTo(map);