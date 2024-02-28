import React from "react";
import "./styles.css";

const CitiesSelector = ({
  selectedCityValue,
  handleCityChange,
  listOfCities,
}) => {
  return (
    <div className="cities-selector">
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
    </div>
  );
};

export default CitiesSelector;
