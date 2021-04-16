import React, { useState, useEffect, lazy, Suspense } from 'react';
import { 
    BrowserRouter, 
    Route, 
    Switch 
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Cursor from './Cursor';
import ProjectContextProvider from './ProjectContextProvider';
import LoadingScreen from './LoadingScreen';

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
    a {
        text-decoration: none;
        color: #ffffff;
    }
    *:focus {
        outline: 0;
    }
`;

const App = () => {
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })
    const handleResize = () => setScreenWidth(window.innerWidth);

    const Homepage = lazy(() => {
        return new Promise(resolve => {
            setTimeout(
                () => resolve(import('../routes/Homepage')), 
            1000)
        })
    });
    return (
        <>
            { (screenWidth >= 1024) ? <Cursor /> : null }
            <GlobalStyles />
            <BrowserRouter>
                <Suspense fallback={<LoadingScreen />}>
                    <Switch>
                        <Route exact path="/">
                            <ProjectContextProvider>
                                <Homepage />
                            </ProjectContextProvider>
                        </Route>
                    </Switch>   
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;