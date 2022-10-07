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
let eq = false;
let startz = false;
let final;
let numbers = '0';
resultName();
number();
function number() {
    one?.addEventListener('click', () => {
        if (numbers.length > 15)
            return;
        if (numbers == '0' && startz == false) {
            numbers = '1';
            startz = true;
            eq = false;
            resultName();
        }
        else {
            numbers += '1';
            eq = false;
            resultName();
        }
    });
    two?.addEventListener('click', () => {
        if (numbers.length > 15)
            return;
        if (numbers == '0' && startz == false) {
            numbers = '2';
            startz = true;
            eq = false;
            resultName();
        }
        else {
            numbers += '2';
            eq = false;
            resultName();
        }
    });
    three?.addEventListener('click', () => {
        if (numbers.length > 15)
            return;
        if (numbers == '0' && startz == false) {
            numbers = '3';
            startz = true;
            eq = false;
            resultName();
        }
        else {
            numbers += '3';
            eq = false;
            resultName();
        }
    });
    four?.addEventListener('click', () => {
        if (numbers.length > 15)
            return;
        if (numbers == '0' && startz == false) {
            numbers = '4';
            startz = true;
            eq = false;
            resultName();
        }
        else {
            numbers += '4';
            eq = false;
            resultName();
        }
    });
    five?.addEventListener('click', () => {
        if (numbers.length > 15)
            return;
        if (numbers == '0' && startz == false) {
            numbers = '5';
            startz = true;
            eq = false;
            resultName();
        }
        else {
            numbers += '5';
            eq = false;
            resultName();
        }
    });
    six?.addEventListener('click', () => {
        if (numbers.length > 15)
            return;
        if (numbers == '0' && startz == false) {
            numbers = '6';
            startz = true;
            eq = false;
            resultName();
        }
        else {
            numbers += '6';
            eq = false;
            resultName();
        }
    });
    seven?.addEventListener('click', () => {
        if (numbers.length > 15)
            return;
        if (numbers == '0' && startz == false) {
            numbers = '7';
            startz = true;
            eq = false;
            resultName();
        }
        else {
            numbers += '7';
            eq = false;
            resultName();
        }
    });
    eight?.addEventListener('click', () => {
        if (numbers.length > 15)
            return;
        if (numbers == '0' && startz == false) {
            numbers = '8';
            startz = true;
            eq = false;
            resultName();
        }
        else {
            numbers += '8';
            eq = false;
            resultName();
        }
    });
    nine?.addEventListener('click', () => {
        if (numbers.length > 15)
            return;
        if (numbers == '0' && startz == false) {
            numbers = '9';
            startz = true;
            eq = false;
            resultName();
        }
        else {
            numbers += '9';
            eq = false;
            resultName();
        }
    });
    zero?.addEventListener('click', () => {
        if (numbers.length > 15)
            return;
        if (numbers == '0' && startz == false) {
            numbers = '0';
            startz = true;
            eq = false;
            resultName();
        }
        else {
            numbers += '0';
            eq = false;
            resultName();
        }
    });
}
arithmetics();
function arithmetics() {
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
}
otherButtons();
function otherButtons() {
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
    equal?.addEventListener('click', () => {
        if (eq == false) {
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
            final = Function('return ' + numbers)();
            result.textContent = final;
            numbers = '';
            eq = true;
        }
        else {
            return;
        }
    });
    ce?.addEventListener('click', () => {
        startz = false;
        numbers = '0';
        result.textContent = numbers;
    });
}
function resultName() {
    result.textContent = numbers;
}
