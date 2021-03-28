import React from 'react';
import styled from 'styled-components';
import ProjectBrowser from './ProjectBrowser';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 6em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) {
        padding: 0 2em;
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        padding: 0 2.5em;
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) {
        padding: 0 4em;
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { 
        padding: 0 4.5em;
    }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { 
        padding: 0 4.5em;
    }
`;

const Main = () => {
    return (  
        <StyledMain>
            <ProjectBrowser />
        </StyledMain>
    );
}
 
export default Main;