import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const [now, setNow] = useState(0)
  const [hashTarget, setHashTarget] = useState('')
  const location = useLocation();
  useEffect(() => {
    setNow(Date.now());
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App TWO - {location.hash} - {now}
        </p>
        <input type="text" value={hashTarget} onChange={(e) => setHashTarget(e.target.value)} />
        <a
          className="App-link"
          href={`https://test-installable-one.herokuapp.com${hashTarget ? "#" + hashTarget : ''}`}
          target="app-one"
        >
          GO TO APP ONE
        </a>
      </header>
    </div>
  );
}

export default App;
