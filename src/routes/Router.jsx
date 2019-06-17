import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '@/components/general/Header';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import { HOME_PAGE } from '@/constants';
import TestPage from './TestPage';
import DNDSortable from './DNDSortable';
import DragactPage from './DragactPage';

const RouterComponent = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <Router>
        <Switch>
          <Route path={HOME_PAGE} exact component={HomePage} />
          <Route path="/test" exact component={TestPage} />
          <Route path="/dnd-sortable" exact component={DNDSortable} />
          <Route path="/dragact" exact component={DragactPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};

export default React.memo(RouterComponent);
