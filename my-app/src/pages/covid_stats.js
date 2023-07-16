import React from "react";
import { useState } from "react";
import axios from "axios";
import "./covid_stats.css";
import { useQuery } from "react-query";
import {
  CovidFlagCard,
  CovidInfoPart,
  CovidStatsCard,
  CovidStatsMain,
} from "../Components/styleComponents/index.style";

const CovidStats = () => {
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "X-RapidAPI-Key": "3b19298a97mshc8c02c752874df7p11a258jsnd1e9799fa782",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  const fetchCoronaData = async () => {
    try {
      const response = await axios.request(options);
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const { data, isLoading, isError, error } = useQuery(
    "statistics",
    fetchCoronaData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const countries = require("country-data").countries;
  const arr = Object.keys(countries)
  console.log(arr);
  console.log(countries);
  const filteredArr = arr.filter(el => el.length < 3)

 const lowerArr = filteredArr.map((el) => {
  return el.toLowerCase()
 })
  console.log(lowerArr);



  return (
    <CovidStatsMain>
      {data.response.map((country) => (
       
        <CovidStatsCard>
          <CovidInfoPart>
            <h1 className="countryContinent">Continent: {country.continent}</h1>
            <h1 className="countryName">Country: {country.country}</h1>
            <ul className="casesInfo">
              <li>
                population:{""}
                <span className="population">{country.population}</span>
              </li>
              <li>
                New Cases:<span className="newCases">{country.cases.new}</span>{" "}
              </li>
              <li>
                Deaths:<span className="deaths">{country.deaths.new}</span>{" "}
              </li>
              <li></li>
            </ul>
          </CovidInfoPart>
          <CovidFlagCard>
            <img src={`https://cdn.jsdelivr.net/npm/svg-country-flags@1.2.10/png250px/xk.png`}/>
        
          </CovidFlagCard>
        </CovidStatsCard>
      ))}
    </CovidStatsMain>
  );
};

export default CovidStats;
