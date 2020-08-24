import React from 'react';
import './footer.scss';
import Icon from '../icon/icon.jsx';
const Footer = () => {
    return ( 
        <footer className='footer'>
            <address className='footer__icons'>
                <Icon name={['fab', 'facebook']}/>
                <Icon name={['fab', 'github']}/>
                <Icon name={['fab', 'codepen']}/>
            </address>
        </footer> 
    );
}
 
export default Footer;