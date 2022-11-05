import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledIcon = styled.a`
    margin: 0;
    font-size: 150%;
    color: ${props => props.primary ? '#ffffff' : '#121212'};
    text-decoration: none;
    &:hover {
        cursor: pointer;
        color: #584cea;
    };
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 150%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 175%; }
`;

const Icon = ({ 
    children, 
    href, 
    ...props 
}) => {
    return (
        <StyledIcon 
            href={ href } 
            target="_blank" 
            { ...props }
        >
            { children }
        </StyledIcon>
    );
}

export default Icon;

Icon.propTypes = {
    children: PropTypes.any.isRequired,
    href: PropTypes.string.isRequired
}