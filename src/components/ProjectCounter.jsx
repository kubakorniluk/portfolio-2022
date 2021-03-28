import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProjectContext } from './ProjectContextProvider';

const StyledProjectCounter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
`;
const Counter = styled.small`
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    font-size: 115%;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) {
        font-size: 85%;
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        font-size: 90%;
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) {
        font-size: 100%;
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { 
        font-size: 105%;
    }
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { 
        font-size: 110%;
    }
`;
const Separator = styled.span`
    display: block;
    width: 3em;
    height: .1em;
    background-color: #584cea;
    margin: 0 1em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) {
        width: 2em;
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        width: 2.5em;
    }
`;

const ProjectCounter = () => {
    const { projectsData, currentProject } = useContext(ProjectContext);
    return (
        <StyledProjectCounter>
            <Counter>{ currentProject + 1 }</Counter>
            <Separator />
            <Counter>{ projectsData.length }</Counter>
        </StyledProjectCounter>
    );
}
 
export default ProjectCounter;