import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function SearchMatch() {
    let input = useLocation().state[0];
    let query = useLocation().state[1];
    const [games, setGames] = useState([]);
    const getGames = (props) => {
        axios.get(`http://localhost:8080/api/match?${props.input}=${props.query}`)
            .then(res => setGames(res.data));
    };
    useEffect(() => getGames({ input, query }), [input, query]);

    function countGoals(goals, teamId) {
        return goals.filter(goal => goal.teamId === teamId).length;
    }

    return (
        <section className='grid-container'>
            {
                games.map((match) => (
                    <article className="playersInfo" key={match.id}>
                        <h2>{match.homeTeamName} vs {match.awayTeamName}</h2>
                        <h2>{countGoals(match.goals, match.homeTeamId)}-{countGoals(match.goals, match.awayTeamId)}</h2>
                        {match.goals.map((goal) => (
                            <p key={goal.id}>{goal.teamName} {goal.playerSurname} {goal.minute}°</p>
                        ))}
                        <p>date: {match.matchDate}</p>
                        <p>championship: {match.championshipYear}/{match.championshipYear + 1}</p>
                    </article>
                ))
            }
        </section>
    )
}
export default SearchMatch;