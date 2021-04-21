import React from 'react';
import { NavLink } from 'react-router-dom';

const Index: React.FC<{}> = () => {
  return (
    <div>
      <div>页面走丢了！</div>
      <NavLink to="/">
        <p>Back home Page</p>
      </NavLink>
    </div>
  );
};

export default Index;
