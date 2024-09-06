export function moveMoon(testTime = null) 
{

    const moon = document.querySelector('.moon');

   // Determine if we're in the active period (6:00 PM to 6:00 AM)
   const currentTime = testTime || new Date();
   const totalSeconds = (currentTime.getHours() * 3600) + (currentTime.getMinutes() * 60) + currentTime.getSeconds(); 
   const startSeconds = 18 * 3600; // 6:00 PM
   const duration = 43200;

   // Determine angle
   const adjustedSeconds = (totalSeconds >= startSeconds)
       ? totalSeconds - startSeconds
       : totalSeconds + (24 * 3600) - startSeconds;
   const angle = (adjustedSeconds / duration) * Math.PI;

    function animate() 
    {
        const horizontalRadius = (window.innerWidth + 100) / 2;
        const verticalRadius = window.innerHeight / 3;
        const centerX = window.innerWidth / 2 + 50;
        const centerY = window.innerHeight / 2;
        const x = centerX + horizontalRadius * Math.cos(Math.PI-angle);
        const y = centerY + verticalRadius * Math.sin(-angle) - 100;

        moon.style.left = `${x-50}px`;
        moon.style.top = `${y}px`;

        requestAnimationFrame(animate);
    }

    animate(); 
}