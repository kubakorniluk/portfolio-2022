import { css } from 'styled-components';

//reusable responsive text styling

const responsiveTextMixin = css`
    font-size: ${ ({ theme: { textBreakpoints } }) => textBreakpoints.desktopM };
    font-family: ${ ({ theme: { fonts } }) => fonts.base };
    font-weight: 400;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { 
        font-size: ${ ({ theme: { textBreakpoints } }) => textBreakpoints.phoneS }; 
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { 
        font-size: ${ ({ theme: { textBreakpoints } }) => textBreakpoints.phoneM }; 
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { 
        font-size: ${ ({ theme: { textBreakpoints } }) => textBreakpoints.tabletS }; 
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { 
        font-size: ${ ({ theme: { textBreakpoints } }) => textBreakpoints.tabletM }; 
    } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { 
        font-size: ${ ({ theme: { textBreakpoints } }) => textBreakpoints.desktopS }; 
    }
`;

export default responsiveTextMixin;