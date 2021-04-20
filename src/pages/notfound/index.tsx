import React from 'react';
import { Link } from 'react-router-dom';

const Index: React.FC<{}> = () => {
  return (
    <div>
      <div>页面走丢了！</div>
      <Link to="/">
        <p>Back home Page</p>
      </Link>
    </div>
  );
};

export default Index;
