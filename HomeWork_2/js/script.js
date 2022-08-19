//Task 1
/*
let roomLenght;
let roomHeight;
let roomWidth;

do {
    roomLenght = +prompt("Enter the lenght of the room(from 0 to 1000)")
} while (roomLenght < 0 || roomLenght > 1000 || !Number(roomLenght));

do {
    roomHeight = +prompt("Enter the height of the room(from 0 to 1000)")
} while (roomHeight < 0 || roomHeight > 1000 || !Number(roomHeight));

do {
    roomWidth = +prompt("Enter the wight of the room(from 0 to 1000)")
} while (roomWidth < 0 || roomWidth > 1000 || !Number(roomWidth));

let wallArea = roomHeight * (2 * (roomLenght + roomWidth));

let numberCans = Math.ceil(wallArea / 16);
alert(`You need ${numberCans} can(s) of the paint`);
*/




//Task 2

let userCelsius = Number(prompt('Enter the temperature in Celsius!'));
let resultKelvin = userCelsius + 273.15;

if (userCelsius == !Number(userCelsius)) {
    alert('ERROR');
} else {
    alert(resultKelvin + ' °F');
};





//Task 3
/*
const userNumber = prompt('Enter your ticket number!');
let numberArray;
let numberFirstSum;
let numberSecondSum;

if (userNumber.length !== 6) {
    alert('Error! Enter six numbers');
} else if (!Number(userNumber)) {
    alert('Enter numbers!')
} else {
    numberArray = Array.from(userNumber);
    numberFirstSum = numberArray[0] * 1 + numberArray[1] * 1 + numberArray[2] * 1;
    numberSecondSum = numberArray[3] * 1 + numberArray[4] * 1 + numberArray[5] * 1;
    lucky();
};

function lucky() {
    if (numberFirstSum == numberSecondSum) {
        alert('You are lucky!');
    } else {
        alert('Next time lucky!')
    };
};
*/

