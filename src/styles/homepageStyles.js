import { createGlobalStyle } from 'styled-components';

const HomepageStyles = createGlobalStyle`
    body {
        background-image: url('http://rewalbud.pl/cc487fce856362d7f4c4c48c1913e84c.jpeg');
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
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
        background-color: rgba(0, 0, 0, .85);
        backdrop-filter: blur(5px) grayscale(1);
    }
`;

export default HomepageStyles;