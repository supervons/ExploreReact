import React from 'react';
import './index.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is home page!</p>
        <Link to="/sec">
          <p>To second Page</p>
        </Link>
      </header>
    </div>
  );
};

export default Index;
