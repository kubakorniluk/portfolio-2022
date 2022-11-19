import styled from 'styled-components';
import responsiveTextMixin from './helpers/mixins/responsiveTextMixin';

const Logo = styled.a.attrs({
    href: 'https://kubakorniluk.pl/'
})`
    // font sizing
    ${ responsiveTextMixin }

    margin: 0;
    color: ${ ({ theme: { colors } }) => colors.white };
    font-family: ${ ({ theme: { fonts } }) => fonts.logo };
    font-weight: 700;
    cursor: pointer;
    // additional styling for mobile devices
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { 
        font-size: 1.15rem; 
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { 
        font-size: 1.25rem; 
    }
`;

export default Logo;