exports.getClimate = async (country) => {
  const data = {
    Canada: { forestRisk: "Medium", seaLevelRisk: "Low", status: "Warming trend" },
    India: { forestRisk: "High", seaLevelRisk: "Medium", status: "Heat stress increasing" },
    Australia: { forestRisk: "High", seaLevelRisk: "Medium", status: "Dryness and wildfire risk" },
    "United States": { forestRisk: "Medium", seaLevelRisk: "Medium", status: "Extreme weather increasing" },
    "United Kingdom": { forestRisk: "Low", seaLevelRisk: "Medium", status: "Rainfall variability" },
    Brazil: { forestRisk: "High", seaLevelRisk: "Medium", status: "Deforestation concern" },
    Japan: { forestRisk: "Medium", seaLevelRisk: "High", status: "Typhoon and sea-level risk" }
  };

  return data[country] || { forestRisk: "Medium", seaLevelRisk: "Medium", status: "Changing" };
};
