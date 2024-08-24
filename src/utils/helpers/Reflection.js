export function createReflection(selector, reflectionClass = 'reflection') 
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