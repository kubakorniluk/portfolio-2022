import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import image from '../assets/img/avatar.png'

const StyledImg = styled.img`
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translate(50%, 0%);
    height: 80vh;
    width: auto;
    opacity: 0.8;
    z-index: 0;
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { height:45vh; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { height:45vh; } 
`;

const StyledHeader = styled.header`
    position: relative;
    width: 100%;
    height: 95vh;
    background-color: #121212;
    overflow: hidden;
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { height:50vh; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { height:50vh; } 
    
`;

const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(12, 12, 12, .35);
    height: 95vh;
    width: 100%;
    padding: 2em 8em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { padding: 1.5em 2em; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { padding: 2em; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { height:50vh; padding: 2em 4em; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { height:50vh; padding: 2em 6em; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { padding: 2em 6em; }
`;

const Header = ({ children }) => {
    return ( 
        <StyledHeader>
            {/* when rendered as a component, attributes doesn't work */}
            <StyledImg src={ image } />
            <Overlay>
                { children }
            </Overlay>
        </StyledHeader>
    );
}
 
export default Header;

Header.propTypes = {
    children: PropTypes.any.isRequired
}