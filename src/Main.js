import { debounce, setDayOrNight } from './utils';

function Main() {
  useEffect(() => {
    const handleResize = debounce(() => {
      setDayOrNight();  // Re-evaluate day/night mode on resize
    }, 200);

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <App />;
}

export default Main;
