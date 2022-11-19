import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ProjectContextProvider from './ProjectContextProvider';
import Theme from '../Theme';
import Header from './Header';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Main from './Main';
import Bio from './Bio';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={ Theme }>
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
            </ThemeProvider>
        </>
    );
}

export default App;

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
    *:focus { outline: 0; }
`;