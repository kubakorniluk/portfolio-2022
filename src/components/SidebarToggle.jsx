import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSidebarToggle = styled.a`
    display: flex;
    flex-direction: column;
    gap: .3em;
    padding: 1em;
    float: right;
    z-index: 999;
`;
const StyledToggleBar = styled.span`
    display: block;
    width: 1.5em;
    height: .14em;
    background-color: #ffffff;
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
        <StyledSidebarToggle style={isOpen ? {color: '#070707'} : {color: '#ffffff'}} onClick={handleToggle}>
            <StyledToggleBar style={toggle ? {transform: 'translateY(-.08em) rotate(45deg)'} : null} />
            <StyledToggleBar style={toggle ? {transform: 'scale(0)'} : null} />
            <StyledToggleBar style={toggle ? {transform: 'translateY(.08em) rotate(-45deg)'} : null} />
        </StyledSidebarToggle>
    );
}
 
export default SidebarToggle;