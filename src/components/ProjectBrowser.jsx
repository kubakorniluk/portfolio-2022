import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { ProjectContext } from './ProjectContextProvider';
import Project from './Project';
 
const StyledProjectBrowser = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) {
        width: 100%;
        height: 90%;
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        width: 100%;
        height: 90%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) {
        width: 80%;
        height: 80%;
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { 
        width: 70%;
        height: 80%;
    }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) {
    }
    
`;
const ProjectBrowser = () => {
    const { handleMouseWheel } = useContext(ProjectContext);
    useEffect(() => {
        setTimeout(
            () => {
                window.addEventListener('wheel', handleMouseWheel, { passive: true });
            }, 2000
        );
        return () => {
            setTimeout(
                () => {
                    window.removeEventListener('wheel', handleMouseWheel, { passive: true });
                }, 2000
            );
        }
    });
    return ( 
        <StyledProjectBrowser>
            <Project />
        </StyledProjectBrowser>
    );
}
 
export default ProjectBrowser;
