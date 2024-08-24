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