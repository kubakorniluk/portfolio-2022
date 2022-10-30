import React from 'react';
import styled from 'styled-components';
import Section from './reusable/Section';
import Button from './reusable/Button';

const Heading = styled.h2`
    text-align: center;
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

const StyledBio = styled.p`
    text-align: center;
    font-size: 110%;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    color: #121212;
    line-height: 1.5em;
    width: 50%;
    margin: 0;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { 
        line-height: 1.75em;
        width: 100%; 
        font-size: 85%; 
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) {
        line-height: 2em; 
        width: 100%; 
        font-size: 100%; 
    }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) {
        line-height: 1.5em; 
        width: 90%; 
        font-size: 100%; 
    }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) {
        line-height: 1.5em; 
        width: 90%; 
        font-size: 95%; 
    } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) {
        line-height: 1.75em; 
        width: 50%; 
        font-size: 100%; 
    }
`;

const Bio = () => {
    const bioStyling = {
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1.75em',
        margin: '5em 0em'
    }
    return (
        <Section role="bio" style={ bioStyling }>
            <Heading>$_#01/<span style={{color: '#584cea'}}>bio</span></Heading>
            <StyledBio>
                <b>Junior Front-End Developer</b>, artysta kombinator, człowiek renesansu. 
                Specjalizuję się w tworzeniu unikatowych, wysoce interaktywnych <b>landing page’ów</b>. 
                Aktualnie szukam stałej pracy na wyżej wymienionym stanowisku, jestem również dostępny jako <b>wolny strzelec</b>.
            </StyledBio>
            <Button type="button">Współpraca</Button>
        </Section>
    );
}
 
export default Bio;