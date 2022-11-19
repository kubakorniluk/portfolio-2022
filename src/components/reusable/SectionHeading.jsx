import styled from 'styled-components';
import PropTypes from 'prop-types';
import responsiveHeadingMixin from '../helpers/mixins/responsiveHeadingMixin';

const SectionHeading = styled.h1`
    // font size/weight/family
    ${ responsiveHeadingMixin }

    color: ${ ({ color, theme: { colors } }) => color || colors.dark200 };
    margin: 0;
`;
 
export default SectionHeading;

SectionHeading.propTypes = {
    color: PropTypes.string
}