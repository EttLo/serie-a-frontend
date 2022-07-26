import PlayerDetail from './PlayerDetail';
import axios from 'axios';
import { useState } from 'react';

function ButtonFindPlayerByMoreGoalsThan(props) {
    const [player, setPlayer] = useState([]);
    const getPlayersByTeamName = (nG) => {
        axios.get(`http://localhost:8080/api/player?nGoals=${nG}`)
            .then(res => setPlayer(res.data));
    };
    return (
        <section className='sectionColumn'>
            <button onClick={() => getPlayersByTeamName(props.nGoals)}>Scored more than {props.nGoals} goals</button>
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
export default ButtonFindPlayerByMoreGoalsThan;