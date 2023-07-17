import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./covid_stats.css";
import { useQuery } from "react-query";
import Pagination from "@mui/material/Pagination";
import ClipLoader from "react-spinners/ClipLoader";

import Stack from "@mui/material/Stack";
import {
  CovidFlagCard,
  CovidInfoPart,
  CovidStatsCard,
  CovidStatsMain,
} from "../Components/styleComponents/index.style";

const CovidStats = () => {
  const [covidStats, setCovidStats] = useState([]); 
  const [blogPosts, setBlogPosts] = useState([]);
  const [activePage, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [postsPerPage] = useState(10);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "X-RapidAPI-Key": "3b19298a97mshc8c02c752874df7p11a258jsnd1e9799fa782",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  const getDataCovidStats = () => {
    setLoading(true);
    axios.request(options).then(function (response) {
      setCovidStats(response.data.response);
      setLoading(false);
    });
  }

  const perPage = 12;

  const visitedPerPage = (activePage - 1) * perPage;

  const totalPages = Math.ceil(covidStats.length / perPage);

  useEffect(() => {
    getDataCovidStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="mainDiv">
    {loading ? (
      <>
        <ClipLoader color={"#ef6e6e"} size={45} />
        <h1 className="text-lg text-red-900">
          Loading data from covid-19 api.
        </h1>
      </>
    ) : (
      <>
      {covidStats.map((country) => (  
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
        ))
        .slice(visitedPerPage, visitedPerPage + perPage)}
       <Stack spacing={2}>
        <Pagination
          page={activePage}
          count={totalPages}
          onChange={handleChange}
        ></Pagination>
       </Stack>
       </>
       )}
   </div>
  );
};

export default CovidStats;
