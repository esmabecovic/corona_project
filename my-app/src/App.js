import './App.css';
import React from "react";
import { useState } from 'react';
import Header from './pages/header';
import CoronaInfoFunc from './Components/coronaInfoCards/coronaInfo';

function App() {
  return (
    <div className="App">
      <Header/>
      <CoronaInfoFunc/>
    </div>
  );
}

export default App;
