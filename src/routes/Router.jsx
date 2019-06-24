import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '@/components/regions/Header';

import { HOME_PAGE } from '@/constants';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

const RouterComponent = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <Router>
        <Switch>
          <Route path={HOME_PAGE} exact component={HomePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};

export default React.memo(RouterComponent);
