const button = document.querySelector('.button');
const colorActual = document.querySelector('.color');

function changeColor() {
 
  document.body.style.backgroundColor = 'darkblue'; 
  colorActual.textContent = 'darkblue';
}

button.addEventListener('click', changeColor);

