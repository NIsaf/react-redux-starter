import React from 'react';
import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';
import history from './history';
import PrivateRoute from './containers/PrivateRoute';
import Home from './views/home';
import Login from './views/login';
import Form from './views/form';
import Profile from './views/profile';
import NotFound from './views/not_found';

const AppRouter = () => (
    <Router history={ history }>
        <Switch>
            <PrivateRoute exact path="/" component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/form" component={ Form } />
            <Route path="/profile/:id" component={ Profile } />
            <Route path="*" component={ NotFound } />
        </Switch>
    </Router>
)

export default AppRouter;