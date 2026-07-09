exports.getDisasters = async (country) => {
  const data = {
    Canada: "Wildfire watch in selected regions",
    India: "Heatwave and flood monitoring",
    Australia: "Bushfire and cyclone monitoring",
    "United States": "Storm and wildfire monitoring",
    "United Kingdom": "Flood monitoring",
    Brazil: "Amazon deforestation and flood monitoring",
    Japan: "Earthquake and typhoon monitoring"
  };

  return { alerts: data[country] || "No major active alerts" };
};
