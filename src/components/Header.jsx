import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import sectionPaddingMixin from './helpers/mixins/sectionPaddingMixin';
import avatar from '../assets/img/avatar.png'

const StyledHeader = styled.header`
    position: relative;
    width: 100%;
    height: 95vh;
    background-color: ${ ({ theme: { colors } }) => colors.dark };
    overflow: hidden;
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { height: 50vh; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { height: 50vh; } 
    
`;

const Overlay = styled.div`
    ${ sectionPaddingMixin }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(18, 18, 18, .35);
    height: 95vh;
    width: 100%;
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { height: 50vh; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { height: 50vh; } 
`;

const Header = ({ children }) => {
    return ( 
        <StyledHeader>
            <Avatar src={ avatar } />
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