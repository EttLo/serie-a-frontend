import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import PlayerDetail from './PlayerDetail';

function App() {
  const [player, setPlayer] = useState([]);

  const getPlayersByTeamName = (teamName) => {
    let url = "http://localhost:8080/api/player?teamName=" + { teamName }
    axios.get()
      .then(res => setPlayer(res.data));
  };
  const getPlayersBye = () => {
    axios.get("http://localhost:8080/api/player?nGoals=1")
      .then(res => setPlayer(res.data));
  };


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getPlayersByTeamName("MILAN")}>Get player data</button>
        {
          player.map(p => {
            return (
              <PlayerDetail key={p.id} player={p} />
            );
          })
        }
      </header>
    </div>
  );
}

export default App;
