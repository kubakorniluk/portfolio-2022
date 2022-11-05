import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    margin: 0;
    font-size: 100%;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    color: #584cea;
    width: auto;
    :hover { text-decoration: underline; }
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 90%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 100%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;

const Link = ({ 
    children, 
    href, 
    ...props 
}) => {
    return (
        <StyledLink href={ href } { ...props }>
            { children }
        </StyledLink>
    );
}
 
export default Link;