/**
 * @desc App layout page, including menu, title and layout container pages.
 * @author supervons
 * @date 2021/05/09
 */
import React, { useEffect, useState } from 'react';
import service from 'utils/service';
import './index.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Test from '../business/test';
import { Menu, Layout } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BugOutlined,
  LogoutOutlined
} from '@ant-design/icons';
const { Sider } = Layout;
type UserInfo = {
  id: string;
  history: {
    push: (routePath: string) => {};
  };
};

const Index: React.FC<UserInfo> = props => {
  // 定义type-script对象数组
  const [menuList] = useState<{ name: string; icon: object; path: string }[]>([
    { name: 'TEST-PAGE', icon: <BugOutlined />, path: '/sec/test-page' },
    { name: 'BACK-HOME', icon: <LogoutOutlined />, path: '/' }
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
    autoCollapsed();
  });

  function navPage(routePath: string) {
    props.history.push(routePath);
  }

  /**
   * When the browser width is less than 1080, collapse the menu
   */
  function autoCollapsed(): void {
    let resizeFlag: any = {};
    window.onresize = function () {
      if (resizeFlag !== {}) {
        clearTimeout(resizeFlag);
      }
      resizeFlag = setTimeout(function () {
        if (document.documentElement.clientWidth < 1080) {
          setCollapsed(true);
        }
      }, 500);
    };
  }

  /**
   * Left side bar.
   * @returns 
   */
  function sideBar(): JSX.Element{
    return (
      <Sider
      className="App-aside"
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="App-title">{collapsed ? 'E-R' : 'EXPLORE-REACT'}</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['TEST-PAGE']}>
        {menuList.map(res => {
          return (
            <Menu.Item
              key={res.name}
              icon={res.icon}
              onClick={() => navPage(res.path)}
            >
              {res.name}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>)
  }

  return (
    <div className="App">
      <main className="App-main">
        {sideBar()}
        <div className="App-content">
          <header className="App-header">
            {collapsed ? (
              <MenuUnfoldOutlined
                onClick={() => setCollapsed(collapsed => !collapsed)}
              />
            ) : (
              <MenuFoldOutlined
                onClick={() => setCollapsed(collapsed => !collapsed)}
              />
            )}
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
