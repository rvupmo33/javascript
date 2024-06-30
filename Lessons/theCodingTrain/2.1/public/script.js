// if ("geolocation" in navigator) {
//   console.log("geolocation available");
//   function getGeo() {
//     navigator.geolocation.getCurrentPosition(async (position) => {
//       const lat = position.coords.latitude;
//       document.getElementById("latitude").textContent = lat;
//       const lon = position.coords.longitude;
//       document.getElementById("longitude").textContent = lon;
//       const color = document.getElementById("color").value;
//       const data = { lat, lon, color };
//       const options = {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       try {
//         const response = await fetch("/api", options);
//         const json = await response.json();
//         console.log(json);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     });
//   }
// } else {
//   console.log("geolocation not available");
// }

function setup() {
  noCanvas();
  const video = createCapture(VIDEO);
  video.size(160, 120);
  let lat, lon;
  const button = document.getElementById("submit");
  button.addEventListener("click", async (event) => {
    const color = document.getElementById("color").value;
    video.loadPixels();
    const image64 = video.canvas.toDataURL();
    const data = { lat, lon, color, image64 };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("/api", options);
    const json = await response.json();
    console.log(json);
  });

  if ("geolocation" in navigator) {
    console.log("geolocation available");
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat, lon);
      document.getElementById("latitude").textContent = lat;
      document.getElementById("longitude").textContent = lon;
    });
  } else {
    console.log("geolocation not available");
  }
}
