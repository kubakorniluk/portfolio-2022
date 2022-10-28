import React from 'react';
import styled from 'styled-components';
import Button from './reusable/Button';

const StyledNavigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 2em;
`;

const NavLink = styled.a`
    font-size: 100%;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    color: #ffffff;
    padding: 1em;
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
            <NavLink>Bio</NavLink>
            <NavLink>Portfolio</NavLink>
            <Button type="button" primary>Współpraca</Button>
        </StyledNavigation>
    );
}
 
export default Navigation;