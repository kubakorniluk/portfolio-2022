import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// when imported traditional way, an error occurs
import video from '-!file-loader!../assets/background/background.mp4'

const StyledHeader = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #121212;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(12, 12, 12, .4);
    height: 100vh;
    width: 100%;
    padding: 1.25em 8em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { padding: 1.5em 2em; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { padding: 2em; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { padding: 2em 4em; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { padding: 1.5em 6em; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { padding: 1.5em 6em; }
`;

const Header = ({ children }) => {
    const styledVideo = {
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: '100vh',
    }

    return ( 
        <StyledHeader>
            {/* when rendered as a component, attributes doesn't work */}
            <video 
                autoplay="true" 
                muted="true" 
                loop="true"
                style={ styledVideo }
            >
                <source src={ video } type="video/mp4"/>
            </video>
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