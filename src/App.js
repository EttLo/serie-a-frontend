import './App.css';
import { Link, Outlet } from 'react-router-dom';
import logoSerieA from './img/logoSerieA.png'

function App() {
  return (
    <div className="App">
      <div>
        <nav className='NavBar'>
          <Link to="/">{<img id='logo' src={logoSerieA} alt='logo A' />}</Link>
          <Link to="/teams" className='navLink'>Teams</Link>
          <Link to="/player" className='navLink'>Players</Link>
          <Link to="/match" className='navLink'>Games</Link>
        </nav>

        <div className='bodyData'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
