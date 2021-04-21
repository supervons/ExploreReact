import React from 'react';
import styles from './index.module.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

const Index: React.FC<{}> = () => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>This is home page!</p>
        <NavLink
          activeStyle={{
            fontWeight: 'bold',
            color: '#ffffff'
          }}
          to={`/sec/test-page`}
        >
          <p>To second Page</p>
        </NavLink>
      </header>
    </div>
  );
};

export default Index;
