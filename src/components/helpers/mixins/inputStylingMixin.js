import { css } from 'styled-components';
import responsiveTextMixin from '../../helpers/mixins/responsiveTextMixin';

//input styling in one place

const inputStylingMixin = css`
    ${ responsiveTextMixin }

    padding: 1rem;
    color: ${ ({ theme: { colors } }) => colors.violet };
    border: none;
    background-color: rgba(255, 255, 255, .05);
    width: 100%;
    :focus {
        background-color: rgba(255, 255, 255, .1);
    }
`;

export default inputStylingMixin;