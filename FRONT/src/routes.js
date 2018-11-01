import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import LandPage from './pages/index/LandPage';
import Home from './pages/home/Home';

const Routes  = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandPage} />
            <Route path="/home" component={Home} />
            <Redirect from="*" to="/home" />
        </Switch>
    </BrowserRouter>
);

export default Routes;

