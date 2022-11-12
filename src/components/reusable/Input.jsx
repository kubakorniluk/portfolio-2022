import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
    width: 100%;
    padding: .5em;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #ffffff;
    color: #ffffff;
    font-size: 110%;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    :focus {
        outline: 0;
    }
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 90%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 100%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;

const Input = ({
    type,
    value,
    placeholder
}) => {
    return (
        <StyledInput 
            type={ type } 
            value={ value } 
            placeholder={ placeholder } 
        />
    );
}
 
export default Input;

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired
}