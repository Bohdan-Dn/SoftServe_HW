//Tast 1
//Your order

const inputSentence = prompt('Enter your string');
const sortByNumber = (string) => {
    const findNumber = (s) => s.split('').reduce((pos, value) => Number(value) ? Number(value) : pos, 0);
    const arrWords = string.split(' ');
    arrWords.sort((a, b) => findNumber(a) - findNumber(b));
    return arrWords.join(' ');
};
console.log(sortByNumber(inputSentence));


//Task 2
//Check methods
/*
const objCheck = [
    { name: 'bread', amount: 2, price: 25 },
    { name: 'butter', amount: 1, price: 50 },
    { name: 'onion', amount: 7, price: 5 },
    { name: 'pasta', amount: 3, price: 35 },
    { name: 'peach', amount: 12, price: 15 },
    { name: 'candy', amount: 100, price: 4 },
    { name: 'cucumber', amount: 2, price: 2 },
];


function showCheck(obj) {
    const objCheckList = obj.map(item => `name: ${item.name}, amount: ${item.amount}, sum: ${item.price * item.amount}\n`);
    const strCheckList = objCheckList.join('');
    alert(strCheckList);
};
showCheck(objCheck);

function showCheckAmount(obj) {
    const amount = obj.reduce((total, position) => {
        return total + position.price
    }, 0)
    alert('Total cost: ' + amount + 'UAN');
};
showcheckAmount(objCheck);
*/

//Task 3
//Calculator
/*
function calc(num1, num2, operator) {

    switch (operator) {
        case '*':
            result = num1 * num2;
            alert(result);
            break;
        case '/':
            result = num1 / num2;
            alert(result);
            break;
        case '+':
            result = +num1 + +num2;
            alert(result);
            break;
        case '-':
            result = num1 - num2;
            alert(result);
            break;
    }

}
calc('9', '3', '/');
*/