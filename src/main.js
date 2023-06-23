import * as L from 'leaflet';
import MapController from './js/MapController';

const mapControls = new MapController('map');

// Harvard Square to East Cambridge
const newWaypoints = [
    new L.LatLng(42.373404389314274, -71.11949807664138),
    new L.LatLng(42.37100429088682, -71.07985437331664)
]

navigator.geolocation.getCurrentPosition(
    (pos) => {
        mapControls.setUserLocation(new L.LatLng(pos.coords.latitude, pos.coords.longitude));
        fetch(`/api/searchCircle/pos/${pos.coords.latitude},${pos.coords.longitude}/rad/${10000}`)
            .then((res)=>res.json())
            .then((result)=>{console.log(result)});
    },
    (err) => {
        console.error(err);
    }
)

mapControls.setWaypoints(newWaypoints);
