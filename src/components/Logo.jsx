import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.h1`
    display: inline-block;
    margin: 0;
    color: #ffffff;
    font-family: 'Quicksand', sans-serif;
    font-weight: normal;
    font-size: 110%;
    &::after {
        content: '';
        display: block;   
        margin-top: 0.75em;
        width: 25%;
        height: 0.1em;
        background-color: #ffffff;
        transition: 0.75s ease;
        cursor: pointer;

    }
    &:hover::after {
        width: 100%;
    } 
    a {
        color: #ffffff;
    }
    @media only screen and (min-width: 0px) and (max-width: 576.99px) {
        font-size: 90%;
    }
    @media only screen and (min-width: 769px) and(max-width: 1024.99px) { 
        font-size: 120%;
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