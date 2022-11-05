import React from 'react';
import Section from './reusable/Section';
import Text from './reusable/Text';
import Link from './reusable/Link';

const Details = () => {

    const detailsStyling = {
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1.75em',
        margin: '5em 0em',
        textAlign: 'center',
    }

    return (
        <Section role="details" style={ detailsStyling }>
            <Text>
                Wyznaję <b>zadaniowe podejście</b> do rozwiązywania problemów, co przekłada się na szybkie opracowanie <b>skutecznego planu działania</b>. 
                Moje projekty zawsze idą w parze z tożsamością marki klienta. 
                Pracuję z użyciem <b>najnowszych technologii</b>. 
                Lubię wyzwania. 
                <br /><br />
                Pasujemy do siebie?
            </Text>
            <Link href="mailto:hello@kubakorniluk.pl">hello@kubakorniluk.pl</Link>
        </Section>
    );
}
 
export default Details;