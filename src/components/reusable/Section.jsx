import styled from 'styled-components';
import PropTypes from 'prop-types';
import sectionPaddingMixin from '../helpers/mixins/sectionPaddingMixin';


const Section = styled.section.attrs(
    ({ role }) => ({
        id: role
    })
)`
    ${ sectionPaddingMixin }
    
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: transparent;
`;

export default Section;

Section.propTypes = {
    role: PropTypes.string.isRequired
}