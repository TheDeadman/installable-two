import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function getLink() {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3001"
  }
  return "https://test-installable-one.herokuapp.com";
}

function App() {
  const [time, setTime] = useState(Date.now())
  const [hashTarget, setHashTarget] = useState('')
  const location = useLocation();
  useEffect(() => {
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
          href={`${getLink()}`}
          target="app-one"
        >
          GO TO APP ONE ROOT
        </a>
        <a
          className="App-link"
          href={`${getLink()}/receive-shares${hashTarget ? "#" + hashTarget : ''}`}
          target="app-one"
        >
          GO TO APP ONE
        </a>

        <a
          className="App-link"
          href={`${getLink()}/receive-shares/${hashTarget ? "#" + hashTarget : ''}`}
          target="app-one"
        >
          GO TO APP ONE with /
        </a>
        <button onClick={() => {
          navigator.share({ 'x-title': "test", 'share-title': "Title", 'z-url': "http://web.dev" });
        }}>Share</button>
        {/* <a
          className="App-link"
          href={`web+testhandler://${hashTarget ? hashTarget : 'test'}`}
          target="app-one"
        >
          GO TO APP ONE
        </a>
        <a
          className="App-link"
          href={`web+test-handler-2://${hashTarget ? hashTarget : 'test'}`}
          target="app-one"
        >
          GO TO APP ONE
        </a>
        <a
          className="App-link"
          href={`web+test-handler-3://${hashTarget ? hashTarget : 'test'}`}
          target="app-one"
        >
          GO TO APP ONE
        </a> */}
      </header>
    </div>
  );
}

export default App;
