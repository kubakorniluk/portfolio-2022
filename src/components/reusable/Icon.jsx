import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.a.attrs(
    ({ href }) => ({
        target: '_blank',
        href: href
    })
)`
    margin: 0;
    font-size: 150%;
    color: ${ ({ color, theme: { colors } }) => color || colors.white };
    text-decoration: none;
    cursor: pointer;
    &:hover { 
        color: ${ ({ theme: { colors } }) => colors.violet }; 
    }
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: 150%; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: 175%; }
`;

export default Icon;

Icon.propTypes = {
    href: PropTypes.string,
    color: PropTypes.string
}