import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ProjectContextProvider from './ProjectContextProvider';
import Header from './Header';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Main from './Main';
import Bio from './Bio';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
    *, *:before, *:after { box-sizing: border-box; }
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
    a { text-decoration: none; }
`;

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Header>
                <Navbar />
                <Welcome />
            </Header>
            <Main>
                <Bio />
                <ProjectContextProvider>
                    <Portfolio />
                </ProjectContextProvider>
                <Contact />
            </Main>
            <Footer />
        </>
    );
}

export default App;