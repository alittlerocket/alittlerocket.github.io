import { initRain } from "./objects/Rain";
import { moveSun } from "./objects/Sun";
import { moveMoon } from "./objects/Moon";


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

