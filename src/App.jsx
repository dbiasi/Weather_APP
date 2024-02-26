import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // State to stor the city name
  const [city, setCity] = useState("");
  const [limit, setLimit] = useState("1");

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

  // Function to fetch the list of cityes
  const fetchListOfCities = async () => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setListOfCities(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // Function to fetch city data
  const fetchCityData = async (lat, lon) => {
    if (lat && lon) {
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
      }
    }
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  // Function to handle the select limit field
  const handleSelectChange = (event) => {
    setLimit(event.target.value);
  };

  // handle the select city field
  const handleCityChange = (event) => {
    const index = event.target.value;
    setSelectedCityValue(index);
    const selectedCity = listOfCities[index];

    const lat = selectedCity.lat;
    const lon = selectedCity.lon;

    fetchCityData(lat, lon);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter City Name"
        />
        <select value={limit} onChange={handleSelectChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={fetchListOfCities}>Log Input</button>
      </div>
      <select value={selectedCityValue} onChange={handleCityChange}>
        <option value="" disabled>
          Select a city
        </option>
        {listOfCities.map((city, index) => (
          <option key={index} value={index}>
            Name: {city.name} State: {city.state} Country: {city.country}
          </option>
        ))}
      </select>
      <div>
        {cityWeatherData ? (
          <div>
            <p>Clouds: {cityWeatherData.clouds.all}%</p>
            <p>Wind: {cityWeatherData.wind.speed}m/s</p>
            <p>Temp: {(cityWeatherData.main.temp - 273.15).toFixed(2)}°C</p>
            <p>
              feels_like:{" "}
              {(cityWeatherData.main.feels_like - 273.15).toFixed(2)}°C
            </p>
            <p>
              temp_min: {(cityWeatherData.main.temp_min - 273.15).toFixed(2)}°C
            </p>
            <p>
              temp_max: {(cityWeatherData.main.temp_max - 273.15).toFixed(2)}°C
            </p>
            <p>pressure: {cityWeatherData.main.pressure}hPa</p>
            <p>humidity: {cityWeatherData.main.humidity}%</p>
            <p>main: {cityWeatherData.weather[0].main}</p>
            <p>description: {cityWeatherData.weather[0].description}</p>
            <img src={iconURL} alt="Weather Icon"></img>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default App;
