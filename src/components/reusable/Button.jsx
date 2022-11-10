import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    position: relative;
    display: block;
    /* if primary attribute is active, change button color */
    background-color: ${props => props.primary ? 'rgba(255, 255, 255, 0.15)' : 'rgb(238, 238, 238)'};
    border: 0;
    color: ${props => props.primary ? '#ffffff' : '#121212'};
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    font-size: 100%;
    margin: 0;
    padding: 1em 1.5em;
    transition: .1s;
    span {
        position: absolute;
        display: block;
        width: .5em;
        height: .5em;
        transition: .1s;
    }
    .top-left {
        border-top: .075em solid ${props => props.primary ? '#ffffff' : '#121212'};
        border-left: .075em solid ${props => props.primary ? '#ffffff' : '#121212'};
        top: 0;
        left: 0;
    }
    .top-right {
        border-top: .075em solid ${props => props.primary ? '#ffffff' : '#121212'};
        border-right: .075em solid ${props => props.primary ? '#ffffff' : '#121212'};
        top: 0;
        right: 0;
    }
    .bottom-left {
        border-bottom: .075em solid ${props => props.primary ? '#ffffff' : '#121212'};
        border-left: .075em solid ${props => props.primary ? '#ffffff' : '#121212'};
        bottom: 0;
        left: 0;
    }
    .bottom-right {
        border-bottom: .075em solid ${props => props.primary ? '#ffffff' : '#121212'};
        border-right: .075em solid ${props => props.primary ? '#ffffff' : '#121212'};
        bottom: 0;
        right: 0;
    }
    &:hover {
        cursor: pointer;
        background-color: ${props => props.primary ? '#ffffff' : '#121212'};
        color: ${props => props.primary ? '#121212' : '#ffffff'};
        .top-left {
            top: -.5em;
            left: -.5em;
        }
        .top-right {
            top: -.5em;
            right: -.5em;
        }
        .bottom-left {
            bottom: -.5em;
            left: -.5em;
        }
        .bottom-right {
            bottom: -.5em;
            right: -.5em;
        }
    }
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 90%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 95%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 90%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 90%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 95%; }
`;

const Button = ({ 
    children,
    type,
    onClick,
    ...props
}) => {
    return (
        <StyledButton 
            type={type} 
            onClick={onClick}
            { ...props }
        >
            <span className="top-left"></span>
            <span className="top-right"></span>
            { children }
            <span className="bottom-left"></span>
            <span className="bottom-right"></span>
        </StyledButton>
    );
}
 
export default Button;

Button.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func
}