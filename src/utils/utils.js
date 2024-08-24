function createReflection(selector, reflectionClass = 'reflection') 
{
    const original = document.querySelector(selector);
    if (!original || document.querySelector(`.${reflectionClass}`)) return;

    const reflection = original.cloneNode(true);
    
    reflection.classList.add(reflectionClass);
    reflection.querySelectorAll('[id]').forEach(element => {
        element.id += '-ref';
    });
    
    original.parentNode.appendChild(reflection);
}

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

export function initRain()
{   
    // Clear raindrops
    document.querySelectorAll("hr").forEach(hr => hr.remove());

    // Fix overflow issue
    document.body.style.overflowX = 'hidden';

    let hrElement;
    let counter = 40;
    for (let i = 0; i < counter; i++)
    {
        hrElement = document.createElement("HR");
        hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px"; // Subtract a small value to avoid overflow
        hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
        hrElement.style.animationDelay = Math.random() * 5 + "s";
        document.body.appendChild(hrElement);
    }
}

export function moveMoon(testTime = null) 
{

    const moon = document.querySelector('.moon');

   // Determine if we're in the active period (6:00 PM to 6:00 AM)
    const currentTime = testTime || new Date();
    const totalSeconds = (currentTime.getHours() * 3600) + (currentTime.getMinutes() * 60) + currentTime.getSeconds(); 
    const startSeconds = 18 * 3600; // 6:00 PM
    const endSeconds = 6 * 3600; // 6:00 AM
	const duration = 43200;

    let angle;
    if (totalSeconds >= startSeconds || totalSeconds < endSeconds) {
        const adjustedSeconds = (totalSeconds >= startSeconds)
            ? totalSeconds - startSeconds
            : totalSeconds + (24 * 3600) - startSeconds;

        angle = (adjustedSeconds / duration) * Math.PI;
    } else {
        return;
    }

    function animate() 
    {
        const horizontalRadius = (window.innerWidth + 100) / 2;
        const verticalRadius = window.innerHeight / 3;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const x = centerX + horizontalRadius * Math.cos(Math.PI-angle) - 50;
        const y = centerY + verticalRadius * Math.sin(-angle) - 100;

        moon.style.left = `${x-50}px`;
        moon.style.top = `${y}px`;

        requestAnimationFrame(animate);
    }

    animate(); 
}

export function moveSun(testTime = null) 
{
    const sun = document.querySelector('.sun');

   // Determine if we're in the active period (6:00 AM to 6:00 PM)
    const currentTime = testTime || new Date();
    const totalSeconds = (currentTime.getHours() * 3600) + (currentTime.getMinutes() * 60) + currentTime.getSeconds(); 
    const startSeconds = 6 * 3600; // 6:00 AM
    const endSeconds = 18 * 3600; // 6:00 PM
	const duration = 43200;

    let angle;
    if (startSeconds <= totalSeconds && totalSeconds < endSeconds) {
        const adjustedSeconds = (totalSeconds >= startSeconds)
            ? totalSeconds - startSeconds
            : totalSeconds + (24 * 3600) - startSeconds;

        angle = (adjustedSeconds / duration) * Math.PI;
    } else {
        return;
    }

    function animate() 
    {
        const horizontalRadius = (window.innerWidth + 100) / 2;
        const verticalRadius = window.innerHeight / 3;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const x = centerX + horizontalRadius * Math.cos(Math.PI-angle) - 50;
        const y = centerY + verticalRadius * Math.sin(-angle) - 100;

        sun.style.left = `${x-50}px`;
        sun.style.top = `${y}px`;

        requestAnimationFrame(animate);
    }

    animate(); 
}

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

export function debounce(func, wait = 100) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}