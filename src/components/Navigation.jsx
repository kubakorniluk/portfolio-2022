import React from 'react';
import styled from 'styled-components';
import { scrollDown } from './reusable/scrollDown';

const StyledNavigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 6em;
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { gap: 3em; }
`;

const NavLink = styled.a`
    font-size: 100%;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    color: #ffffff;

    :hover {
        cursor: pointer;
        color: #584cea;
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 90%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 95%; }
`;

const Navigation = () => {
    return (
        <StyledNavigation>
            <NavLink onClick={ () => scrollDown('bio') }>Biogram</NavLink>
            <NavLink onClick={ () => scrollDown('portfolio') }>Portfolio</NavLink>
            <NavLink onClick={ () => scrollDown('contact') }>Współpraca</NavLink>
        </StyledNavigation>
    );
}
 
export default Navigation;