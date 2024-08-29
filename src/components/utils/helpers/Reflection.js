export function createReflection(selector, reflectionClass = 'reflection') 
{
    const original = document.querySelector(selector);
    if (!original || document.querySelector(`.${reflectionClass}`)) return;

    const reflection = original.cloneNode(true);
    
    reflection.classList.add(reflectionClass);
    reflection.querySelectorAll('[id]').forEach(element => {
        element.id += '-ref';
    });

    reflection.style.transform = 'scaleY(-1)';
    reflection.style.opacity = '0.7';
    reflection.style.filter = 'blur(2px)';
    reflection.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent)';
    reflection.style.pointerEvents = 'none';

    
    original.parentNode.appendChild(reflection);
}