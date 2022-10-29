import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProjectContext } from './ProjectContextProvider';
import Section from './reusable/Section';
import Project from './Project';

const StyledPortfolio = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2em;
    width: 100%;
    overflow-x: scroll;
    padding: 4em 0;
    ::-webkit-scrollbar {
        height: 5px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        box-shadow: inset 0 0 5px #969696;
    }
    ::-webkit-scrollbar-thumb {
        border-radius:10px;
        background-color: #584cea;
    }    
    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(88, 76, 234, .75);
    }
`;

const Heading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const SectionTitle = styled.h2`
    font-size: 110%;
    font-family: 'Inconsolata', monospace;
    font-weight: 500;
    color: #969696;
    margin: 0;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 85%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 100%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;
const ProjectCounter = styled.h2`
    font-size: 110%;
    font-family: 'Inconsolata', monospace;
    font-weight: 500;
    color: #969696;
    margin: 0;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 85%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 100%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 100%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 95%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 100%; }
`;
const Portfolio = () => {

    const { projectsData } = useContext(ProjectContext)

    const portfolioStyling = {
        backgroundColor: '#ebebeb',
        paddingTop: '5em',
        paddingBottom: '5em'
    }

    return (
        <Section role="portfolio" style={ portfolioStyling }>
            <Heading>
                <SectionTitle>$_#02/<span style={{color: '#584cea'}}>portfolio</span></SectionTitle>
                <ProjectCounter>{ projectsData.length } - { projectsData.length }</ProjectCounter>
            </Heading>
            <StyledPortfolio>
                { projectsData.map(data => <Project key={data.id} data={data} />) }
            </StyledPortfolio>
        </Section>
    );
}
 
export default Portfolio;