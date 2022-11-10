import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItemGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 1.75em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { gap: .75em; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { gap: 1em; }
`;

const ItemGroup = ({ children }) => {
    return (
        <StyledItemGroup>
            { children }
        </StyledItemGroup>
    );
}

export default ItemGroup;

ItemGroup.propTypes = {
    children: PropTypes.any.isRequired
}