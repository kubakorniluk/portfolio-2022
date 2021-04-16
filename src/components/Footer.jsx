import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 6em 7.5em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { padding: 2em; justify-content: ${props => props.oneElement ? 'center' : 'space-between'}; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { padding: 2.5em; justify-content: ${props => props.oneElement ? 'center' : 'space-between'}; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { padding: 4em; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { padding: 4.5em; }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { padding: 3.5em 5em; }
`;

const Footer = ({ children, oneElement }) => {
    return ( 
        <StyledFooter>
            { children }
        </StyledFooter>
    );
}
 
export default Footer;

Footer.propTypes = {
    children: PropTypes.any.isRequired
}