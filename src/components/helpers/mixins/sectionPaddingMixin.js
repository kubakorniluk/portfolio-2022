import { css } from 'styled-components';

// padding for section elements

const sectionPaddingMixin = css`
    padding: 2rem 8rem;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { padding: 1.5rem }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { padding: 2rem; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { padding: 2rem 4rem; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { padding: 1.5rem 6rem; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { padding: 1.5rem 6rem; }
`;

export default sectionPaddingMixin;