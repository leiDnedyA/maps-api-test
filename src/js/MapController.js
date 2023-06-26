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
    _userLocation;

    constructor(elementID, initLocation = defaultLocation) {

        const map = L.map(elementID).setView([41.9696, -71.3565], 13);
        const userLocation = new L.marker(initLocation);

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

        userLocation.bindTooltip("Your are here").openTooltip();
        userLocation.addTo(map);

        this._map = map;
        this._control = control;
        this._userLocation = userLocation;
    }

    /**
     * Update route to have a new set of waypoints.
     * 
     * @param {{point: LatLng[], name: string}} waypoints new set of waypoints for route 
     */
    setWaypoints(waypoints) {
        const names = [];
        const points = [];
        
        // Convert waypoints arg to parallel lists of names and points
        waypoints.forEach(wp => {
            names.push(wp.name);
            points.push(wp.point)
        });

        // Re-instantiate _control
        this._map.removeControl(this._control);
        
        /**
         * Method for adding markers based on issue:
         * https://github.com/perliedman/leaflet-routing-machine/issues/271
         */
        const newControl = L.routing.control({
            waypoints: points,
            routeWhileDragging: false,
            draggableWaypoints: false,
            addWaypoints: false,
            createMarker: function(i, wp, nWps) {
                console.log(names[i])
                return L.marker(wp.latLng).bindPopup(names[i]);
            }
        })

        newControl.addTo(this._map);
        this._control = newControl;
    }

    /**
     * Returns the current waypoints.
     * 
     * @returns {LatLng[]} Current waypoints represented by LatLng objects
     */
    getWaypoints() {
        return this._control.options.waypoints;
    }

    /**
     * Returns the current stored value of the user location.
     * WARNING: not the user's actual location, just the location currently stored for map use
     * 
     * @returns {LatLng} Current value stored for user location.
     */
    getUserLocation() {
        return this._userLocation.getLatLng();
    }

    /**
     * Sets the user's location to a new location.
     * 
     * @param {LatLng} newLocation new user location
     * @param {boolean} updateMapCenter whether or not to re-center the map view on the new location
     */
    setUserLocation(newLocation, updateMapCenter = false) {
        if (updateMapCenter) {
            this._map.setView(newLocation);
        }
        this._userLocation.setLatLng(newLocation);
    }

}

export default MapController;