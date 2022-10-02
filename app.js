"use strict";
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const equal = document.querySelector('.equal');
const result = document.querySelector('.result');
const dot = document.querySelector('.dot');
const ce = document.querySelector('.CE');
const negate = document.querySelector('.negate');
let numbers = '';
one?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    numbers += '1';
    resultName();
});
two?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    numbers += '2';
    resultName();
});
three?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    numbers += '3';
    resultName();
});
four?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    numbers += '4';
    resultName();
});
five?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    numbers += '5';
    resultName();
});
six?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    numbers += '6';
    resultName();
});
seven?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    numbers += '7';
    resultName();
});
eight?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    numbers += '8';
    resultName();
});
nine?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    numbers += '9';
    resultName();
});
zero?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    numbers += '0';
    resultName();
});
plus?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    if (numbers.endsWith('/') ||
        numbers.endsWith('+') ||
        numbers.endsWith('-') ||
        numbers.endsWith('*') ||
        numbers.endsWith('.'))
        return;
    numbers += '+';
    resultName();
});
minus?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    if (numbers.endsWith('/') ||
        numbers.endsWith('+') ||
        numbers.endsWith('-') ||
        numbers.endsWith('*') ||
        numbers.endsWith('.'))
        return;
    numbers += '-';
    resultName();
});
multiply?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    if (numbers.endsWith('/') ||
        numbers.endsWith('+') ||
        numbers.endsWith('-') ||
        numbers.endsWith('*') ||
        numbers.endsWith('.'))
        return;
    numbers += '*';
    resultName();
});
divide?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    if (numbers.endsWith('/') ||
        numbers.endsWith('+') ||
        numbers.endsWith('-') ||
        numbers.endsWith('*') ||
        numbers.endsWith('.'))
        return;
    numbers += '/';
    resultName();
});
dot?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    if (numbers.endsWith('/') ||
        numbers.endsWith('+') ||
        numbers.endsWith('-') ||
        numbers.endsWith('*') ||
        numbers.endsWith('.'))
        return;
    numbers += '.';
    resultName();
});
negate?.addEventListener('click', () => {
    // TODO
});
equal?.addEventListener('click', () => {
    if (numbers.length > 15)
        return;
    if (numbers.startsWith('/') ||
        numbers.startsWith('+') ||
        numbers.startsWith('-') ||
        numbers.startsWith('*') ||
        numbers.startsWith('.') ||
        numbers.endsWith('/') ||
        numbers.endsWith('+') ||
        numbers.endsWith('-') ||
        numbers.endsWith('*') ||
        numbers.endsWith('.')) {
        result.textContent = 'Error';
        numbers = '';
    }
    else {
        let final = Function('return ' + numbers)();
        console.log(final);
        result.textContent = final;
        numbers = '';
    }
});
ce?.addEventListener('click', () => {
    numbers = '';
    result.textContent = '';
});
function resultName() {
    result.textContent = numbers;
}
