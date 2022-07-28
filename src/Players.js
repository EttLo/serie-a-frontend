import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Players() {
    const [input, setInput] = useState([]);
    // useEffect(() => getAllTeams(), []);
    const [query, setQuery] = useState([]);
    // setQuery(document.getElementById("searchPlayers").value)
    return (
        <div>
            <section className='verticalMenu'>
                <h2>Search By</h2>
                <div>
                    <button onClick={() => { setInput("nGoals") }}>Goals Scored</button>
                </div>
                <div>
                    <button onClick={() => { setInput("surname") }}>Surname</button>
                </div>
                <div>
                    <button onClick={() => { setInput("position") }}>Position</button>
                </div>
                <div>
                    <button onClick={() => { setInput("year") }}>Year</button>
                </div>
            </section>
            <section className='showDataBox'>
                <div className='showDataBox'>
                    <section>
                        <article className="teamInfo">
                            <input type={"text"} placeholder={`Search by: ${input}`} id="searchPlayers" />
                            <Link to="/player/playersearch" i={input} q={query} >{"=>"}</Link>
                        </article>
                    </section>
                    <section>
                        <Outlet />
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Players;