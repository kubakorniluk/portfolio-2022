import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare} from '@fortawesome/free-brands-svg-icons/faGithubSquare.js';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin.js';
import ItemGroup from './ItemGroup';
import Icon from './Icon';

const StyledSocialNavigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`;

const SocialNavigation = ({ color }) => {
    return (
        <StyledSocialNavigation>
            <ItemGroup>
                <Icon 
                    href="https://github.com/kubakorniluk" 
                    target="_blank"
                    color={ color }
                >
                    <FontAwesomeIcon icon={ faGithubSquare } />
                </Icon>
                <Icon 
                    href="https://www.linkedin.com/in/kuba-korniluk-65383320b/" 
                    target="_blank"
                    color={ color }
                >
                    <FontAwesomeIcon icon={ faLinkedin } />
                </Icon>
            </ItemGroup>
        </StyledSocialNavigation>
    );
}
 
export default SocialNavigation;

SocialNavigation.propTypes = {
    color: PropTypes.string
}