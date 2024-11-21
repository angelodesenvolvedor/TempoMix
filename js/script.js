// Função para atualizar o relógio
function updateClock() {
    const now = new Date();

    // Relógio Digital
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('digital-time').textContent = `${hours}:${minutes}:${seconds}`;

    // Relógio Analógico
    const secondsDeg = (now.getSeconds() / 60) * 360;
    const minutesDeg = (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6; // Ajuste mais suave para minutos
    const hoursDeg = (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30;

    // Atualizar os ponteiros
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// Função para alternar entre modo escuro e claro e também entre analógico e digital
const toggleMode = () => {
    document.body.classList.toggle('dark-mode'); // Alterna o modo escuro
    document.body.classList.toggle('analog-mode'); // Alterna entre analógico e digital

    // Alterar texto do botão
    const button = document.getElementById('dark-mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = 'Modo Claro';
    } else {
        button.textContent = 'Modo Escuro';
    }
};

// Adicionar o evento de clique no botão
const darkModeButton = document.getElementById('dark-mode-toggle');
darkModeButton.onclick = toggleMode;

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);
updateClock(); // Executa a função uma vez para inicializar