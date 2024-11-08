const colorPalabra = document.querySelector('.color');
const button = document.querySelector('.button');
const container = document.querySelector('.container');


function changeColor(){
if (container.style.backgroundColor === "red") {
    container.style.backgroundColor = "darkblue";
    colorPalabra.innerHTML = "darkblue";
  } else {
    container.style.backgroundColor = "red";
    colorPalabra.innerHTML = "red"
  }

}

button.addEventListener("click", changeColor);
