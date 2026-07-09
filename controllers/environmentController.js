const weatherService = require("../services/weatherService");
const airQualityService = require("../services/airQualityService");
const disasterService = require("../services/disasterService");
const climateService = require("../services/climateService");
const newsService = require("../services/newsService");
const Country = require("../models/Country");

exports.getEnvironmentByCountry = async (req, res) => {
  const country = req.params.country;

  try {
    const weather = await weatherService.getWeather(country);
    const air = await airQualityService.getAirQuality(country);
    const disasters = await disasterService.getDisasters(country);
    const climate = await climateService.getClimate(country);
    const news = await newsService.getNews(country);

    const response = {
      country,
      temperature: weather.temperature,
      humidity: weather.humidity,
      windSpeed: weather.windSpeed,
      airQuality: air.aqi,
      disasterAlerts: disasters.alerts,
      forestRisk: climate.forestRisk,
      seaLevelRisk: climate.seaLevelRisk,
      climateStatus: climate.status,
      latestNews: news.headlines
    };

    await Country.findOneAndUpdate(
      { name: country },
      { name: country, latestImpact: response, updatedAt: new Date() },
      { upsert: true, new: true }
    ).catch(() => null);

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch environmental data" });
  }
};
