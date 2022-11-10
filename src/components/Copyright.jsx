import React from 'react';
import styled from 'styled-components';

const StyledCopyright = styled.small`
    font-size: 100%;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 90%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 100%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;

const Copyright = () => {

    const displayCurrentDate = new Date().getFullYear();
    
    return (
        <StyledCopyright>&copy; Kuba Korniluk { displayCurrentDate }</StyledCopyright>
    );
}
 
export default Copyright;