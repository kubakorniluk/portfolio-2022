import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Text from './Text';

const loading = keyframes`
    from {
        width: 0%;
    } 
    to {
        width: 100%;
    }
`; 

const slideIn = keyframes`
    from {
        margin-bottom: -50vh;
    }
    to {
        margin-bottom: 1rem;
    }
`;

const slideOut = keyframes`
    from {
        margin-bottom: 1rem;
    }
    to {
        margin-bottom: -50vh;
    }
`;

const StyledAlert = styled.div`
    display: block;
    animation: 
        ${ slideIn } 1s forwards ease-out, 
        /* wait for the loading animation to end */
        ${ slideOut } 1s 5s forwards ease-in;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 2rem;
    margin-bottom: -50vh;
    text-align: center;
    background-color: rgba(88, 76, 234, .05);
    min-width: 20%;
    max-width: 100%;
    backdrop-filter: blur(1rem);
    font-size: ${ ({ theme: { textBreakpoints } }) => textBreakpoints.desktopS };
    :before {
        animation: ${ loading } 4s 1s forwards linear;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        height: .1rem;
        width: 0%;
        background-color: ${ ({ theme: { colors } }) => colors.violet };
    }
    @media only screen and (min-width: 0px) and (max-width: 320.99px) { 
        min-width: 80%;
    }
    @media only screen and (min-width: 321px) and (max-width: 576.99px) { 
        min-width: 80%;
    }
`;

const Alert = ({ message }) => {
    return (
        <StyledAlert>
            <Text color="#584cea">
                { message }
            </Text>
        </StyledAlert>
    );
}
 
export default Alert;

Alert.propTypes = {
    message: PropTypes.string.isRequired
}