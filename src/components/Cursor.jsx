import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCursor = styled.span`
    z-index: 999;
    position: absolute;
    width: .5em;
    height: .5em;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: #584cea;
    pointer-events: none;
`;
const StyledCursorTracker = styled.span`
    z-index: 999;
    position: absolute;
    width: 1.75em;
    height: 1.75em;
    transform: translate(-50%, -50%);
    background-color: transparent;
    pointer-events: none;
    transition: .1s;
    span {
        position: absolute;
        display: block;
        width: .5em;
        height: .5em;
        transition: .1s;
    }
    .top-left {
        border-top: .1em solid #584cea;
        border-left: .1em solid #584cea;
        top: 0;
        left: 0;
    }
    .top-right {
        border-top: .1em solid #584cea;
        border-right: .1em solid #584cea;
        top: 0;
        right: 0;
    }
    .bottom-left {
        border-bottom: .1em solid #584cea;
        border-left: .1em solid #584cea;
        bottom: 0;
        left: 0;
    }
    .bottom-right {
        border-bottom: .1em solid #584cea;
        border-right: .1em solid #584cea;
        bottom: 0;
        right: 0;
    }
`;

const Cursor = () => {
    // const [ cursorPosition, setCursorPosition ] = useState({x: 0, y: 0});
    const [ mouseX, setMouseX ] = useState(0);
    const [ mouseY, setMouseY ] = useState(0);
    useEffect(() => {
        window.addEventListener('mousemove', handleCursorPosition);
        return () => {
            window.removeEventListener('mousemove', handleCursorPosition);
        };
    })
    const handleCursorPosition = (event) => {
        const { clientY, clientX } = event;
        setMouseX(clientX);
        setMouseY(clientY);
        // setCursorPosition({x: clientX, y: clientY})
    }
    // const { x, y } = cursorPosition;
    return ( 
        <>
            <StyledCursor style={{top: mouseY, left: mouseX}} />
            <StyledCursorTracker style={{top: mouseY, left: mouseX}}>
                    <span className="top-left"></span>
                    <span className="top-right"></span>
                    <span className="bottom-left"></span>
                    <span className="bottom-right"></span>
            </StyledCursorTracker>
        </>
    );
}
 
export default Cursor;