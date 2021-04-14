import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    const params = {
      loginId: 'test',
      passWord: 'test'
    };
    axios({
      method: 'post',
      url: '/commonProject/user/loginAction',
      data: params
    }).then(res => {
      alert(JSON.stringify(res));
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
