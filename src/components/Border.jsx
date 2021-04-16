import React from 'react';
import styled from 'styled-components';

const StyledBorderFragment = styled.span.attrs(props => ({
    className: props.class
}))`
    position: absolute;
    display: block;
    width: .5em;
    height: .5em;
    transition: .1s;
    & .top-left {
        border-top: .1em solid ${({color}) => color ? color : '#ffffff'};
        border-left: .1em solid ${({color}) => color ? color : '#ffffff'};
        top: 0;
        left: 0;
    }
    & .top-right {
        border-top: .1em solid ${({color}) => color ? color : '#ffffff'};
        border-right: .1em solid ${({color}) => color ? color : '#ffffff'};
        top: 0;
        right: 0;
    }
    & .bottom-left {
        border-bottom: .1em solid ${({color}) => color ? color : '#ffffff'};
        border-left: .1em solid ${({color}) => color ? color : '#ffffff'};
        bottom: 0;
        left: 0;
    }
    & .bottom-right {
        border-bottom: .1em solid ${({color}) => color ? color : '#ffffff'};
        border-right: .1em solid ${({color}) => color ? color : '#ffffff'};
        bottom: 0;
        right: 0;
    }
`;

const Border = ({
    color, 
    children
}) => {
    return (
        <>
            <StyledBorderFragment
                color={color} 
                class="top-left" 
            />
            <StyledBorderFragment 
                color={color} 
                class="top-right" 
            />
            { children }
            <StyledBorderFragment 
                color={color} 
                class="bottom-left" 
            />
            <StyledBorderFragment 
                color={color} 
                class="bottom-right" 
            />
        </>
    );
}
 
export default Border;