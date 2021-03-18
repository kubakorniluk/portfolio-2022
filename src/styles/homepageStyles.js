import { createGlobalStyle } from 'styled-components';

const HomepageStyles = createGlobalStyle`
    body {
        background-color: #070707;
        
        overflow: hidden;
    }
    a {
        color: #ffffff;
    }
    #root {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100vw;
        height: 100vh;
    }
`;

export default HomepageStyles;