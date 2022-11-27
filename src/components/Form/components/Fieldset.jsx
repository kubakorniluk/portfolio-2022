import React from 'react';
import styled from 'styled-components';

const StyledFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0;
    padding: 0;
    border: none;
    width: ${ ({ width }) => width || '100%' };
`;

const Fieldset = ({ children, width }) => {
    return (
        <StyledFieldset width={ width }>
            { children }
        </StyledFieldset>
    );
}
 
export default Fieldset;
