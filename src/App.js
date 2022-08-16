import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const [hashTarget, setHashTarget] = useState('')
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App TWO - {location.hash}
        </p>
        <input type="text" value={hashTarget} onChange={(e) => setHashTarget(e.target.value)} />
        <a
          className="App-link"
          href={`https://test-installable-two.herokuapp.com/${hashTarget ? "#" + hashTarget : ''}`}
          target="_blank"
        >
          GO TO APP ONE
        </a>
      </header>
    </div>
  );
}

export default App;
