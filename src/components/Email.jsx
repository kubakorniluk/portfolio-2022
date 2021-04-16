import React from 'react';
import styled from 'styled-components';

const StyledEmail = styled.a`
    display: block;
    margin: 0;
    color: #070707;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    font-size: 105%;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 85%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 90%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 95%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 100%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 95%; }
`;

const Email = ({ children }) => {
    return (
        <StyledEmail href="mailto:hello@kubakorniluk.pl">{ children ? children : 'hello@kubakorniluk.pl' }</StyledEmail>
    );
}
 
export default Email;