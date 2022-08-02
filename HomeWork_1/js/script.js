//Task 1
const circleRadius = prompt('Який радіус кола?', '');
const circleArea = Math.PI * Math.pow(circleRadius, 2);
alert(`Площа кола ${circleArea}!`);

// Task 2
const userAge = prompt('Скільки вам років?');
const userSex = prompt('Скільки у вас років страхового стажу?');
const yearNow = new Date();

let ageRetirement
if (userSex > 27) {
    ageRetirement = 60;
} else if (userSex > 17) {
    ageRetirement = 63;
} else {
    ageRetirement = 65;
};

let untilRetirement = ageRetirement - userAge;
let yearRetirement = yearNow.getFullYear() + untilRetirement;

alert(`До пенсії вам залишилось ${untilRetirement} роки(-ів)!`);
alert(`На пенсію ви вийдете у ${yearRetirement} році.`);


// Task 3
const userNumber = prompt('Введіть трицифрове число!');
let userNumberString = userNumber + "";
let userNumberRevers = userNumber.split("").reverse().join("");


if (userNumberRevers.length < 4) {
    alert(`Ваше число задом на перед: ${userNumberRevers}`);
} else {
    alert("Error!!!");
};








