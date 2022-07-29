import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import searchIcon from './img/searchIcon.png'


function Match() {
    const [input, setInput] = useState([]);
    const [query, setQuery] = useState([]);
    useEffect(() => {
        setQuery("");
        document.getElementById("search").value = "";
    }, [input]);
    return (
        <div>
            <section className='verticalMenu'>
                <h2>Search By</h2>
                <div>
                    <button onClick={() => { setInput("matchDate") }} id="btn">Date</button>
                </div>
                <div>
                    <button onClick={() => { setInput("teamName") }} id="btn">Team</button>
                </div>
                <div>
                    <button onClick={() => { setInput("homeTeamName") }} id="btn">Home team</button>
                </div>
                <div>
                    <button onClick={() => { setInput("awayTeamName") }} id="btn">Away team</button>
                </div>
                <div>
                    <button onClick={() => { setInput("goals") }} id="btn">Goals</button>
                </div>
                <div>
                    <button onClick={() => { setInput("year") }} id="btn">Championship year</button>
                </div>

            </section>
            <section className='showDataBox'>
                <div className='showDataBox'>
                    <section>
                        <article className="teamInfo">
                            <input type={"text"} placeholder={`Search by: ${input}`} id="search"
                                onChange={(event) => setQuery(event.target.value)} />
                            <Link to="/match/matchsearch" state={[input, query]}>
                                {<img className="searchIcon" src={searchIcon} alt="=>" />}
                            </Link>
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

export default Match;