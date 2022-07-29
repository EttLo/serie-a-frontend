import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function SearchPlayers() {
    let input = useLocation().state[0];
    let query = useLocation().state[1];
    console.log(input)
    console.log(query);
    const [players, setPlayers] = useState([]);
    const getPlayers = (props) => {
        axios.get(`http://localhost:8080/api/player?${props.input}=${props.query}`)
            .then(res => setPlayers(res.data));
    };
    useEffect(() => getPlayers({ input, query }), [input, query]);
    return (
        <section className='grid-container'>
            {
                players.map((player) => (

                    <article className="playersInfo" key={player.id}>
                        <h2>{player.surname}</h2>
                        <p>{player.name}</p>
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