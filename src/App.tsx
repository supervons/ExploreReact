import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import service from './utils/service';

type WelcomeInfo = {
  title: string;
};

const App: React.FC<WelcomeInfo> = ({ title }) => {
  const [count] = useState<number>(0);
  useEffect(() => {
    const params = {
      loginId: 'test',
      passWord: 'test'
    };
    service({
      method: 'post',
      url: '/user/loginAction',
      data: params
    }).then(res => {
      console.log(JSON.stringify(res));
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {title} - {count}
        </p>
      </header>
    </div>
  );
};

export default App;
