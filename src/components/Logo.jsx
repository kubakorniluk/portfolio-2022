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
        height: 2px;
        background-color: #ffffff;
        transition: 0.75s ease;
        cursor: pointer;

    }
    &:hover::after {
        width: 100%;
    } 
`;

const Logo = () => {
    return (
        <Link to="/">
            <StyledLogo>
                Kuba Korniluk
            </StyledLogo>
        </Link>
    );
}
 
export default Logo;