import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledSectionHeading = styled.h2`
    font-size: 145%;
    font-family: 'Inconsolata', monospace;
    font-weight: 500;
    color: ${ props => props.color || '#121212' };
    margin: 0;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 125%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 145%; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { font-size: 125%; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { font-size: 125%; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { font-size: 145%; }
`;

const SectionHeading = ({ 
    children,
    color, 
    ...props 
}) => {
    return (
        <StyledSectionHeading color={ color } { ...props }>
            { children }
        </StyledSectionHeading>
    );
}
 
export default SectionHeading;

SectionHeading.propTypes = {
    children: PropTypes.any.isRequired,
    color: PropTypes.string
}