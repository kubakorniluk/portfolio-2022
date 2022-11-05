import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSidebarToggle = styled.a`
    display: flex;
    flex-direction: column;
    float: right;
    z-index: 999;
`;

const StyledToggleBar = styled.span`
    display: block;
    width: 1.5em;
    height: .14em;
    background-color: ${props => props.color ? '#070707' : '#ffffff'};
    margin-left: auto; 
    transition: .5s;
    transform-origin: left center;
    &:nth-of-type(2) {
        width: 1em;
    }
`;

const SidebarToggle = ({ 
    handleSidebar,
    isOpen 
}) => {
    const [ toggle, setToggle ] = useState(false);
    const handleToggle = () => { setToggle(!toggle); handleSidebar(); }
    return (
        <StyledSidebarToggle onClick={handleToggle}>
            <StyledToggleBar color={isOpen} style={toggle ? {transform: 'translateY(-.08em) rotate(45deg)'} : null} />
            <StyledToggleBar color={isOpen} style={toggle ? {transform: 'scale(0)'} : null} />
            <StyledToggleBar color={isOpen} style={toggle ? {transform: 'translateY(.08em) rotate(-45deg)'} : null} />
        </StyledSidebarToggle>
    );
}
 
export default SidebarToggle;

SidebarToggle.propTypes = {
    handleSidebar: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}