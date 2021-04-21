import React, { useEffect, useState } from 'react';
import service from 'utils/service';
import './index.css';
import { Route, NavLink } from 'react-router-dom';

import Test from '../business/test';

type UserInfo = {
  id: string;
};

const Index: React.FC<UserInfo> = () => {
  // 定义type-script对象数组
  const [menuList] = useState<{ name: string; path: string }[]>([
    { name: 'TEST-PAGE', path: '/sec/test-page' },
    { name: 'BACK-HOME', path: '/' }
  ]);
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
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>This is header</p>
      </header>
      <main className="App-main">
        <aside className="App-aside">
          {menuList.map(res => {
            return (
              <p key={res.name}>
                <NavLink exact to={res.path} activeClassName="active">
                  {res.name}
                </NavLink>
              </p>
            );
          })}
        </aside>
        <div className="App-content">
          <Route path="/sec/test-page" component={Test} />
        </div>
      </main>
    </div>
  );
};

export default Index;
