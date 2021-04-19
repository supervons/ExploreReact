import React from 'react';
import './App.css';
import Router from './router';

type WelcomeInfo = {
  title: string;
};

const App: React.FC<WelcomeInfo> = ({}) => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
