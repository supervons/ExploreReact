import React, { useEffect, useState } from 'react';
import service from '../../utils/service';
import './index.css';
import { Link } from 'react-router-dom';

type UserInfo = {
  id: string;
  match: {
    params: {
      id: '';
    };
  };
};

const Index: React.FC<UserInfo> = ({ match }) => {
  const [loginId] = useState<string>(match.params.id);
  useEffect(() => {
    const params = {
      loginId: loginId,
      passWord: 'test'
    };
    service({
      method: 'post',
      url: '/user/loginAction',
      data: params
    }).then(res => {
      console.log(JSON.stringify(res));
    });
  }, [loginId]);
  return (
    <div className="App">
      <header className="App-header">
        <p>Params id is {loginId}</p>
        <Link to="/">
          <p>Back home Page</p>
        </Link>
      </header>
    </div>
  );
};

export default Index;
