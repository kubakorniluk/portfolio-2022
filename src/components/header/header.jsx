import React from 'react';
import './header.scss'
import Logo from './components/logo/logo.jsx'
import Sidebar from './components/sidebar/sidebar.jsx';
const Header = () => {
    return ( 
        <header className='header'>
            <Logo />
            <Sidebar />
        </header>
     );
}
 
export default Header;