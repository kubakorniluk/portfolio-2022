import React from 'react';
import Toggle from './toggle/toggle';
import './sidebar.scss';

function Sidebar() {
    return (  
        <nav className="sidebar">
            <Toggle />
        </nav>
    );
}
 
export default Sidebar;