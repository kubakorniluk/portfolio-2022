import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledLogo = styled.h1`
    display: block;
    margin: 0;
    color: #ffffff;
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    font-size: 100%;
    padding: 1em;
    &::after {
        content: '';
        display: block;   
        margin-top: .75em;
        width: 25%;
        height: .1em;
        background-color: #ffffff;
        transition: .75s ease;
    }
    &:hover::after {
        width: 100%;
    } 
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 85%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 90%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 95%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 90%; }
`;
const Logo = () => {
    return (
        <LogoContainer>            
                <StyledLogo>Kuba Korniluk</StyledLogo>
        </LogoContainer>     
    );
}
 
export default Logo;