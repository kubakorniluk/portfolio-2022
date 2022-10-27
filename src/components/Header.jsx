import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #121212;
    padding: 1.25em 6.25em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { padding: 1.5em 2em; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { padding: 2em; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { padding: 2em 4em; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { padding: 1.5em 6em; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { padding: 1.5em 6em; }
`;

const Header = ({ children }) => {
    return ( 
        <StyledHeader>
            { children }
        </StyledHeader>
    );
}
 
export default Header;

Header.propTypes = {
    children: PropTypes.any.isRequired
}