const passportUser = document.querySelector('.homework__input-passport');
const phoneUser = document.querySelector('.homework__input-phone');
const codeUser = document.querySelector('.homework__input-code');
const submit = document.querySelector('.homework__button');

const REG_PASSPORT = /[a-zA-z\d]/;
const REG_NUM = /\d/;


submit.onclick = function () {

    if (!REG_PASSPORT.test(passportUser.value) || passportUser.value.length != 8) {
        passportUser.nextElementSibling.innerHTML = 'Error';
    } else {
        passportUser.nextElementSibling.innerHTML = 'Correct';
    };

    if (!REG_NUM.test(phoneUser.value) || phoneUser.value.length != 12) {
        phoneUser.nextElementSibling.innerHTML = 'Error';
    } else {
        phoneUser.nextElementSibling.innerHTML = 'Correct';
    };

    if (!REG_NUM.test(codeUser.value) || codeUser.value.length != 10) {
        codeUser.nextElementSibling.innerHTML = 'Error';
    } else {
        codeUser.nextElementSibling.innerHTML = 'Correct';
    };
};


