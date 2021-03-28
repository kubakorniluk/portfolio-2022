import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import ProjectContextProvider from './ProjectContextProvider';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        user-select: none;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        cursor: none;
    }
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a:link {
        text-decoration: none;
    }
`;

const App = () => {
    const Homepage = lazy(() => import('../routes/Homepage'));
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Suspense fallback="Loading...">
                    <Switch>
                        <ProjectContextProvider>
                            <Route exact path="/" component={Homepage}/>
                        </ProjectContextProvider>
                    </Switch>   
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;