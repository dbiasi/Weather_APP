import { useState } from "react";
import fetchListOfCities from "./fetchListOfCities";
import fetchCityData from "./fetchCityData";
import Search from "./Search";
import CitiesSelector from "./CitiesSelector";
import WheatherCard from "./WheatherCard";
import "./styles.css";

function WheatherApp() {
  // State to store the city name
  const [cityName, setCityName] = useState("");
  const [limit, setLimit] = useState("1");
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [isLoadingCyteData, setIsLoadingCyteData] = useState(false);

  // State to store the list of cityes with the same name
  const [listOfCities, setListOfCities] = useState([]);
  // State to store the selected city
  const [selectedCityValue, setSelectedCityValue] = useState("");

  // State to store the City weather data
  const [cityWeatherData, setCityWeatherData] = useState();

  // State to store the icon id
  const [iconURL, setIconURL] = useState("");

  // OpenWeatherMap API key
  const apiKey = "4cd10c922a2f26ff56fe3e02d2a34a1e";

  // Set the cityName variable to the value of the input field
  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  // Select the number of cities with same name the app will show
  const handleSelectChange = (event) => {
    setLimit(event.target.value);
  };

  // handle the select city field
  const handleCityChange = (event) => {
    // show-me the number of the city selected
    const index = event.target.value;
    setSelectedCityValue(index);

    // the city object with informations as lat and lon
    const selectedCity = listOfCities[index];

    const lat = selectedCity.lat;
    const lon = selectedCity.lon;

    // call the function with information to get the wheather data based on the latitude and longitude
    fetchCityData(
      lat,
      lon,
      apiKey,
      setIconURL,
      setCityWeatherData,
      setIsLoadingCyteData
    );
  };

  // call the function to retriave the list of cities with the same name.
  const handleFetchCities = () => {
    fetchListOfCities(
      cityName,
      limit,
      apiKey,
      setListOfCities,
      setIsLoadingCities
    );
  };

  return (
    <div className="app-container">
      <h1 className="title">Wheather APP</h1>
      <Search
        cityName={cityName}
        limit={limit}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
        handleFetchCities={handleFetchCities}
      ></Search>
      {isLoadingCities ? (
        <h2 className="loading-cities">Loading...</h2>
      ) : (
        <CitiesSelector
          selectedCityValue={selectedCityValue}
          handleCityChange={handleCityChange}
          listOfCities={listOfCities}
        ></CitiesSelector>
      )}
      {isLoadingCyteData ? (
        <h2 className="loading-data">Loading...</h2>
      ) : (
        <div>
          {cityWeatherData ? (
            <WheatherCard
              cityWeatherData={cityWeatherData}
              iconURL={iconURL}
            ></WheatherCard>
          ) : (
            <p></p>
          )}
        </div>
      )}
    </div>
  );
}

export default WheatherApp;
