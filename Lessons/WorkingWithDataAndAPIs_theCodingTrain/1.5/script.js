const map = L.map("issMap").setView([0, 0], 1);

const issIcon = L.icon({
  iconUrl: "iss200.png",
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});

const marker = L.marker([0, 0], { icon: issIcon }).addTo(map);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const api_url = "https://api.wheretheiss.at/v1/satellites/25544";

async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { latitude, longitude } = data;

  // L.marker([latitude, longitude]).addTo(map);
  marker.setLatLng([latitude, longitude]);
  map.setView([latitude, longitude], 5);

  document.getElementById("lat").textContent = latitude.toFixed(2) + "°";
  document.getElementById("lon").textContent = longitude.toFixed(2) + "°";
}

getISS();

setInterval(getISS, 1000);
