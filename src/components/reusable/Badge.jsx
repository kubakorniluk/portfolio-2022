import styled from 'styled-components';

const Badge = styled.span`
    color: ${ ({ color, theme: { colors } }) => color ? colors[color] : colors.dark };
    font-weight: 500;
    font-size: .75rem;
    font-family: ${ ({ theme: { fonts } }) => fonts.base };
    padding: .25rem .5rem;
    border: 1px solid ${ ({ color, theme: { colors } }) => color ? colors[color] : colors.dark };
    /* border-radius: .8rem; */
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { font-size: .7rem; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { font-size: .8rem; }
`;

export default Badge;