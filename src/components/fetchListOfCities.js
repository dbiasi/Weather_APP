// Function to fetch the list of cityes
const fetchListOfCities = async (
  city,
  limit,
  apiKey,
  setListOfCities,
  setIsLoadingCities
) => {
  setIsLoadingCities(true);
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    setListOfCities(data);
  } catch (error) {
    console.error("Error fetching data: ", error);
  } finally {
    setIsLoadingCities(false);
  }
};

export default fetchListOfCities;
