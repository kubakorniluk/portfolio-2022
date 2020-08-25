import React from 'react';
import Icon from '../icon/icon';
import './footer.scss';

function Footer() {
    return ( 
        <footer className="footer">
            <address className="footer__icons">
                <Icon name={['fab', 'facebook']}/>
                <Icon name={['fab', 'github']}/>
                <Icon name={['fab', 'codepen']}/>
            </address>
        </footer> 
    );
}
 
export default Footer;