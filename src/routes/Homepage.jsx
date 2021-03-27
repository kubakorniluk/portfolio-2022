import React, { useState, useEffect } from 'react';
import HomepageStyles from '../styles/homepageStyles';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Cursor from '../components/CursorTracker';
import ContextProvider from '../components/ContextProvider';

const Homepage = () => {
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    })
    const handleResize = () => setScreenWidth(window.innerWidth);
    return (
        <ContextProvider>
            { (screenWidth >= 1025) ? <Cursor /> : null }
            <HomepageStyles />
            <Header />
            <Main />
            <Footer />
        </ContextProvider>
    );
}
 
export default Homepage;