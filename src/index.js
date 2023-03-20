import joke from "./joke";
import "./styles/main.scss";
import roller from "./assets/roller.svg";

const rollerImg = document.getElementById("rollerImg");
rollerImg.src = roller;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", joke);
joke();
