import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.a`
    margin: 0;
    color: #ffffff;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 110%;
    cursor: pointer;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 105%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 125%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;

const Logo = () => {
    return (
        <StyledLogo href="https://kubakorniluk.pl/">Kuba Korniluk</StyledLogo>
    );
}
 
export default Logo;