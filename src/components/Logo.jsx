import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.h1`
    display: inline-block;
    margin: 0;
    color: #ffffff;
    font-family: 'Quicksand', sans-serif;
    font-weight: normal;
    font-size: 105%;
    padding: 1em;
    cursor: pointer;
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
    @media only screen and (min-width: 0px) and (max-width: 320.99px) {
        font-size: 90%;
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        font-size: 97.5%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) {
        font-size: 105%;
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { 
        font-size: 110%;
    }
`;

const Logo = () => {
    return (
        <StyledLogo>
            <Link to="/">
                Kuba Korniluk
            </Link>
        </StyledLogo>
    );
}
 
export default Logo;