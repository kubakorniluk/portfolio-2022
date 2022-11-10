import React from 'react';
import Section from './reusable/Section';
import Details from './Details';

/* 
    * When extending styles, the role prop doesn't work and scrollDown can't be implemented 
    * Currently working on contact form design
*/ 

// const StyledContact = styled(StyledSection).attrs((props) => {
//     role: props.role
// })`
//     flex-direction: row;
//     justify-content: space-between;
//     gap: 2em;
//     padding-top: 6.25em;
//     padding-bottom: 3.25em;
//     background-color: #121212;
//     @media only screen and (min-width: 0px) and (max-width: 320.99px) { flex-direction: column; gap: 4.25em; }
//     @media only screen and (min-width: 321px) and (max-width: 576.99px) { flex-direction: column; gap: 4.25em; }
// `;

const Contact = () => {
    const contactStyling = {
        backgroundColor: '#121212',
        paddingTop: '5em',
        paddingBottom: '5em'
    }
    return (
        <Section role="contact" style={ contactStyling }>
            <Details />
        </Section>
    );
}
 
export default Contact;