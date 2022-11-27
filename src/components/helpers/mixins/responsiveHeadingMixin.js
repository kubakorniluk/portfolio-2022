import { css } from 'styled-components';

//reusable responsive heading styling

const responsiveHeadingMixin = css`
    font-size: ${ ({ theme: { headingBreakpoints } }) => headingBreakpoints.desktopM }; 
    font-family: ${ ({ theme: { fonts } }) => fonts.base };
    font-weight: 700;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { 
        font-size: ${ ({ theme: { headingBreakpoints } }) => headingBreakpoints.phoneS };
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { 
        font-size: ${ ({ theme: { headingBreakpoints } }) => headingBreakpoints.phoneM };
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { 
        font-size: ${ ({ theme: { headingBreakpoints } }) => headingBreakpoints.tabletS };
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { 
        font-size: ${ ({ theme: { headingBreakpoints } }) => headingBreakpoints.tabletM };
    } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { 
        font-size: ${ ({ theme: { headingBreakpoints } }) => headingBreakpoints.desktopS };
    }
`;

export default responsiveHeadingMixin;