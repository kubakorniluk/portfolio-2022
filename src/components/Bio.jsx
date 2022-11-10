import React from 'react';
import styled from 'styled-components';
import Section from './reusable/Section';
import SectionHeading from './reusable/SectionHeading';
import Text from './reusable/Text';
import SocialNavigation from './SocialNavigation';

export const StyledBio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.75em;
    width: 50%;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { width: 100%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { width: 100%;  }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { width: 90%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { width: 90%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { width: 50%; }
`;

const Bio = () => {

    const bioStyling = {
        alignItems: 'center',
        paddingTop: '5em',
        paddingBottom: '5em',
        textAlign: 'center',
    }

    return (
        <Section role="bio" style={ bioStyling }>
            <StyledBio>
                <SectionHeading>Biogram</SectionHeading>
                <Text>
                    <b>Junior Front-End Developer</b>, artysta kombinator, człowiek renesansu. 
                    Specjalizuję się w tworzeniu unikatowych, dopracowanych w każdym calu <b>landing page’ów</b>. 
                    Aktualnie szukam stałej pracy na wyżej wymienionym stanowisku, jestem również dostępny jako <b>wolny strzelec</b>.
                </Text>
                <SocialNavigation color="#121212" />
            </StyledBio>
        </Section>
    );
}
 
export default Bio;