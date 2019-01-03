import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import LandPage from './pages/index/LandPage';
import Home from './pages/home/Home';
import About from './pages/AboutCps/aboutcps';
import anten from './pages/anten/anten';

const Routes  = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandPage} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/anten" component={anten} />
            <Redirect from="*" to="/home" /> 
        </Switch>
    </BrowserRouter>
);

export default Routes;

