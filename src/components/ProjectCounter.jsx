import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft.js';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight.js';
import { ProjectContext } from './ProjectContextProvider';

const StyledProjectCounter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    gap: 1.25em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { width: 100%; gap: 1.25em;}
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { width: 100%; gap: 1.5em;}
`;
const ControlButton = styled.i`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.075);
    padding: .6em .85em;
    color: #ffffff;
    transition: .1s;
    font-size: 100%;
    &:hover {
        background-color: #ffffff;
        color: #070707;
    }
`;
const Counter = styled.small`
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    font-size: 120%;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 90%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 100%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 105%; } 
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 110%; }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 105%; }
`;
const Separator = styled.span`
    display: block;
    width: 4em;
    height: .15em;
    background-color: #584cea;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { width: 100%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { width: 100%; }
`;

const ProjectCounter = () => {
    const { 
        projectsData, 
        currentProject, 
        handleProjectCounter 
    } = useContext(ProjectContext);
    return (
        <StyledProjectCounter>
            <ControlButton onClick={() => handleProjectCounter('PREVIOUS')}>
                <FontAwesomeIcon icon={faCaretLeft} />
            </ControlButton>
            <Counter>{ currentProject + 1 }</Counter>
            <Separator />
            <Counter>{ projectsData.length }</Counter>
            <ControlButton onClick={() => handleProjectCounter('PREVIOUS')}>
                <FontAwesomeIcon icon={faCaretRight} />
            </ControlButton>
        </StyledProjectCounter>
    );
}
 
export default ProjectCounter;