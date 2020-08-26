import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

function Logo() {
    return (
        <h1 className="header__logo">
            <Link to="/">Kuba Korniluk</Link>
        </h1>
    );
}
 
export default Logo;