/**
* Refer to leaflet routing machine API here:
* 
* http://www.liedman.net/leaflet-routing-machine/api/
* 
*/

import * as L from 'leaflet';
import 'leaflet-routing-machine';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

// Boston Common
const defaultLocation = new L.LatLng(42.354355186763065, -71.0654977491553);

class MapController {
    _map;
    _control;
    _currLocation;

    constructor(elementID, initLocation = defaultLocation) {

        const map = L.map(elementID).setView([41.9696, -71.3565], 13);
        const currLocation = L.marker(initLocation);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        const control = L.Routing.control({
            waypoints: [],
            routeWhileDragging: false,
            draggableWaypoints: false,
            addWaypoints: false,
        });

        control.addTo(map);
        control.hide();

        currLocation.addTo(map);

        this._map = map;
        this._control = control;
        this._currLocation = currLocation;
    }

    /**
     * Update route to have a new set of waypoints.
     * 
     * @param {LatLng[]} waypoints new set of waypoints for route 
     */
    setWaypoints(waypoints) {
        this._control.setWaypoints(waypoints);
    }

    /**
     * Returns the current waypoints
     * @returns {LatLng[]} Current waypoints represented by LatLng objects
     */
    getWaypoints() {
        return this._control.options.waypoints;
    }

}

export default MapController;