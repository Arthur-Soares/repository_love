import {Word} from "./Word.js";
import {currentWord} from "./currentgame.js";

const alertBox = document.querySelector("#alert-box");
const gameKeyboard = document.querySelector("#keyboard-container")

function alert(alertText) {
    alertBox.innerHTML = alertText;
    alertBox.classList.add("visible");
    gameKeyboard.classList.remove("visible");
}

if (currentWord.mistakes == 6) {
    alert("Você errou! :(")
} else {
    if (currentWord.corrects == currentWord.characters.length) {
        alert("Você acertou! &#10084;")
    }
}

export {alertBox, gameKeyboard};