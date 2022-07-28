import { NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';




function Teams() {
    const [teams, setTeams] = useState([]);
    const getAllTeams = () => {
        axios.get(`http://localhost:8080/api/team`)
            .then(res => setTeams(res.data));
    };
    useEffect(() => getAllTeams(), []);
    return (
        <div>
            <section className='verticalMenu'>
                <h2>All teams</h2>
                {
                    teams.map((team) => (
                        <div key={team.id}>
                            <NavLink to={`/teams/${team.id}`}
                                key={team.id}
                                style={({ isActive }) => ({
                                    color: isActive ? "white" : ""
                                })}>
                                {team.name}
                            </NavLink>
                        </div>
                    ))
                }
            </section>
            <section className='showDataBox'>
                <Outlet />
            </section>
        </div>
    )
}
export default Teams;