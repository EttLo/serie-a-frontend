import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Teams from './Teams';
import Team from './Team';
import Players from './Players';
import SearchPlayers from './SearchPlayers';
import SearchMatch from './SearchMatch';
import Match from './Match';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} >
              <Route path="playersearch" element={<SearchPlayers />} />
              <Route path="matchsearch" element={<SearchMatch />} />
            </Route>
          </Route>
          <Route path="player" element={<Players />}>
            <Route path="playersearch" element={<SearchPlayers />} />
          </Route>
          <Route path="match" element={<Match />}>
            <Route path="matchsearch" element={<SearchMatch />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
