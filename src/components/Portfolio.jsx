import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProjectContext } from './ProjectContextProvider';
import Section from './reusable/Section';
import SectionHeading from './reusable/SectionHeading';
import Text from './reusable/Text'
import Project from './Project';

const StyledPortfolio = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.75em;
    width: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar { height: .25em; }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        box-shadow: inset 0 0 5px #969696;
    }
    ::-webkit-scrollbar-thumb {
        border-radius:10px;
        background-color: #584cea;
    }    
    ::-webkit-scrollbar-thumb:hover { background-color: rgba(88, 76, 234, .75); }
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
`;

const Portfolio = () => {

    const { projectsData } = useContext(ProjectContext)

    const portfolioStyling = {
        backgroundColor: '#EEEEEE',
        gap: '2.5em',
        // previuos padding + additional 5em
        paddingTop: '5em',
        paddingBottom: '5em'
    }

    return (
        <Section role="portfolio" style={ portfolioStyling }>
            <Heading>
                <SectionHeading>Portfolio</SectionHeading>
                <Text style={{color: '#969696'}}>Zbiór najbardziej wartych uwagi prac.</Text>
            </Heading>
            <StyledPortfolio>
                { projectsData.map(data => <Project key={data.id} data={data} />) }
            </StyledPortfolio>
        </Section>
    );
}
 
export default Portfolio;