import PlayerDetail from './PlayerDetail';
import axios from 'axios';
import { useState } from 'react';

function ButtonFindByTeamName(props) {
  const [player, setPlayer] = useState([]);
  const getPlayersByTeamName = (tN) => {
    axios.get(`http://localhost:8080/api/player?teamName=${tN}`)
      .then(res => setPlayer(res.data));
  };
  return (
    <section className='sectionColumn'>
      <button onClick={() => getPlayersByTeamName(props.teamName)}>{props.teamName} players</button>
      {
        player.map(p => {
          return (
            <PlayerDetail key={p.id} player={p} />
          );
        })
      }
    </section>

  );
}
export default ButtonFindByTeamName;