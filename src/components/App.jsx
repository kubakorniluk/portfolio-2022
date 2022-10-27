import React, { 
    useState, 
    useEffect,
    lazy, 
    Suspense 
} from 'react';
import { createGlobalStyle } from 'styled-components';
import ProjectContextProvider from './ProjectContextProvider';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
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
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })

    const handleResize = () => setScreenWidth(window.innerWidth);

    return (
        <>
            <GlobalStyles />
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </>
    );
}

export default App;