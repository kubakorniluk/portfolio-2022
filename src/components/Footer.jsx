import React from 'react';
import styled from 'styled-components';
import SocialNavigation from './SocialNavigation';
import Copyright from './Copyright';
import sectionPaddingMixin from './helpers/mixins/sectionPaddingMixin';

const StyledFooter = styled.footer`
    ${ sectionPaddingMixin }

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${ ({ theme: { colors } }) => colors.dark };
    width: 100%;
`;

const Footer = () => {
    return ( 
        <StyledFooter>
            <SocialNavigation />
            <Copyright />
        </StyledFooter>
    );
}
 
export default Footer;