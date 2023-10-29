import {gameAlert} from "./currentgame.js";

export var acertos = 0;
export var erros = 0;

export function incrementAcertos() {
    acertos++;
}

export function incrementErros() {
    erros++;
}

export function resetPontuacao() {
    acertos = 0;
    erros = 0;
}
export class Word {

    constructor(word) {
        this.characters = word.split("");
        this.boxes = this.characters.map(char => {return "_"});
        this.mistakes = 0;
        this.corrects = 0;
        
        //Create boxes
        const currentWordDiv = document.querySelector("#current-word");
        currentWordDiv.innerHTML = "";
        this.boxes.forEach(box => {
            currentWordDiv.innerHTML += `<span class="letter"></span>`
        });
        
        this.currentWordSpaces = document.querySelectorAll("#current-word .letter")
        this.hangmanImg = document.querySelector("#hangman-image img");
        this.hangmanImg.src = `forca-${this.mistakes}.png`;
    }
    
    checkCharacter(char, keyButton){
        let gotRight = false;
        for(let i = 0; i < this.boxes.length; i++) {
            if (char == this.characters[i]) {
                if (char !== this.boxes[i]) {
                    this.corrects++
                }
                this.boxes[i] = char;
                this.currentWordSpaces[i].innerHTML = char;
                gotRight = true;
            }
        }

        if (keyButton.classList.contains("pressed") == false) {
            if (gotRight == false) {
                this.mistakes++
                this.hangmanImg.src = `forca-${this.mistakes}.png`;
            };

            keyButton.classList.add("pressed");
        }

        const nextButton = document.querySelector("#next-word");
        if (this.mistakes == 6) {
            gameAlert("Você errou! :(");
            incrementErros();
            console.log("erros: "+erros);
            nextButton.style.display = "block";  // Mostra o botão "Próximo"
        } else {
            if (this.corrects == this.characters.length) {
                gameAlert("Você acertou! &#10084;");
                incrementAcertos();
                console.log("acertos: "+acertos);
                nextButton.style.display = "block";  // Mostra o botão "Próximo"
            }
        }
    }
}