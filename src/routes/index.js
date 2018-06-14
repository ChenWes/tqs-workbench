import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../components/Home';
import Login from '../components/Login';
import NoMatch from '../components/NoMatch';

export default () =>
    (<BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} exact />
            <Redirect from="/home" to="/" />
            <Route component={NoMatch} />
        </Switch>
    </BrowserRouter>);