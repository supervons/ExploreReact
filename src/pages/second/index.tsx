import React, { useEffect, useState } from 'react';
import service from 'utils/service';
import './index.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Test from '../business/test';
import { Menu } from 'antd';

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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['TEST-PAGE']}>
            {menuList.map(res => {
              return <Menu.Item key={res.name}>{res.name}</Menu.Item>;
            })}
          </Menu>
        </aside>
        <div className="App-content">
          <Switch>
            <Route path="/sec/test-page" component={Test} />
            <Redirect from="*" to="/404"></Redirect>
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default Index;
