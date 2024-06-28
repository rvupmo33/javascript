const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const issIcon = L.icon({
  iconUrl: "iss200.png",
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});

const marker = L.marker([0, 0], { icon: issIcon }).addTo(map);

async function getLongLat() {
  const response = await fetch(
    "https://api.wheretheiss.at/v1/satellites/25544"
  );
  const data = await response.json();

  marker.setLatLng([data.latitude, data.longitude]);
  map.setView([data.latitude, data.longitude], 4);

  document.getElementById("long").textContent = data.longitude;
  document.getElementById("lat").textContent = data.latitude;
}

setInterval(getLongLat, 1000);
