import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./covid_stats.css";
import Pagination from "@mui/material/Pagination";
import ClipLoader from "react-spinners/ClipLoader";
import { countries } from "./countriesStats";
import CovidStatsCard from "../Components/covidStatsCard/covidStatsCard";

import Stack from "@mui/material/Stack";
const CovidStats = () => {
  const [covidStats, setCovidStats] = useState([]); 
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
  console.log(countries);
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
      {covidStats.map((el) => ( 
        <CovidStatsCard
        key={el.country}
        continent={el.continent}
        countryName={el.country}
        population={el.population}
        newCases={el.cases.new}
        deaths={el.deaths.total}
        countryImg={
          countries.find((flag) => flag.searchName === el.country)
            ? countries.find((flag) => flag.searchName === el.country).code.toLowerCase()
            : "xx"
        }
      /> 
        
      ))

        .slice(visitedPerPage, visitedPerPage + perPage)}
       <Stack spacing={2}>
        <Pagination className="pagination"
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
