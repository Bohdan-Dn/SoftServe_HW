const passportUser = document.querySelector('.homework__input-passport');
const phoneUser = document.querySelector('.homework__input-phone');
const codeUser = document.querySelector('.homework__input-code');
const submit = document.querySelector('.homework__button');

const REG_PASSPORT = /[a-zA-z\d]/;


submit.addEventListener('click', check());
function check() {
    if (passportUser.value == REG_PASSPORT) {
        console.log('Correct');
    }
}


