import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function SearchPlayers() {
    let location = useLocation();
    let input = location.i;
    let query = location.q;
    const [players, setPlayers] = useState([]);
    const getPlayers = (props) => {
        axios.get(`http://localhost:8080/api/player?${props.input}=${props.query}`)
            .then(res => setPlayers(res.data));
    };
    useEffect(() => getPlayers({ input, query }), [input, query]);
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
export default SearchPlayers;