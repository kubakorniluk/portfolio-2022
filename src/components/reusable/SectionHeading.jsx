import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSectionHeading = styled.h2`
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

const SectionHeading = ({ children, ...props }) => {
    return (
        <StyledSectionHeading { ...props }>
            { children }
        </StyledSectionHeading>
    );
}
 
export default SectionHeading;

SectionHeading.propTypes = {
    children: PropTypes.any.isRequired
}