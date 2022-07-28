import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Team() {
    let params = useParams();
    let teamId = parseInt(params.teamId, 10);
    const [team, setTeam] = useState([]);
    const getTeam = () => {
        axios.get(`http://localhost:8080/api/team/${teamId}`)
            .then(res => setTeam(res.data));
    };
    useEffect(() => getTeam(), [teamId]);

    return (
        <div className='showDataBox'>
            <section>
                <article className="teamInfo">
                    <h2>Team name: {team.name}</h2>
                    <p>City: {team.city}</p>
                    <p>Coach: {team.coachSurname}</p>
                    <NavLink to={`/teams/${team.id}/players`} state={team.name} key={team.id}
                        style={({ isActive }) => ({
                            color: isActive ? "white" : ""
                        })}>Players</NavLink>
                </article>
            </section>
            <section>
                <Outlet />
            </section>

        </div>
    )
}
export default Team;