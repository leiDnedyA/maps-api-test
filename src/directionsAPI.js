require('dotenv').config();

const API_KEY = process.env.OPENROUTE_TOKEN;

async function getDirections(origin, destination) {
    const response = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${API_KEY}&start=${origin}&end=${destination}`);
    const resJSON = await response.json();
    return resJSON;
}

module.exports = {getDirections};