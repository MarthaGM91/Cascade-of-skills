const tools = document.querySelectorAll('.tool-item');
        const container = document.querySelector('#tools-container');
        let accumulatedHeight = 0;
        const gap = 16; // 1rem en píxeles

        tools.forEach((tool, index, array) => {
            const totalTools = array.length;
            const randomX = Math.random() * (container.offsetWidth - tool.offsetWidth);
            const randomRotation = Math.random() * 40 - 20;
            const randomDuration = Math.random() * 0.5 + 0.5;

            if (accumulatedHeight + tool.offsetHeight > container.offsetHeight) {
                accumulatedHeight = 0; // Reinicia la altura si sobresale
            }

            const invertedDelay = (totalTools - index - 1) * 0.3;

            tool.style.left = `${randomX}px`;
            tool.style.top = `${accumulatedHeight}px`;
            tool.style.setProperty('--rotation', `${randomRotation}deg`);

            const fixedDuration = 1; // Duración fija de 1 segundo
tool.style.animation = `fall ${fixedDuration}s ease-in-out ${invertedDelay}s forwards`;

            tool.addEventListener('click', () => {
                tool.style.animationPlayState = 'paused';
                tool.style.transform += 'rotate(45deg)';
            });

            accumulatedHeight += tool.offsetHeight + gap; // Actualiza la altura acumulada
        });
