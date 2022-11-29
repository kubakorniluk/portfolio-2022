import React from 'react';
import styled from 'styled-components';
import { scrollDown } from '../../helpers/scrollDown';
import NavLink from './NavLink';

const StyledNavigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 6rem;
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { gap: 4rem; }
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