import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';
const Logo = () => {
    return (
        <h1 className='navbar__logo'><Link to='/'>Kuba Korniluk</Link></h1>
    );
}
 
export default Logo;