import React from 'react';
import styled from 'styled-components';

const StyledIconGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 1.5em;
`;

const IconGroup = ({ children }) => {
    return (
        <StyledIconGroup>
            { children }
        </StyledIconGroup>
    );
}

export default IconGroup