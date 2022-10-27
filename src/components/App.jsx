import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ProjectContextProvider from './ProjectContextProvider';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Navbar from './Navbar';

const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #ffffff;
        width: 100%;
        height: auto;
    }
    #root {
        display: flex;
        flex-direction: column;
    }
    a {
        text-decoration: none;
        color: #000000;
    }
`;

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header>
                <Navbar />
            </Header>
            <Main></Main>
            <Footer></Footer>
        </>
    );
}

export default App;