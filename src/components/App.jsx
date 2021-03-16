import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from '../styles/globalStyles';
import Homepage from '../routes/Homepage';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}
export default App;