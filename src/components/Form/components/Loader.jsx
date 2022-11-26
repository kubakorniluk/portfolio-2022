import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const StyledLoader = styled.span`
    animation: ${ rotate } 1s linear infinite;
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    border: .25rem solid rgba(255, 255, 255, .05);
    border-radius: 50%;
    border-bottom: .25rem solid ${ ({ theme: { colors } }) => colors.violet };
`;

const Loader = () => {
    return (
        <StyledLoader />
    );
}
 
export default Loader;