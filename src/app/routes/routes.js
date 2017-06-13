import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import App from "../sciences/index";
import {ProtectedRoute} from './ProtectedRouteComponent';
import Login from "../sciences/login/index";
import {select} from "../services/select";
const history = createBrowserHistory();

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" render={() => (
                    select('isLogin') ?  (<Redirect to="/dashboard"/>) : (<Redirect to="/login"/>)
                )} />
                <Route exact path="/login" component={Login} />

                <ProtectedRoute path="/dashboard" component={App}/>
            </Switch>
        </Router>
    )
};

export default Routes;