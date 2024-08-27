import React, { useEffect } from 'react';
import { setDayOrNight } from './utils/utils';
import { debounce } from './utils/Debounce';
import App from './App';

function Main() {
  useEffect(() => {
    const handleResize = debounce(() => {
      setDayOrNight(); 
    }, 200);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <App />;
}

export default Main;
