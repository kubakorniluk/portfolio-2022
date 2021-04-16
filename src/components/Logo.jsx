import React from 'react';
import { Link } from 'react-router-dom';
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
    font-size: 105%;
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
const Location = styled.h2`
    margin: 0;
    color: rgb(100, 100, 100);
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    font-size: 105%;
    padding: 1em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 85%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 90%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 95%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 90%; }
`;
const Separator = styled.span`
    margin: 0;
    color: rgb(100, 100, 100);
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    font-size: 105%;
    padding: 1em 0;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 85%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 90%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 95%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 90%; }
`;
const Logo = () => {
    // const location = () => {
    //     const url = window.location.href.split('https://kubakorniluk.pl/');
    //     const cutUrl = url[1];
    //     if(cutUrl !== undefined) {
    //         if(cutUrl !== '') {
    //             /* 
    //                 * Looks for '?' because of the facebook clid that is passed to site url, and we don't want it here. 
    //                 * This function should return only the current route.
    //             */
    //             if(cutUrl.includes('?')) {
    //                 return cutUrl.substr(cutUrl.indexOf('?'), cutUrl.length)
    //             } else {
    //                 return cutUrl[0].toUpperCase() + cutUrl.substr(1, cutUrl.length);
    //             }
    //         }
    //         else {
    //             return cutUrl;
    //         }
    //     }
    // };
    return (
        <LogoContainer>
            <Link to="/">
                <StyledLogo>Kuba Korniluk</StyledLogo>
            </Link>
            {/* <Separator>/</Separator>
            <Location>{ location() }</Location> */}
        </LogoContainer>     
    );
}
 
export default Logo;