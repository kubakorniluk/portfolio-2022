import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledText = styled.p`
    font-size: 110%;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    color: #121212;
    line-height: 1.5em;
    width: 50%;
    margin: 0;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { 
        line-height: 1.75em;
        width: 100%; 
        font-size: 85%; 
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        line-height: 2em; 
        width: 100%; 
        font-size: 100%; 
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) {
        line-height: 1.5em; 
        width: 90%; 
        font-size: 100%; 
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) {
        line-height: 1.5em; 
        width: 90%; 
        font-size: 95%; 
    } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) {
        line-height: 1.75em; 
        width: 50%; 
        font-size: 100%; 
    }
`;

const Text = ({ children, ...props }) => {
    return (
        <StyledText { ...props }>
            { children }
        </StyledText>
    );
}
 
export default Text;

Text.propTypes = {
    children: PropTypes.any.isRequired
}