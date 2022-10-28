import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: transparent;
    padding: 1.25em 6.25em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { padding: 1.5em 2em; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { padding: 2em; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { padding: 2em 4em; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { padding: 1.5em 6em; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { padding: 1.5em 6em; }
`;

const Section = ({ 
    type, 
    style, 
    children 
}) => {
    return (
        <StyledSection id={type} style={style}>
            { children }
        </StyledSection>
    );
}
 
export default Section;

Section.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,
    style: PropTypes.object
}