import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.a`
    margin: 0;
    font-size: 125%;
    color: #${props => props.primary ? '#ffffff' : '#121212'};
    text-decoration: none;
    &:hover {
        cursor: pointer;
        color: #584cea;
    };
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 150%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 150%; }
`;

const Icon = ({ children, href }) => {
    return (
        <StyledIcon href={href} target="_blank">
            { children }
        </StyledIcon>
    );
}

export default Icon;