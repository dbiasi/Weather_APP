import React from "react";
import "./styles.css";

const Search = ({
  cityName,
  limit,
  handleInputChange,
  handleSelectChange,
  handleFetchCities,
}) => {
  return (
    <div className="search-container">
      <div className="search-container-2">
        <input
          type="text"
          value={cityName}
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
      </div>
      <button onClick={handleFetchCities}>Search</button>
    </div>
  );
};

export default Search;
