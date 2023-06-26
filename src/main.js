import * as L from 'leaflet';
import MapController from './js/MapController';
import { findByRadius } from './js/StoreLookup';

const DEFAULT_RADIUS = 10000; // meters
// Boston Common
const defaultLocation = new L.LatLng(42.354355186763065, -71.0654977491553);

const mapControls = new MapController('map');

// Harvard Square to East Cambridge
const newWaypoints = [
    new L.LatLng(42.373404389314274, -71.11949807664138),
    new L.LatLng(42.37100429088682, -71.07985437331664)
]

async function showLocalStoreRoute(pos, radius = DEFAULT_RADIUS) {
    findByRadius([pos[0], pos[1]], radius)
        .then(result => {
            if (result.length == 0) {
                alert(`No stores found within ${radius} meters of your location!`);
                return;
            }

            const resWaypoints = [];
            result.forEach(place => {
                const point = L.routing.waypoint(new L.LatLng(place.position[0], place.position[1]), place.name);

                resWaypoints.push({point: point, name: place.name});
            });

            mapControls.setWaypoints(resWaypoints);

        });
}

navigator.geolocation.getCurrentPosition(
    (pos) => {
        const activeLocation = defaultLocation;
        // const activeLocation = new L.LatLng(pos.coords.latitude, pos.coords.longitude);

        mapControls.setUserLocation(activeLocation, true);
        console.log(activeLocation)
        showLocalStoreRoute([activeLocation.lat, activeLocation.lng], DEFAULT_RADIUS);
        // showLocalStoreRoute([pos.coords.latitude, pos.coords.longitude], 10000)
    },
    (err) => {
        console.error(err);
    }
)

// mapControls.setWaypoints(newWaypoints);
