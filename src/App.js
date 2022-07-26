import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import PlayerDetail from './PlayerDetail';
import ButtonFindByTeamName from './ButtonFindByTeamName';
import ButtonFindPlayerByMoreGoalsThan from './ButtonFindPlayerMoreGoalsThan';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ButtonFindByTeamName teamName="MILAN" />
        <ButtonFindByTeamName teamName="INTER" />
        <ButtonFindPlayerByMoreGoalsThan nGoals="1" />
      </header>
    </div>
  );
}

export default App;
