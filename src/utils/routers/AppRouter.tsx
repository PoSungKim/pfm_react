import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import React, { ReactElement, useEffect } from 'react';
import home from "../../components/homePage/home";

const history = createBrowserHistory();

const AppRouter: React.FC = (): ReactElement => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={home} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
};

export default AppRouter;

