import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledXTracker = styled.span`
    z-index: 998;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 1px;
    background-color: rgba(26, 30, 40, .35); 
    pointer-events: none;
`;
const StyledYTracker = styled.span`
    z-index: 998;
    position: absolute;
    left: 0;
    width: 1px;
    height: 100vh;
    background-color: rgba(26, 30, 40, .35); 
    pointer-events: none;
`;
const StyledCursor = styled.span`
    z-index: 999;
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    border: 1.5px solid rgba(88, 76, 234, 0.7);
    transform: translate(-55%, -55%);
    background-color: transparent;
    pointer-events: none;
`;

const CursorTracker = () => {
    const [ clientX, setClientX ] = useState(0);
    const [ clientY, setClientY] = useState(0);
    useEffect(() => {
        window.addEventListener('mousemove', handleTracker);
        return () => {
            document.removeEventListener("mousemove", handleTracker);
          };
    })
    const handleTracker = (event) => {
        const { clientY, clientX } = event;
        setClientX(clientX);
        setClientY(clientY);
    }
    return ( 
        <>
            <StyledXTracker style={{top: `calc(${clientY}px - .1em)`}}/>
            <StyledCursor style={{top:`calc(${clientY}px)`, left: `calc(${clientX}px)`}}/>
            <StyledYTracker style={{left: `calc(${clientX}px - .1em)`}} />
        </>
    );
}
 
export default CursorTracker;