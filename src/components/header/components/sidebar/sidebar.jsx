import React from 'react';
import './sidebar.scss';
import ToggleSidebar from './toggle/toggle.jsx';
const Sidebar = () => {
    return (  
        <nav className='sidebar'>
            <ToggleSidebar />
        </nav>
    );
}
 
export default Sidebar;