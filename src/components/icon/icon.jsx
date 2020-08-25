import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import './icon.scss';

library.add(faFacebook, faGithub, faCodepen);

function Icon(props) {
    return (
        <i className="icon">
            <FontAwesomeIcon icon={props.name} />
        </i>
    );
}
 
export default Icon;