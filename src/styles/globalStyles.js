import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        user-select: none;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        cursor: none;
    }
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a:link {
        text-decoration: none;
    }
`;

export default GlobalStyles;