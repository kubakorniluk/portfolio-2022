import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.a`
    margin: 0;
    font-size: 125%;
    color: #ffffff;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        color: #584cea;
        transition: .5s;
    };
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 100%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 110%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 115%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 120%; }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 120%; }
`;

const Icon = ({ children }) => {
    return (
        <StyledIcon>
            { children }
        </StyledIcon>
    );
}

export default Icon;