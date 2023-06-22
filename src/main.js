import * as L from 'leaflet';
import MapController from './js/MapController';

const mapControls = new MapController('map');

const newWaypoints = [
    new L.LatLng(42.373404389314274, -71.11949807664138),
    new L.LatLng(42.37100429088682, -71.07985437331664)
]

console.log(mapControls.getUserLocation());