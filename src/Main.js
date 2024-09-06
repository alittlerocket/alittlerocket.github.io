import React, { useState, useEffect } from 'react';
import { setDayOrNight } from './components/utils/utils';
import { initClock } from './components/utils/objects/Clock'; 
import { debounce } from './components/utils/Debounce';
import App from './App';

function Main() {

    useEffect(() => {
        // Start the clock and set the position of sun/moon and determine day/night
        initClock();
        setDayOrNight();
        const handleResize = debounce(() => {
            setDayOrNight();
        }, 200);

        // Handle resize event listeners.
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="all-content">
            <App />
        </div>
    );
}

export default Main;