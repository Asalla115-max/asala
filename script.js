document.getElementById("locateBtn").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, handleError);
  } else {
    document.getElementById("output").innerHTML = "Geolocation not supported.";
  }
});

function showLocation(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  document.getElementById("output").innerHTML = `
    <strong>Your Location:</strong><br>
    Latitude: ${lat}<br>
    Longitude: ${lon}<br><br>
    <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank">
      View on Google Maps
    </a>
  `;
}

function handleError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Location access denied.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location unavailable.");
      break;
    case error.TIMEOUT:
      alert("Request timed out.");
      break;
    default:
      alert("Unknown error.");
  }
}
