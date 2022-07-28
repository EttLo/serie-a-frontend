import './App.css';
import { Link, Outlet } from 'react-router-dom';
import logoSerieA from './img/logoSerieA.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='NavBar'>
          <img className='logo' src={logoSerieA} alt='logo A' /> {" | "}
          <Link to="/teams">Teams</Link>{" | "}
          <Link to="/player">Players</Link>
        </nav>

        <body className='bodyData'>
          <Outlet />
        </body>
      </header>
    </div>
  );
}

export default App;
