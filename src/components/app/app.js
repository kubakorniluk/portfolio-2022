import React from 'react';
import './app.scss';
import Homepage from '../../routes/homepage/index.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;