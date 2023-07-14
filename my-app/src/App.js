import './App.css';
import React from 'react';
import CoronaInfoFunc from './Components/coronaInfoCards/coronaInfo';
import Header from './pages/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <CoronaInfoFunc/>
    </div>
  );
}

export default App;
