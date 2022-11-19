import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProjectContext } from './ProjectContextProvider';
import Section from './reusable/Section';
import SectionHeading from './reusable/SectionHeading';
import Text from './reusable/Text'
import Project from './Project';

const StyledPortfolio = styled(Section).attrs(
    ({ role }) => ({
        id: role
    })
)`
    background-color: ${ ({ theme: { colors } }) => colors.grey100 };
    padding-top: 6rem;
    padding-bottom: 6rem;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.75rem;
    width: 100%;
    overflow-x: auto;
    padding: 4rem 0;

    // scrollbar styling
    ::-webkit-scrollbar { height: .25rem; }
    ::-webkit-scrollbar-track {
        border-radius: .5rem;
        box-shadow: inset 0 0 5px ${ ({ theme: { colors } }) => colors.grey300 };
    }
    ::-webkit-scrollbar-thumb {
        border-radius: .5rem;
        background-color: ${ ({ theme: { colors } }) => colors.violet };
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

    return (
        <StyledPortfolio role="portfolio">
            <Heading>
                <SectionHeading>Portfolio</SectionHeading>
                <Text>Zbiór najbardziej wartych uwagi prac.</Text>
            </Heading>
            <Content>
                { projectsData.map(data => <Project key={ data.id } data={ data } />) }
            </Content>
        </StyledPortfolio>
    );
}
 
export default Portfolio;