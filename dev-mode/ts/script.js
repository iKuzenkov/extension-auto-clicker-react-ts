function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const r = getRandomInt(0, 255);
  const g = getRandomInt(0, 255);
  const b = getRandomInt(0, 255);

  return `rgb(${r}, ${g}, ${b})`;
}

const colorBox = document.getElementById('color');
const button = document.getElementById('change-color');

if (colorBox && button) {
  button.addEventListener('click', () => {
    colorBox.style.backgroundColor = getRandomColor();
  });
}
