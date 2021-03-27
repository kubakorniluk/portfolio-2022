import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyles from '../styles/globalStyles';

const App = () => {
    const Homepage = lazy(() => import('../routes/Homepage'));
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Suspense fallback="Loading...">
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                    </Switch>   
                </Suspense>
            </BrowserRouter>
        </>
    );
}
export default App;