import styled from 'styled-components';

const Avatar = styled.img`
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
    height: 82.5vh;
    width: auto;
    z-index: 0;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) {
        height: 80vh;
        right: 50%;
        transform: translate(50%, 0%);
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        height: 80vh; 
        right: 50%;
        transform: translate(50%, 0%);
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { height: 65vh; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { height: 65vh; } 
`;

export default Avatar;
