//Task 1
// Drawing in console

const userWight = checkNumber();
const userSymbol = prompt('Enter symbol!', '');

function checkNumber() {
    let userWight = +prompt('Enter wight array!(an integer greater than 0)', '');
    while (!Number.isInteger(userWight)) {
        userWight = +prompt('Enter wight array!(an integer greater than 0)', '');
    }
    return userWight;
};

function showInConsole() {
    const arr = [];
    for (let i = 0; i < userWight; i++) {
        arr[i] = userSymbol;
    };
    return console.log(arr.join(""));
};

showInConsole();


//Task 2
// DNA
/*
const userDna = prompt('Enter DNA!');
const arrDna = Array.from(userDna);

function showComplementarySideDna() {
    for (i = 0; i < arrDna.length; i++) {
        switch (arrDna[i]) {
            case 'A':
                arrDna[i] = "T";
                break;
            case 'T':
                arrDna[i] = "A";
                break;
            case 'C':
                arrDna[i] = "G";
                break;
            case 'G':
                arrDna[i] = "C";
                break;
        };
    };
    return alert(arrDna.join(""));
};
showComplementarySideDna();
*/

//Task 3
// Golden sand
/*
const userBox1 = 'capacity of the first box!';
const userBox2 = 'capacity of the second box!';
const userBox3 = 'capacity of the third box!';
const userPrice1 = 'price of the first kind of gold!';
const userPrice2 = 'price of the second kind of gold!';
const userPrice3 = 'price of the third kind of gold!';

const box1 = checkNumber(userBox1);
const box2 = checkNumber(userBox2);
const box3 = checkNumber(userBox3);
const price1 = checkNumber(userPrice1);
const price2 = checkNumber(userPrice2);
const price3 = checkNumber(userPrice3);

const arrBox = [box1, box2, box3];
const arrPrice = [price1, price2, price3];

const arrBoxSort = arrBox.sort(function (a, b) { return a - b });
const arrPriceSort = arrPrice.sort(function (a, b) { return a - b });

const result = alert(Math.round(countMoney()) + ' UAN');

function countMoney() {
    let result = arrBoxSort[0] * arrPriceSort[0] + arrBoxSort[1] * arrPriceSort[1] + arrBoxSort[2] * arrPriceSort[2];
    return result;
}

function checkNumber(user) {
    let box1 = +prompt(`Enter the ${user} (from 0 to 100)`, '');
    if (box1 > 0 && box1 <= 100) {
        return box1
    } else {
        return alert('ERROR!(from 0 to 100)')
    };
};
*/

// Task 4
// The shortest word
/*
const userWords = prompt('Enter a string of words');

function showShortestWord(string) {
    words = string.split(' ').sort((a, b) => a.length - b.length);
    result = words[0].length

    return result;
};

console.log(showShortestWord(userWords));
*/