exports.getNews = async (country) => {
  return {
    headlines: [
      `${country}: climate monitoring update`,
      `${country}: air quality and weather situation`,
      `${country}: environmental risk analysis`
    ]
  };
};
