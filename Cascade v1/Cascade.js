window.onload = function () {
    const tools = document.querySelectorAll('.tool-item');
    const containerHeight = document.getElementById('tools-container').offsetHeight;
    
    tools.forEach((tool, index) => {
        // Asignamos una posición aleatoria horizontal y un retraso aleatorio para la animación
        const randomX = Math.random() * 80; // valor aleatorio para X (0-80%)
        const delay = index * 0.5; // retraso entre cada elemento (en segundos)

        tool.style.left = `${randomX}%`;
        tool.style.transitionDelay = `${delay}s`;

        // Iniciamos la animación de caída
        setTimeout(() => {
            const randomEndPosition = containerHeight - (Math.random() * 50 + 50); // altura aleatoria de la pila
            tool.style.transform = `translateY(${randomEndPosition}px)`;
            tool.style.opacity = 1;
        }, delay * 1000);
    });
};

