const btn = document.querySelector('#picker');

const colorDiv = document.getElementById('colorBox');

const colorDescription = document.getElementById('inner');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function getRandomHexCode() {
    const hexCharacters = '0123456789abcdef';
    let hexCode = '#';

    for (let i = 0; i < 6; i++) {
        hexCode += hexCharacters[random(15)];
    }

    return hexCode;
}

function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');

    const r = parseInt(hex.substring(0, 2), 16); 
    const g = parseInt(hex.substring(2, 4), 16); 
    const b = parseInt(hex.substring(4, 6), 16); 

    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', () => {
    const rndHex = getRandomHexCode();
    const rndRgb = hexToRgb(rndHex);

    colorDiv.style.backgroundColor = rndHex;

    colorDescription.textContent = `${rndHex} || ${rndRgb}`;
});