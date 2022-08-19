import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const [time, setTime] = useState(Date.now())
  const [hashTarget, setHashTarget] = useState('')
  const location = useLocation();
  useEffect(() => {
    setNow(Date.now());
    window.name = "app-two"
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App TWO - {location.hash}
        </p>
        <p>
          Time: {new Date(time).toString()}
        </p>
        <input type="text" value={hashTarget} onChange={(e) => setHashTarget(e.target.value)} />
        <a
          className="App-link"
          href={`https://test-installable-one.herokuapp.com${hashTarget ? "#" + hashTarget : ''}`}
          target="app-one"
        >
          GO TO APP ONE
        </a>
        <a
          className="App-link"
          href={`https://test-installable-one.herokuapp.com/${hashTarget ? "#" + hashTarget : ''}`}
          target="app-one"
        >
          GO TO APP ONE with /
        </a>
      </header>
    </div>
  );
}

export default App;
