import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #121212;
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