import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialNavigation from './SocialNavigation';

const StyledNavbar = styled.nav`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;    
`;

const Navbar = () => {

    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);

    // const [ navStyle, setNavStyle ] = useState({});

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, { passive: true });
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // });

    // const handleScroll = () => window.scrollY > 0 ? setNavStyle(stickyNav) : setNavStyle(normalNav)
    
    const handleResize = () => setScreenWidth(window.innerWidth);

    // const normalNav = {
    //     position: 'relative',
    //     backgroundColor: 'transparent'
    // }
    // const stickyNav = {
    //     position: 'fixed',
    //     zIndex: '1',
    //     top: '0',
    //     left: '0',
    //     padding: 'inherit',
    //     paddingTop: '1.5rem',
    //     paddingBottom: '1.5rem',
    //     backgroundColor: 'rgba(18, 18, 18, .4)',
    //     backdropFilter: 'blur(2.5px)'
    // }
    return (
        <StyledNavbar>
            <Logo>Kuba Korniluk</Logo>
            { (screenWidth > 768) ? 
            <>
                <Navigation />
                <SocialNavigation /> 
            </> 
            : <SocialNavigation /> }
        </StyledNavbar>    
    );
}
 
export default Navbar;