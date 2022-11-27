import styled from 'styled-components';
import PropTypes from 'prop-types';
import responsiveTextMixin from '../helpers/mixins/responsiveTextMixin';

const Text = styled.p`
    // font size/family/weight
    ${ responsiveTextMixin }

    color: ${ ({ color, theme: { colors } }) => color || colors.dark100 };
    line-height: 2.5rem;
    margin: 0;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { line-height: 2rem; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { line-height: 2.25rem; }
    @media only screen and (min-width: 577px) and (max-width: 768.99px) { line-height: 2.25rem; }
    @media only screen and (min-width: 769px) and (max-width: 1024.99px) { line-height: 2.5rem; } 
    @media only screen and (min-width: 1025px) and (max-width: 1366.99px) { line-height: 2.5rem; }
`;
 
export default Text;

Text.propTypes = {
    color: PropTypes.string
}