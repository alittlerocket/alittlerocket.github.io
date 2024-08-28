import React, { useEffect } from 'react';
import { setDayOrNight } from './components/utils/utils';
import { initClock } from './components/utils/components/Clock'; 
import { debounce } from './components/utils/Debounce';
import App from './App';

function Main() {
    useEffect(() => {
        initClock();
        setDayOrNight();

        const handleResize = debounce(() => {
            setDayOrNight();
        }, 200);
  
        window.addEventListener('resize', handleResize);
  
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return <App />;
}

export default Main;