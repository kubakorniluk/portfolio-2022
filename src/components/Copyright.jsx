import React from 'react';
import styled from 'styled-components';
import responsiveTextMixin from './helpers/mixins/responsiveTextMixin';

const StyledCopyright = styled.small`
    // font sizing
    ${ responsiveTextMixin }

    font-family: ${ ({ theme: { fonts } }) => fonts.logo };
    font-weight: 700;
    color: ${ ({ theme: { colors } }) => colors.white };
    margin: 0;
`;

const Copyright = () => {

    const displayCurrentDate = new Date().getFullYear();
    
    return (
        <StyledCopyright>&copy; Kuba Korniluk { displayCurrentDate }</StyledCopyright>
    );
}
 
export default Copyright;