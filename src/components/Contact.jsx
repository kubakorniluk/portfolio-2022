import React from 'react';
import styled from 'styled-components';
import Section from './reusable/Section';
import Details from './Details';

const StyledContact = styled(Section).attrs(
    ({ role }) => ({
        role: role
    })
)`
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    padding-top: 6rem;
    padding-bottom: 6rem;
    background-color: ${ ({ theme: { colors } }) => colors.dark };
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { 
        flex-direction: column; 
        gap: 4.25rem; 
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { 
        flex-direction: column; 
        gap: 4.25rem; 
    }
`;

const Contact = () => {
    return (
        <StyledContact role="contact">
            <Details />
        </StyledContact>
    );
}
 
export default Contact;