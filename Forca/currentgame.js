import { Word, acertos, erros, resetPontuacao} from "./Word.js";

//New game
const newGameButton = document.querySelector("#new-game");
const themeSelector = document.querySelector("#theme-selector");

newGameButton.addEventListener("click", () => {themeSelector.classList.toggle("visible")})

const listaTog = [
    "celaena",
    "chaol",
    "dorian",
    "rowan",
    "manon",
    "aelin",
    "nehemia",
    "adarlan",
    "maeve",
    "terrasen",
    "sam",
    "abraxos",
    "arobynn",
    "lysandra",
    "yrene",
    "asterion",
    "sartaq",
    "nehemia"
];

const listaDicasTog = [
    "A personagem principal, uma assassina renomada.",
    "O capitão da guarda de Adarlan e um dos principais personagens.",
    "O príncipe herdeiro de Adarlan.",
    "Um guerreiro feérico, aliado de Aelin.",
    "Uma bruxa poderosa, líder das Treze.",
    "O verdadeiro nome de Celaena, ela é uma rainha e poderosa feiticeira.",
    "Princesa de Eyllwe e amiga de Celaena.",
    "O império governado pelo rei tirano.",
    "Rainha das Fae, uma das principais antagonistas.",
    "O reino de Aelin, que foi invadido por Adarlan.",
    "O amor perdido de Celaena.",
    "Um wyvern, companheiro de Manon.",
    "O mestre dos assassinos antes de Celaena.",
    "Ela é uma metamorfa e amiga próxima de Aelin.",
    "Uma curandeira com um grande destino.",
    "Um navio que desempenha um papel crucial.",
    "Um príncipe das Montanhas Vermelhas.",
    "Princesa de Eyllwe e amiga de Celaena."
];

const listaAcotar = [
    "feyre",
    "rhysand",
    "tamlin",
    "lucien",
    "nesta",
    "elain",
    "cassian",
    "azriel",
    "amren",
    "morrigan",
    "illyrian",
    "hybern",
    "velaris",
    "attor",
    "helion",
    "tarquin"
];

const listaDicasAcotar = [
    "A protagonista da história, uma jovem caçadora.",
    "Um dos personagens principais e Grão-Senhor da Corte Noturna.",
    "O Grão-Senhor da Corte Primaveril.",
    "O amigo leal de Tamlin.",
    "Irmã mais velha de Feyre.",
    "A irmã mais nova de Feyre.",
    "Um dos generais da Corte Noturna.",
    "Outro dos generais da Corte Noturna e amigo próximo de Rhysand.",
    "Uma personagem misteriosa e poderosa.",
    "Uma das integrantes do Círculo Íntimo de Rhysand.",
    "Uma raça de guerreiros com asas.",
    "O reino inimigo na série.",
    "A cidade das estrelas, onde parte da história se passa.",
    "Um dos generais de Hybern.",
    "O Grão-Senhor da Corte do Dia.",
    "O Grão-Senhor da Corte da Aurora."
];

const listaFrutas = [
    "abacaxi",
    "laranja",
    "banana",
    "uva",
    "morango",
    "acerola",
    "abacate",
    "cacau",
    "caqui",
    "carambola"
];

const listaAnimais = [
    "cachorro",
    "elefante",
    "gato",
    "girafa",
    "coelho",
    "rato",
    "cobra",
    "camundongo",
    "tartaruga",
    "golfinho",
    "rinoceronte"
];

const listaCores = [
    "amarelo",
    "vermelho",
    "rosa",
    "verde",
    "azul",
    "roxo",
    "branco",
    "preto",
    "escarlate",
    "cinza",
    "ciano",
    "magenta"
];

const listaEsportes = [
    "futebol",
    "esgrima",
    "basquete",
    "boxe",
    "bocha",
    "ciclismo",
    "corrida",
    "halterofilismo"
]

const listFruits = [
    "apple",
    "pear",
    "grape",
    "orange",
    "strawberry",
    "melon",
    "watermelon"
]

const listAnimals = [
    "dog",
    "cat",
    "mouse",
    "elephant",
    "snake",
    "rabbit",
    "bunny",
    "turtle",
    "turtoise",
    "dolphin"
]

const listColors = [
    "red",
    "green",
    "blue",
    "cyan",
    "magenta",
    "yellow",
    "black",
    "white",
    "gray",
    "pink",
    "orange",
    "purple"
]

const listSports = [
    "football",
    "soccer",
    "volleyball",
    "basketball",
    "golf",
    "curling"
]

let themeButtons = document.querySelectorAll(".theme");

const currentTheme = document.querySelector("#current-theme");

let currentWord;

const keys = document.querySelectorAll(".key");

let currentIndex = 0; // Inicializa o índice da palavra atual

let currentWordList = [];
let currentHintsList = [];

const nextButton = document.querySelector("#next-word");

nextButton.addEventListener("click", function() {
    if (currentIndex < currentWordList.length - 1) {
        currentIndex++; // Avança para o próximo índice, se houver mais palavras
        exibirPalavraECorrespondenteDica(currentIndex);
    } else {        
        gameAlert(`Você chegou ao final! Sua pontuação foi de: <br> 
                    &#9989; ${acertos} acerto(s)  <br>
                    &#10060; ${erros} erro(s)`);
        nextButton.style.display = "none";   
    }
});


function exibirPalavraECorrespondenteDica(index) { 
    nextButton.style.display = "none";   
    let newWord = currentWordList[index];
    currentWord = new Word(newWord.toUpperCase());
    
    if (tipo_dica == 1) {
        // Exibir a dica correspondente
        let dica = listaDicasTog[currentIndex];
        exibirDica(dica);            
    }else  if (tipo_dica == 2) {
        // Exibir a dica correspondente
        let dica = listaDicasAcotar[currentIndex];
        exibirDica(dica);            
    }
   
    themeSelector.classList.remove("visible");
    alertBox.classList.remove("visible");
    gameKeyboard.classList.add("visible");
    keys.forEach(function(key) {
        key.classList.remove("pressed");
    });
}

let tipo_dica = 0;

themeButtons.forEach(function(theme){
    theme.addEventListener("click", function(){
        // Limpa o conteúdo da div de dica
        const dicaElement = document.querySelector("#dica-message");
        dicaElement.innerHTML = '';
        
        const themeList = eval(theme.dataset.theme);
        const themeHints = eval(theme.dataset.hints);

        currentWordList = themeList;
        currentHintsList = themeHints;

        tipo_dica = 0;
        if (themeList === listaTog) {                     
            tipo_dica = 1;
        }else  if (themeList === listaAcotar) {                     
            tipo_dica = 2;
        }
        

        // Reiniciar o jogo
        currentIndex = 0;
        resetPontuacao();

        exibirPalavraECorrespondenteDica(currentIndex);
    });
});


function exibirDica(dica) {    
    const dicaElement = document.querySelector("#dica-message");
    dicaElement.innerHTML = dica;
}

keys.forEach(function(key) {
    key.addEventListener("click", () => currentWord.checkCharacter(key.innerHTML, key))
})

const alertBox = document.querySelector("#alert-box");
const gameKeyboard = document.querySelector("#keyboard-container")

export function gameAlert(alertText) {
    alertBox.innerHTML = alertText;
    alertBox.classList.add("visible");
    gameKeyboard.classList.remove("visible");
}

export {currentWord, alertBox, gameKeyboard, exibirPalavraECorrespondenteDica};