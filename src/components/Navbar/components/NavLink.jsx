import styled from 'styled-components';
import PropTypes from 'prop-types';
import responsiveTextMixin from '../../helpers/mixins/responsiveTextMixin';

const NavLink = styled.a`
    // font size/family/weight
    ${ responsiveTextMixin }

    // adjusted font-size, because value from mixin is too large
    font-size: ${ ({ theme: { textBreakpoints } }) => textBreakpoints.desktopS };
    color: ${ ({ theme: { colors } }) => colors.white };
    cursor: pointer;
    margin: 0;
    :hover {
        color: ${ ({ theme: { colors } }) => colors.violet };
    }
`;

export default NavLink

NavLink.propTypes = {
    onClick: PropTypes.func.isRequired 
}