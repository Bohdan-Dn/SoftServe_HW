// Task 1
// Number in words
const nIwUserNumber = document.querySelector('.transform__input');
const nIwButton = document.querySelector('.transform__button');
const nIwResult = document.querySelector('.transform__result');

const zToN = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const tnToN = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const twToN = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function numberInWords(s) {
    arr = s.split('');
    if (isNaN(s) || s.length != 2 || arr[0] == '0') {
        nIwResult.style.color = "red";
        return ('Error! Enter two-digit number!');
    } else if (arr[0] == '1') {
        nIwResult.style.color = "blue";
        return (tnToN[arr[1]]);
    } else {
        nIwResult.style.color = "blue";
        return (twToN[arr[0] - 2] + ' ' + zToN[arr[1] - 1]);
    }
};

nIwButton.addEventListener('click', () => {
    nIwResult.innerHTML = numberInWords(nIwUserNumber.value);
});


// Task 2
// Clicker
const clickerBtnPlus = document.querySelector('.clicker__button-plus');
const clickerBtnMinus = document.querySelector('.clicker__button-minus');
const clickerResult = document.querySelector('.clicker__result');
let clResult = 0;

clickerBtnPlus.addEventListener('click', () => {
    clResult += 1;
    clickerResult.innerHTML = clResult;
});
clickerBtnMinus.addEventListener('click', () => {
    clResult -= 1;
    clickerResult.innerHTML = clResult;
});


// Task 3
// Tile
const tile = document.querySelector('.tile__body');
const tileEnd = document.querySelector('.tile__result');

function r(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
};

function rC() {
    return `rgb(${r(0, 255)},${r(0, 255)},${r(0, 255)})`;
};

function createArr() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(i);
    }
    return arr;
};

let randomArr = createArr().sort(function () { return 0.5 - Math.random() });

let timerId = setInterval(() => {
    paintRandomSquare(randomArr);
}, 1000);


function paintRandomSquare(rArr) {
    if (rArr.length == '0') {
        clearInterval(timerId);
        return tileEnd.innerHTML = 'Filling is completed!';
    } tile.children[rArr.shift()].style.backgroundColor = `${rC()}`;
    return rArr;
};

// Task 4
// Modal window
const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.modal__button');
const popupClose = document.querySelector('.popup__button');

popupOpen.addEventListener('click', () => {
    popup.classList.add('open');
});

popupClose.addEventListener('click', () => {
    popup.classList.remove('open');

});



// Task 5
// Clock
const clockTime = document.querySelector('.clock__time');
const clockDate = document.querySelector('.clock__date');


function showTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const weekDay = date.getDay();
    const startDay = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor(date - startDay) / 86400000;
    const week = Math.ceil(days / 7);
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    const monts = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Suturday'];

    hour = (hour < 10) ? '0' + hour : hour;
    minute = (minute < 10) ? '0' + minute : minute;
    second = (second < 10) ? '0' + second : second;

    let fullTime = hour + ':' + minute + ':' + second;
    let fullDate = dayInWeek[weekDay] + ', ' + day + ' ' + monts[month] + ' ' + year + ', ' + "week: " + week;

    clockTime.innerHTML = fullTime;
    clockDate.innerHTML = fullDate;
};
setInterval(showTime, 1000);









