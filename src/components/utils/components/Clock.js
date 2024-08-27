import { createReflection } from '../helpers/Reflection';

function updateClock() 
{
    const now = new Date();
    let hr = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = hr >= 12 ? "PM" : "AM";

    hr = hr % 12 || 12
    
    const pad = (n) => n.toString().padStart(2, '0');

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const values = {
        nameDay: week[now.getDay()],
        month: months[now.getMonth()],
        numDay: now.getDate(),
        year: now.getFullYear(),
        hour: pad(hr),
        minutes: pad(min),
        seconds: pad(sec),
        period: pe
    };

    Object.keys(values).forEach(id => {
        const element = document.getElementById(id);
        const refElement = document.getElementById(`${id}-ref`);
        if (element) element.textContent = values[id];
        if (refElement) refElement.textContent = values[id];
    });
}

export function initClock() 
{
    createReflection('.datetime');
    updateClock();
    window.setInterval(updateClock, 1000); // Update the clock every second
}


