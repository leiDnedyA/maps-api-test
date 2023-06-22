/**
* Refer to leaflet routing machine API here:
* 
* http://www.liedman.net/leaflet-routing-machine/api/
* 
*/

import * as L from 'leaflet';
import 'leaflet-routing-machine';

// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// Set route

// Get route

// Add stops

// Remove stops

// Set current location

class MapController {
    // _map;
    // _control;

    constructor(elementID) {
        const map = L.map(elementID).setView([41.9696, -71.3565], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        const waypoints = [
            L.latLng(41.98285088332745, -71.36393262052391),
            L.latLng(41.98626463081817, -71.33170362108166)
        ]

        const control = L.Routing.control({
            waypoints: waypoints,
            routeWhileDragging: false,
            draggableWaypoints: false,
            addWaypoints: false,
            autoRoute: false
        });

        control.route();

        control.addTo(map);
        control.hide();

    }
}

export default MapController;