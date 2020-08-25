import React from 'react';
import Logo from './components/logo/logo';
import Sidebar from './components/sidebar/sidebar';
import './header.scss';

function Header() {
    return ( 
        <header className="header">
            <Logo />
            <Sidebar />
        </header>
     );
}
 
export default Header;