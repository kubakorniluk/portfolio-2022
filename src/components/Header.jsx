import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 6em;
    @media only screen and (min-width: 0px) and (max-width: 576.99px) {
        padding: 2.5em;
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) {
        padding: 4.5em;
    }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { 
        padding: 5em;
    }
`;

const Header = () => {
    return ( 
        <StyledHeader>
            <Logo />
        </StyledHeader>
    );
}
 
export default Header;