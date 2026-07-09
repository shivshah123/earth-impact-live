const axios = require("axios");

const fallback = {
  Canada: { temperature: "8°C", humidity: "64%", windSpeed: "14 km/h" },
  India: { temperature: "31°C", humidity: "72%", windSpeed: "10 km/h" },
  Australia: { temperature: "24°C", humidity: "51%", windSpeed: "18 km/h" },
  "United States": { temperature: "19°C", humidity: "58%", windSpeed: "16 km/h" },
  "United Kingdom": { temperature: "12°C", humidity: "80%", windSpeed: "22 km/h" },
  Brazil: { temperature: "28°C", humidity: "75%", windSpeed: "9 km/h" },
  Japan: { temperature: "21°C", humidity: "67%", windSpeed: "13 km/h" }
};

exports.getWeather = async (country) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return fallback[country] || fallback.Canada;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(country)}&appid=${apiKey}&units=metric`;
    const { data } = await axios.get(url);
    return {
      temperature: `${Math.round(data.main.temp)}°C`,
      humidity: `${data.main.humidity}%`,
      windSpeed: `${Math.round(data.wind.speed * 3.6)} km/h`
    };
  } catch {
    return fallback[country] || fallback.Canada;
  }
};
