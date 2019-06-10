import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import { HOME_PAGE } from '@/constants';

const RouterComponent = () => {
  return (
    <>
      <div className="header">
        <h1>Header</h1>
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
