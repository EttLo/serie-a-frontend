import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import PlayerDetail from './PlayerDetail';

function App() {
  const [player, setPlayer] = useState([]);

  const getPlayersByTeamName = () => {
    axios.get("http://localhost:8080/api/player?teamName=INTER")
      .then(res => setPlayer(res.data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getPlayersByTeamName}>Get player data</button>
        {
          player.map(p => { /* editionDetail(e)*/
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
