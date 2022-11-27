import React from 'react';
import styled from 'styled-components';
import Button from './reusable/Button';
// import Text from './reusable/Text';
import SectionHeading from './reusable/SectionHeading';
import { BioContent } from './Bio';
import { scrollDown } from './helpers/scrollDown';

const StyledWelcome = styled(BioContent)`
    align-items: start;
    margin-bottom: 2rem;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { margin-bottom: 0rem; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { margin-bottom: 0rem; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { margin-bottom: 0rem; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { margin-bottom: 1.25rem; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { margin-bottom: 2rem; }
`;

const BiggerHeading = styled(SectionHeading)`
    font-size: 5.5rem;
    font-weight: 800;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 3rem; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 4rem; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 5rem; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 6rem; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 5.5rem; }
`;

const Welcome = () => {
    return (
        <StyledWelcome>
            <BiggerHeading color="#ffffff">Tworzę internet.</BiggerHeading>
            {/* <Text color="#ffffff">
                A dokładniej jego część, z której właśnie korzystasz. Jestem Kuba, miło mi cię poznać. 
                Zajmuję się programowaniem jedynych w swoim rodzaju stron internetowych.
            </Text> */}
            <Button primary
                type="button"
                onClick={ () => scrollDown('contact') }
            >
                Współpraca
            </Button>
        </StyledWelcome>
    );
}
 
export default Welcome;