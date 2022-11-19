import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import Link from './Link';
import responsiveTextMixin from '../helpers/mixins/responsiveTextMixin';

const StyledLinkButton = styled(Link)`
    ${ responsiveTextMixin }

    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    gap: 1rem;
    color: ${ ({ theme: { colors } }) => colors.dark };
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    padding-bottom: .75rem;
    border-bottom: 1px solid ${ ({ theme: { colors } }) => colors.dark };
    cursor: pointer;
    :hover {
        border-bottom: 1px solid ${ ({ theme: { colors } }) => colors.violet };
        color: ${ ({ theme: { colors } }) => colors.violet };
    }
`;

const LinkButton = ({ href }) => {
    return (
        <StyledLinkButton href={ href }>
            <FontAwesomeIcon className="icon" icon={ faLink } />
            <span>Zobacz projekt</span>
            
        </StyledLinkButton>
    );
}
 
export default LinkButton;