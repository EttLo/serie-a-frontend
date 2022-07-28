import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Team(props) {
    let params = useParams();
    let teamId = parseInt(params.teamId, 10);
    const [team, setTeam] = useState([]);
    const getTeam = () => {
        axios.get(`http://localhost:8080/api/team/${teamId}`)
            .then(res => setTeam(res.data));
    };
    useEffect(() => getTeam(), [teamId]);

    return (
        <article className="teamInfo">
            <h2>Team name: {team.name}</h2>
            <p>City: {team.city}</p>
            <p>Coach: {team.coachSurname}</p>
        </article>
    )
}
export default Team;