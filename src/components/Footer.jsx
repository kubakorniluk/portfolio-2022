import React from 'react';
import styled from 'styled-components';
import SocialNavigation from './SocialNavigation';
import Copyright from './Copyright';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #121212;
    width: 100%;
    padding: 1.25em 8em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { padding: 1.5em 2em; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { padding: 2em; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { padding: 2em 4em; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { padding: 1.5em 6em; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { padding: 1.5em 6em; }
`;

const Footer = () => {
    return ( 
        <StyledFooter>
            <SocialNavigation />
            <Copyright />
        </StyledFooter>
    );
}
 
export default Footer;