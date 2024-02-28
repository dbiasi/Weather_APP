import React from "react";

const WheatherCard = ({ cityWeatherData, iconURL }) => {
  return (
    <div className="weatherCard-container">
      <div className="image-container">
        <img src={iconURL} alt="Weather Icon"></img>
        <h2>{cityWeatherData.weather[0].description}</h2>
      </div>
      <div className="wheatherData-container">
        <div>
          <div className="each-data-container">
            <p>Temp:</p>
            <p>{(cityWeatherData.main.temp - 273.15).toFixed(2)}°C</p>
          </div>
          <div className="each-data-container">
            <p>Feels like:</p>
            <p>
              {(cityWeatherData.main.feels_like - 273.15).toFixed(2)}
              °C
            </p>
          </div>
          <div className="each-data-container">
            <p>Clouds:</p>
            <p>{cityWeatherData.clouds.all}%</p>
          </div>
          <div className="each-data-container">
            <p>Wind:</p>
            <p>{cityWeatherData.wind.speed}m/s</p>
          </div>
        </div>
        <div>
          <div className="each-data-container">
            <p>Temp Min: </p>
            <p>{(cityWeatherData.main.temp_min - 273.15).toFixed(2)}°C</p>
          </div>
          <div className="each-data-container">
            <p>Temp Max:</p>
            <p>{(cityWeatherData.main.temp_max - 273.15).toFixed(2)}°C</p>
          </div>
          <div className="each-data-container">
            <p>Pressure:</p>
            <p>{cityWeatherData.main.pressure}hPa</p>
          </div>
          <div className="each-data-container">
            <p>Humidity:</p>
            <p>{cityWeatherData.main.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheatherCard;
