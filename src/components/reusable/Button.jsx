import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import responsiveTextMixin from '../helpers/mixins/responsiveTextMixin.js';

const checkColor =  ({ primary, theme: { colors } }) => primary ? colors.white : colors.dark200;

const StyledButton = styled.button.attrs(
        ({ type }) => ({
            type: type
        })
    )`

    // font size/family/weight
    ${ responsiveTextMixin }

    font-size: 100%;
    position: relative;
    display: block;
    /* if primary attribute is active, change button color */
    background-color: ${ ({ primary, theme: { colors } }) => primary ? 'rgba(255, 255, 255, 0.1)' : colors.grey100 };
    border: 0;
    color: ${ checkColor };
    font-weight: 400;
    margin: 0;
    padding: .85rem 2rem;
    cursor: pointer;
    transition: .1s;
    span {
        position: absolute;
        display: block;
        width: .5rem;
        height: .5rem;
        transition: .1s;
    }
    .top-left {
        border-top: .075rem solid ${ checkColor }; 
        border-left: .075rem solid ${ checkColor };
        top: 0;
        left: 0;
    }
    .top-right {
        border-top: .075rem solid ${ checkColor };
        border-right: .075rem solid ${ checkColor };
        top: 0;
        right: 0;
    }
    .bottom-left {
        border-bottom: .075rem solid ${ checkColor };
        border-left: .075rem solid ${ checkColor };
        bottom: 0;
        left: 0;
    }
    .bottom-right {
        border-bottom: .075rem solid ${ checkColor };
        border-right: .075rem solid ${ checkColor };
        bottom: 0;
        right: 0;
    }
    :hover {
        background-color: ${ checkColor };
        color: ${ ({ primary, theme: { colors } }) => primary ? colors.dark : colors.white };
        .top-left {
            top: -.5rem;
            left: -.5rem;
        }
        .top-right {
            top: -.5rem;
            right: -.5rem;
        }
        .bottom-left {
            bottom: -.5rem;
            left: -.5rem;
        }
        .bottom-right {
            bottom: -.5rem;
            right: -.5rem;
        }
    }
`;

const Button = ({ 
    children,
    onClick,
    ...props
}) => {
    return (
        <StyledButton 
            onClick={ onClick }
            { ...props }
        >
            <span className="top-left"></span>
            <span className="top-right"></span>
            { children }
            <span className="bottom-left"></span>
            <span className="bottom-right"></span>
        </StyledButton>
    );
}
 
export default Button;

Button.defaultProps = {
    type: 'button'
}

Button.propTypes = {
    children: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    primary: PropTypes.bool
}