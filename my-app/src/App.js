import './App.css';
import React from "react";
import { useState } from 'react';
import Header from './pages/header';
import CoronaInfoFunc from './pages/coronaInfo';
import { Route, Routes } from 'react-router';
import CovidStats from './pages/covid_stats';
import AboutUs from './pages/about_us';
import CountryStats from './pages/country_stats';
// import { Icon } from '@rneui/themed';
// import { AiFillFacebook } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<CoronaInfoFunc/>} />
      <Route path='/covid_stats' element={<CovidStats/>} />
      <Route path='/country_stats' element={<CountryStats/>} />
      <Route path='/about_us' element={<AboutUs/>} />
      </Routes>
    </div>
  );
}

export default App;
