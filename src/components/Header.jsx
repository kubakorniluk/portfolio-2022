import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 5em;
`;

const Header = () => {
    return ( 
        <StyledHeader>
            <Logo />
        </StyledHeader>
    );
}
 
export default Header;