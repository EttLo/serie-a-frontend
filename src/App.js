import './App.css';
import { Link, Outlet } from 'react-router-dom';
import logoSerieA from './img/logoSerieA.png'

function App() {
  return (
    <div className="App">
      <div>
        <nav className='NavBar'>
          <img id='logo' src={logoSerieA} alt='logo A' />
          <Link to="/teams">Teams</Link>
          <Link to="/player">Players</Link>
        </nav>

        <div className='bodyData'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
