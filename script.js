const border = document.querySelector('.box')
const colors = ['coral', 'chartreuse', 'ForestGreen', 'lightseagreen', 'Orange', 'RoyalBlue']

let colorIndex = 0

function changeColor() {
    border.style.borderColor = colors[colorIndex];
    colorIndex++;
    if (colorIndex === colors.length) colorIndex = 0;
}

setInterval(changeColor, 3000)