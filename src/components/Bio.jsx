import React from 'react';
import Section from './reusable/Section';
import SectionHeading from './reusable/SectionHeading';
import Text from './reusable/Text';
import Button from './reusable/Button';

const Bio = () => {

    const bioStyling = {
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1.75em',
        margin: '5em 0em',
        textAlign: 'center',
    }

    return (
        <Section role="bio" style={ bioStyling }>
            {/* <SectionHeading>
                $_#01/<span style={{color: '#584cea'}}>bio</span>
            </SectionHeading> */}
            <Text>
                <b>Junior Front-End Developer</b>, artysta kombinator, człowiek renesansu. 
                Specjalizuję się w tworzeniu unikatowych, wysoce interaktywnych <b>landing page’ów</b>. 
                Aktualnie szukam stałej pracy na wyżej wymienionym stanowisku, jestem również dostępny jako <b>wolny strzelec</b>.
            </Text>
            <Button type="button">Współpraca</Button>
        </Section>
    );
}
 
export default Bio;