import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './app.scss';
import Homepage from '../../routes/homepage/index.jsx'

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