import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" Component={LoginPage}/>
                <Route path="/signup" Component={SignupPage}/>
            </Switch>
        </Router>
    );
}

export default Routes;
