import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          App TWO
        </p>
        <a
          className="App-link"
          href="https://test-installable-one.herokuapp.com/"
          target="_blank"
        >
          GO TO APP ONE
        </a>
      </header>
    </div>
  );
}

export default App;
