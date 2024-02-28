// Function to fetch city data
const fetchCityData = async (
  lat,
  lon,
  apiKey,
  setIconURL,
  setCityWeatherData,
  setIsLoadingCyteData
) => {
  if (lat && lon) {
    setIsLoadingCyteData(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIconURL(
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
      setCityWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoadingCyteData(false);
    }
  }
};

export default fetchCityData;
