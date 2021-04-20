import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Second from '../pages/second';

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>加载中，请稍后</div>}>
      <Switch>
        <Route path={'/sec/:id'} component={Second} />
        <Route path={'/'} component={Home} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default Router;
