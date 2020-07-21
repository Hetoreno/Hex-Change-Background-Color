const button = document.querySelector(".change");
const name = document.querySelector(".name-display");
const body = document.querySelector(".color");
button.addEventListener("click",changeColor);

function changeColor(){
    const value = '#'+Math.floor(Math.random()*16777215).toString(16);
    name.innerText = value;
    body.style.background = value;
}