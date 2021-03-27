import React, { useState } from 'react';
import AppContext from './AppContext';

const ContextProvider = ({
    children
}) => {
    const [ text, setText ] = useState('test');
    return (
        <AppContext.Provider
            value={{
                text: text,
                setText: (text) => setText(text)
            }}
        >
            { children }
        </AppContext.Provider>
    )
}

export default ContextProvider;