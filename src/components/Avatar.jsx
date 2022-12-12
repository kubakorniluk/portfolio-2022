import styled from 'styled-components';

const Avatar = styled.img`
    position: absolute;
    bottom: 0;
    right: 25%;
    transform: translateX(25%);
    height: 82.5vh;
    width: auto;
    z-index: 0;
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { height: 65vh; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { height: 72.5vh; } 
`;

export default Avatar;
