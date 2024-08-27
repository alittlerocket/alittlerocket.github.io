import { initRain } from "./components/Rain";
import { moveSun } from "./components/Sun";
import { moveMoon } from "./components/Moon";


export function setDayOrNight() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    
    if (currentHour >= 6 && currentHour < 18) {
        document.body.classList.add('day');
        document.body.classList.remove('night');
        moveSun();
    } else {
        document.body.classList.add('night');
        document.body.classList.remove('day');
        initRain();
        moveMoon();
    }
}

