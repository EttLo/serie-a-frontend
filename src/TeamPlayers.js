import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function TeamPlayers() {
    let teamName = useLocation().state;
    console.log(teamName);
    const [players, setPlayers] = useState([]);
    const getPlayersByTeamName = (props) => {
        axios.get(`http://localhost:8080/api/player?teamName=${props.teamName}`)
            .then(res => setPlayers(res.data));
    };
    useEffect(() => getPlayersByTeamName({ teamName }), [teamName]);
    return (
        <section>
            {
                players.map((player) => (
                    <article className="playersInfo" key={player.id}>
                        <h2>Surname: {player.surname}</h2>
                        <p>Name: {player.name}</p>
                        <p>date of birth: {player.dob}</p>
                        <p>Jersey n°: {player.jerseyNumber}</p>
                        <p>Position: {player.position}</p>
                    </article>
                ))
            }
        </section>
    )
}
export default TeamPlayers;