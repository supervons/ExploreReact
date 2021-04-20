import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/home';
import Second from '../pages/second';
import NotFound from '../pages/notfound';

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<div>加载中，请稍后</div>}>
      <Switch>
        <Route path={'/sec/:id'} component={Second} />
        <Route path={'/'} exact component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default Router;
