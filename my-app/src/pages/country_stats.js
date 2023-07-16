import React, { useState } from "react";
import axios from "axios";
import {
  CountryFlagCard,
  CountryInfoPart,
  CountryStatsCard,
  CountryStatsMain,
} from "../Components/styleComponents/index.style";
 
const CountryStats = () => {
  const [searchValue, setSearchValue] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
 
  const fetchCountryStats = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/statistics",
        headers: {
          "X-RapidAPI-Key": "cc28d2e5d1msh517cb34697fab94p106bddjsnb52786ff6b23",
          "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
        },
      };
 
      const response = await axios.request(options);
      const countryStats = response.data.response.find(
        (country) => country.country.toLowerCase() === searchValue.toLowerCase()
      );
 
      if (countryStats) {
        setCountryData(countryStats);
        setErrorMessage("");
      } else {
        setCountryData(null);
        setErrorMessage("Country not found");
      }
    } catch (error) {
      console.error(error);
      setCountryData(null);
      setErrorMessage("An error occurred while fetching data");
    }
  };
 
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
 
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchValue.trim() !== "") {
      fetchCountryStats();
    }
  };
 
  return (
    <CountryStatsMain>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter a country..."
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
      {countryData && (
        <CountryStatsCard>
          <CountryInfoPart>
            <h1 className="countryName">Country: {countryData.country}</h1>
            <ul className="casesInfo">
              <li>
                Population: <span className="population">{countryData.population}</span>
              </li>
              <li>
                New Cases: <span className="newCases">{countryData.cases.new}</span>
              </li>
              <li>
                Deaths: <span className="deaths">{countryData.deaths.new}</span>
              </li>
              <li>
                Recovered: <span className="recovered">{countryData.cases.recovered}</span>
              </li>
              <li>
                Total Active: <span className="totalActive">{countryData.cases.active}</span>
              </li>
            </ul>
          </CountryInfoPart>
          <CountryFlagCard>
            //<img Ne mogu nikako da napravim da se slika prikazuje ako budes znao prepravi pls />
          </CountryFlagCard>
        </CountryStatsCard>
      )}
    </CountryStatsMain>
  );
};
 
export default CountryStats;