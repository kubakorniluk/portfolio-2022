import React from 'react';
import styled from 'styled-components';
import responsiveTextMixin from '../../helpers/mixins/responsiveTextMixin';

const StyledLabel = styled.label.attrs(
    ({ labelFor }) => ({
        htmlFor: labelFor
    })
)`
    ${ responsiveTextMixin }

    color: ${ ({ theme: { colors } }) => colors.white };
`;

const Label = ({ text }) => {
    return (
        <StyledLabel>{ text }</StyledLabel>
    );
}
 
export default Label;