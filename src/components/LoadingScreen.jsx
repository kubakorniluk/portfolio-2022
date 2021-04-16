import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const loading = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`;

const StyledLoadingScreen = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #070707;
`;
const ProgressBar = styled.div`
    position: relative;
    width: 30vw;
    height: .15em;
    background-color: rgb(20, 20, 20);
`;
const Bar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 997;
    width: 0;
    height: 100%;
    background-color: #584cea;
    animation: 1s linear forwards ${loading};
`;
const Value = styled.h3`
    font-family: 'Inconsolata', monospace;
    font-size: 110%;
    font-weight: 400;
    color: #ffffff;
    width: 100%;
    text-align: right;
`;

const LoadingScreen = () => {
    const value = '100%';
    return (
        <StyledLoadingScreen>
            <Main>
                <ProgressBar>
                    <Bar />
                </ProgressBar>
            </Main>
        </StyledLoadingScreen>
    );
}
 
export default LoadingScreen;