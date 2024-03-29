import styled from 'styled-components';

const ItemGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    gap: 1.75em;
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { gap: .75em; }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { gap: 1em; }
`;

export default ItemGroup;