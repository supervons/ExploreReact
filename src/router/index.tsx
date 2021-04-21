import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Second from '../pages/second';
import NotFound from '../pages/notfound';

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>加载中，请稍后</div>}>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/sec'} component={Second} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default Router;
