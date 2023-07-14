import './App.css';
import React from "react";
import { useState } from 'react';
import Header from './pages/header';
import CoronaInfoFunc from './Components/coronaInfoCards/coronaInfo';
// import { Icon } from '@rneui/themed';
// import { AiFillFacebook } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <img src='https://www.universewithme.com/wp-content/uploads/2015/06/EU_visa_countries.svg_.png' className='targets'/>
      </div>
      <CoronaInfoFunc/>
    </div>
  );
}

export default App;
