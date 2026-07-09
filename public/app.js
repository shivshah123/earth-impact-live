async function loadCountryData() {
  const country = document.getElementById("countrySelect").value;
  document.getElementById("countryName").innerText = `${country} Environment Overview`;

  try {
    const response = await fetch(`/api/environment/${encodeURIComponent(country)}`);
    const data = await response.json();

    document.getElementById("temperature").innerText = data.temperature;
    document.getElementById("aqi").innerText = data.airQuality;
    document.getElementById("humidity").innerText = data.humidity;
    document.getElementById("wind").innerText = data.windSpeed;
    document.getElementById("disasters").innerText = data.disasterAlerts;
    document.getElementById("forestRisk").innerText = data.forestRisk;
    document.getElementById("seaLevel").innerText = data.seaLevelRisk;
    document.getElementById("climate").innerText = data.climateStatus;
  } catch (error) {
    console.error(error);
    alert("Unable to load country data.");
  }
}

window.onload = loadCountryData;
