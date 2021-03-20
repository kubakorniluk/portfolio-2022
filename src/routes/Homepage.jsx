import React from 'react';
import HomepageStyles from '../styles/homepageStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CursorTracker from '../components/CursorTracker';

const Homepage = () => {
    return (
        <>
            <CursorTracker />
            <HomepageStyles />
            <Header />
            <Footer />
        </>
    );
}
 
export default Homepage;