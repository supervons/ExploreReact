import React, { useEffect, useState } from 'react';
import service from 'utils/service';
import './index.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Test from '../business/test';
import { Menu, Layout, Button } from 'antd';
const { Sider } = Layout;
type UserInfo = {
  id: string;
  history: {
    push: (routePath: string) => {};
  };
};

const Index: React.FC<UserInfo> = props => {
  // 定义type-script对象数组
  const [menuList] = useState<{ name: string; path: string }[]>([
    { name: 'TEST-PAGE', path: '/sec/test-page' },
    { name: 'BACK-HOME', path: '/' }
  ]);
  const [collapsed, setCollapsed] = useState<boolean>(false);

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

  function navPage(routePath: string) {
    props.history.push(routePath);
  }

  return (
    <div className="App">
      <main className="App-main">
        <Sider
          className="App-aside"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div style={{ height: '5vh' }} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['TEST-PAGE']}>
            {menuList.map(res => {
              return (
                <Menu.Item key={res.name} onClick={() => navPage(res.path)}>
                  {res.name}
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <div className="App-content">
          <header className="App-header">
            <Button type="primary" onClick={() => setCollapsed(s => !s)}>
              切换
            </Button>
          </header>
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
