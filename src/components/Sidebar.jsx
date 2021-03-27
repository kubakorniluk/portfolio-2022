import React, { useState } from 'react';
import styled from 'styled-components';
import SidebarToggle from './SidebarToggle';

const StyledSidebar = styled.aside`
    position: fixed;
    z-index: 997;
    top: 0;
    right: 0;
    display: block;
    background-color: white;
    height: 100vh;
    transition: .5s;
`;


const Sidebar = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const handleSidebar = () => setIsOpen(!isOpen);

    return (  
        <>
            <SidebarToggle handleSidebar={handleSidebar} isOpen={isOpen}/>
            <StyledSidebar style={isOpen ? {width: '100vw'} : {width: 0}}>
                <h1>test string</h1>
            </StyledSidebar>
        </>
    );
}
 
export default Sidebar;