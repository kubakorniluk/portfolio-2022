import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Sidebar from './Sidebar';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) {
        padding: 1em;
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        padding: 1.5em;
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) {
        padding: 3em;
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { 
        padding: 3.5em;
    }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { 
        padding: 3.5em;
    }
`;

const Header = () => {
    return ( 
        <StyledHeader>
            <Logo />
            <Sidebar />
        </StyledHeader>
    );
}
 
export default Header;