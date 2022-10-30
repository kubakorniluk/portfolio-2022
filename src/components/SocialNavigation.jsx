import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons/faGithubSquare.js';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin.js';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons/faInstagramSquare.js';
import IconGroup from './reusable/IconGroup';
import Icon from './reusable/Icon';

const StyledSocialNavigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 2em;
`;

const SocialNavigation = () => {
    return (
        <StyledSocialNavigation>
            <IconGroup href="https://github.com/kubakorniluk" target="_blank">
                <Icon primary>
                    <FontAwesomeIcon icon={faGithubSquare} />
                </Icon>
                <Icon primary>
                    <FontAwesomeIcon icon={faLinkedin} />
                </Icon>
                <Icon primary>
                    <FontAwesomeIcon icon={faInstagramSquare} />
                </Icon>
            </IconGroup>
        </StyledSocialNavigation>
    );
}
 
export default SocialNavigation;