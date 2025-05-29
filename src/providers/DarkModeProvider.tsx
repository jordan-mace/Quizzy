
import React, { useState, useEffect } from 'react';
import { DarkModeContext } from './DarkModeContext';
import { darkStyle, lightStyle } from '../global.css';

function DarkModeProvider({ children }: { children: React.ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = sessionStorage.getItem('darkMode');
        if (savedMode) {
            setIsDarkMode(savedMode === 'true');
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('darkMode', String(isDarkMode));

        if (isDarkMode) {
            document.body.classList.remove(lightStyle)
            document.body.classList.add(darkStyle)
        } else {
            document.body.classList.remove(darkStyle)
            document.body.classList.add(lightStyle)
        }
    }, [isDarkMode]);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export default DarkModeProvider;