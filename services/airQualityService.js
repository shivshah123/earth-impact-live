const aqi = {
  Canada: "42 Good",
  India: "168 Unhealthy",
  Australia: "55 Moderate",
  "United States": "71 Moderate",
  "United Kingdom": "38 Good",
  Brazil: "86 Moderate",
  Japan: "49 Good"
};

exports.getAirQuality = async (country) => {
  return { aqi: aqi[country] || "60 Moderate" };
};
