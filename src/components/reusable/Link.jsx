import styled from 'styled-components';
import PropTypes from 'prop-types';
import responsiveTextMixin from '../helpers/mixins/responsiveTextMixin';

const Link = styled.a.attrs(
    ({ href }) => ({
        target: '_blank',
        href: href
    })
)`
    // font size/family/weight
    ${ responsiveTextMixin }

    margin: 0;
    width: auto;
    text-decoration: underline;
    color: ${ ({ color, theme: { colors } }) => color || colors.dark };
    &:hover {
        color: ${ ({ theme: { colors } }) => colors.violet };
    }
`;
 
export default Link;

Link.propTypes = {
    color: PropTypes.string,
    href: PropTypes.string.isRequired
}