import React, { useEffect } from 'react';
import service from '../../utils/service';
import './index.css';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
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
        <Link to="/">
          <p>Back home Page</p>
        </Link>
      </header>
    </div>
  );
};

export default Index;
