import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`;

const Main = ({ children }) => {
    return (  
        <StyledMain>
            { children }
        </StyledMain>
    );
}
 
export default Main;

Main.propTypes = {
    children: PropTypes.any.isRequired
}