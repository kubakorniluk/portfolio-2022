import React from 'react';
import './toggle.scss';

const ToggleSidebar = () => {
    return (
        <a className='sidebar__toggle'>
            <span className='sidebar__toggle--bar'></span>
            <span className='sidebar__toggle--bar'></span>
            <span className='sidebar__toggle--bar'></span>
        </a>
    );
}
 
export default ToggleSidebar;