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
    padding: 2em;
    span {
        position: absolute;
        display: block;
        width: .75em;
        height: .75em;
        transition: .1s;
    }
    .top-left {
        border-top: .1em solid #ffffff;
        border-left: .1em solid #ffffff;
        top: 0;
        left: 0;
    }
    .top-right {
        border-top: .1em solid #ffffff;
        border-right: .1em solid #ffffff;
        top: 0;
        right: 0;
    }
    .bottom-left {
        border-bottom: .1em solid #ffffff;
        border-left: .1em solid #ffffff;
        bottom: 0;
        left: 0;
    }
    .bottom-right {
        border-bottom: .1em solid #ffffff;
        border-right: .1em solid #ffffff;
        bottom: 0;
        right: 0;
    }
    @media only screen and (min-width: 0px) and (max-width: 320.99px) {
        width: 100%;
        height: 90%;
        padding: 1em;
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        width: 100%;
        height: 90%;
        padding: 1.25em;
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) {
        width: 80%;
        height: 80%;
        padding: 1.5em;
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { 
        width: 70%;
        height: 80%;
        padding: 1.5em;
    }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) {
        padding: 1.5em;
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
            <span className="top-left"></span>
            <span className="top-right"></span>
            <span className="bottom-left"></span>
            <span className="bottom-right"></span>
            <Project />
        </StyledProjectBrowser>
    );
}
 
export default ProjectBrowser;
