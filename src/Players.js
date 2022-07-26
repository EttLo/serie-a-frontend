import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import searchIcon from './img/searchIcon.png'


function Players() {
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
                            <input type={"text"} placeholder={`Search by: ${input}`} id="search"
                                onChange={(event) => setQuery(event.target.value)} />
                            <Link to="/player/playersearch" state={[input, query]}>
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

export default Players;