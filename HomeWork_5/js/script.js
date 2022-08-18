// Task 1
// Focus
let focusResult = document.getElementById('resultFocus');
let focusButton = document.getElementById('buttonFocus');

const arrCards = [
    '♠2♠', '♥2♥', '♣2♣', '♦2♦', '♠3♠', '♥3♥', '♣3♣', '♦3♦',
    '♠4♠', '♥4♥', '♣4♣', '♦4♦', '♠5♠', '♥5♥', '♣5♣', '♦5♦',
    '♠6♠', '♥6♥', '♣6♣', '♦6♦', '♠7♠', '♥7♥', '♣7♣', '♦7♦',
    '♠8♠', '♥8♥', '♣8♣', '♦8♦', '♠9♠', '♥9♥', '♣9♣', '♦9♦',
    '♠10♠', '♥10♥', '♣10♣', '♦10♦', '♠jack♠', '♥jack♥', '♣jack♣', '♦jack♦',
    '♠queen♠', '♥queen♥', '♣queen♣', '♦queen♦', '♠king♠', '♥king♥', '♣king♣', '♦king♦',
    '♠ace♠', '♥ace♥', '♣ace♣', '♦ace♦', 'joker', 'joker',
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

focusButton.addEventListener('click', () => {
    let index = getRandomNumber(0, arrCards.length - 1);
    focusResult.innerText = arrCards[index];
});
//========================================================================================


//Task 2
// Statistics
//const statText = document.getElementById('wolfText');
const statButton = document.getElementById('statButton');
const statResult = document.getElementById('statResult');

const statText = 'How to get value from input? 1, 2, 3, 4, 5:))';

const letterRE = /[a-zA-Z]/g;
const numberRE = /[0-9]/g;

let getLettersNumber = (arr) => arr.match(letterRE).length;

let getDigitsNumber = (arr) => arr.match(numberRE).length;

let getOtherSymbols = (arr) => arr.replace(/ /g, '').length - (getDigitsNumber(statText) + getLettersNumber(statText));

let showResult = `Letters: ${getLettersNumber(statText)}; Numbers: ${getDigitsNumber(statText)}; Symbols: ${getOtherSymbols(statText)};`;

statButton.addEventListener('click', () => {
    statResult.innerText = showResult;
});
// =========================================================================================


// Task 3
// Werewolf letter
//const wolfText = document.getElementById('wolfText');
const wolfButton = document.getElementById('wolfButton');
const wolfResult = document.getElementById('wolfResult');

const wolfText = 'iNDEPENDENCE DAY OF uKRAINE 08.24!';
let changeNumToUnderLine = wolfText.replace(numberRE, '_');

let changeUperToLower = (str) => str
    .split('')
    .map(item => item == item.toUpperCase() ? item.toLowerCase() : item.toUpperCase())
    .join('');

wolfButton.addEventListener('click', () => {
    wolfResult.innerText = changeUperToLower(changeNumToUnderLine);
});
// ==========================================================================================


// Task 4
// Find a Chair
const needCheirs = 7;
const otherRooms = [
    ['XX', 3],
    ['XXX', 5],
    ['XXXXX', 6],
    ['XXXXXXX', 8],
    ['XXXX', 8],
];

function getFindChair(cheir, roms) {
    if (cheir == '0') return 'Game on';
    let freeChairs = roms.map(([i, j]) => Math.max(...[j - i.length, 0]));
    let sumFreeChairs = freeChairs.reduce((a, b) => a + b, 0);
    if (sumFreeChairs < cheir) {
        return 'Not enought';
    } else {
        sumFreeChairs = 0;
        result = [];
        while (sumFreeChairs < 0) {
            x = freeChairs.shift();
            result.push(x);
            sumFreeChairs += x;
        }
        result[result.length - 1] -= sumFreeChairs - cheir;
        return result;
    };

};
//=============================================================================================


































