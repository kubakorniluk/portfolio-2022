import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    margin: 0;
    font-size: 110%;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    width: auto;
    text-decoration: underline;
    color: ${ props => props.color || '#121212' };
    &:hover {
        color: #584cea;
    }
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 90%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 100%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;

const Link = ({ 
    children,
    color, 
    href, 
    ...props 
}) => {
    return (
        <StyledLink
            color={ color } 
            href={ href } 
            { ...props }
        >
            { children }
        </StyledLink>
    );
}
 
export default Link;