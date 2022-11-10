import React from 'react';
import styled from 'styled-components';
import SectionHeading from './reusable/SectionHeading';
import Text from './reusable/Text';
import Link from './reusable/Link';

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1.75em;
    width: 100%;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { width: 100%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { width: 100%; }
`;

const Details = () => {
    return (
        <StyledDetails>
            <SectionHeading color="#ffffff">Współpraca</SectionHeading>
            <Text color="#ffffff">
                Wyznaję <b>zadaniowe podejście</b> do rozwiązywania problemów, co przekłada się na szybkie opracowanie <b>skutecznego planu działania</b>. 
                Moje projekty zawsze idą w parze z tożsamością marki klienta. 
                Pracuję z użyciem <b>najnowszych technologii</b>. 
                Lubię wyzwania. 
            </Text>
            <Text color="#ffffff">Pasujemy do siebie? Napisz do mnie!</Text>
            <Link color="#ffffff" href="mailto:hello@kubakorniluk.pl">hello@kubakorniluk.pl</Link>
        </StyledDetails>
    );
}
 
export default Details;