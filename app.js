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
const potency = document.querySelector('.potency');
const numbersss = document.querySelector('.numbersss');
const c = document.querySelector('.C');
let eq = false;
let startz = false;
let final;
let numbers = '0';
let temp1;
let poten = false;
let numberIndicator;
let arithmeticIndicator;
resultName();
numberInitializer();
function numberInitializer() {
    one?.addEventListener('click', () => {
        numberIndicator = '1';
        numberOperation();
    });
    two?.addEventListener('click', () => {
        numberIndicator = '2';
        numberOperation();
    });
    three?.addEventListener('click', () => {
        numberIndicator = '3';
        numberOperation();
    });
    four?.addEventListener('click', () => {
        numberIndicator = '4';
        numberOperation();
    });
    five?.addEventListener('click', () => {
        numberIndicator = '5';
        numberOperation();
    });
    six?.addEventListener('click', () => {
        numberIndicator = '6';
        numberOperation();
    });
    seven?.addEventListener('click', () => {
        numberIndicator = '7';
        numberOperation();
    });
    eight?.addEventListener('click', () => {
        numberIndicator = '8';
        numberOperation();
    });
    nine?.addEventListener('click', () => {
        numberIndicator = '9';
        numberOperation();
    });
    zero?.addEventListener('click', () => {
        numberIndicator = '0';
        numberOperation();
    });
}
function numberOperation() {
    if (numbers.length > 24)
        return;
    if (numbers == '0' && startz == false) {
        switch (numberIndicator) {
            case '0':
                numbers = '0';
                break;
            case '1':
                numbers = '1';
                break;
            case '2':
                numbers = '2';
                break;
            case '3':
                numbers = '3';
                break;
            case '4':
                numbers = '4';
                break;
            case '5':
                numbers = '5';
                break;
            case '6':
                numbers = '6';
                break;
            case '7':
                numbers = '7';
                break;
            case '8':
                numbers = '8';
                break;
            case '9':
                numbers = '9';
                break;
            default:
                break;
        }
        startz = true;
        eq = false;
        poten = true;
        resultName();
    }
    else if (numbers.slice(-3).startsWith('**')) {
        return;
    }
    else {
        switch (numberIndicator) {
            case '0':
                numbers += '0';
                break;
            case '1':
                numbers += '1';
                break;
            case '2':
                numbers += '2';
                break;
            case '3':
                numbers += '3';
                break;
            case '4':
                numbers += '4';
                break;
            case '5':
                numbers += '5';
                break;
            case '6':
                numbers += '6';
                break;
            case '7':
                numbers += '7';
                break;
            case '8':
                numbers += '8';
                break;
            case '9':
                numbers += '9';
                break;
            default:
                break;
        }
        eq = false;
        poten = true;
        resultName();
    }
    if (numbers[numbers.length - 2].endsWith('(') ||
        numbers[numbers.length - 3].endsWith('(')) {
        numbers += ')';
        resultName();
        temp1 = numbers.replace('^(', '**');
        numbers = temp1.replace(')', '');
        poten = false;
    }
}
arithmeticsInitializer();
function arithmeticsInitializer() {
    plus?.addEventListener('click', () => {
        arithmeticIndicator = '+';
        arithmeticsOperation();
    });
    minus?.addEventListener('click', () => {
        arithmeticIndicator = '-';
        arithmeticsOperation();
    });
    multiply?.addEventListener('click', () => {
        arithmeticIndicator = '*';
        arithmeticsOperation();
    });
    divide?.addEventListener('click', () => {
        arithmeticIndicator = '/';
        arithmeticsOperation();
    });
    dot?.addEventListener('click', () => {
        arithmeticIndicator = '.';
        arithmeticsOperation();
    });
}
function arithmeticsOperation() {
    if (numbers.length > 24)
        return;
    if (numbers.endsWith('/') ||
        numbers.endsWith('+') ||
        numbers.endsWith('-') ||
        numbers.endsWith('*') ||
        numbers.endsWith('.'))
        return;
    switch (arithmeticIndicator) {
        case '+':
            numbers += '+';
            break;
        case '-':
            numbers += '-';
            break;
        case '*':
            numbers += '*';
            break;
        case '/':
            numbers += '/';
            break;
        case '.':
            numbers += '.';
            break;
        default:
            break;
    }
    if (numbers.includes('**') && arithmeticIndicator == '+') {
        temp1 = numbers.replace('**', '^(');
        numbers = temp1.replace('+', ')');
        numbers += '+';
    }
    else if (numbers.includes('**') && arithmeticIndicator == '-') {
        temp1 = numbers.replace('**', '^(');
        numbers = temp1.replace('-', ')');
        numbers += '-';
    }
    else if (numbers.includes('**') && arithmeticIndicator == '*') {
        temp1 = numbers.replace('**', '^(');
        numbers = temp1.replace('*', ')');
        numbers += '*';
    }
    else if (numbers.includes('**') && arithmeticIndicator == '/') {
        temp1 = numbers.replace('**', '^(');
        numbers = temp1.replace('/', ')');
        numbers += '/';
    }
    resultName();
    poten = false;
}
otherButtons();
function otherButtons() {
    dot?.addEventListener('click', () => {
        if (numbers.length > 24)
            return;
        if (numbers.endsWith('/') ||
            numbers.endsWith('+') ||
            numbers.endsWith('-') ||
            numbers.endsWith('*') ||
            numbers.endsWith('.'))
            return;
        numbers += '.';
        resultName();
        poten = false;
    });
    equal?.addEventListener('click', () => {
        if (eq == false) {
            if (numbers.includes('^(') && numbers.includes(')')) {
                temp1 = numbers.replace('^(', '**');
                numbers = temp1.replace(')', '');
                final = Function('return ' + numbers)();
                numbers = '';
                eq = true;
                result.textContent = final;
                return;
            }
            if (numbers.startsWith('/') ||
                numbers.startsWith('+') ||
                numbers.startsWith('-') ||
                numbers.startsWith('*') ||
                numbers.startsWith('.') ||
                numbers.startsWith('^') ||
                numbers.endsWith('(') ||
                numbers.endsWith(')') ||
                numbers.endsWith('/') ||
                numbers.endsWith('+') ||
                numbers.endsWith('-') ||
                numbers.endsWith('*') ||
                numbers.endsWith('.')) {
                result.textContent = 'Error';
                numbers = '';
                return;
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
        resultName();
    });
    potency?.addEventListener('click', () => {
        if (poten == true) {
            numbers += '^(';
            resultName();
            poten = false;
        }
        else {
            poten = false;
            return;
        }
    });
    c?.addEventListener('click', () => {
        if (startz == false) {
            return;
        }
        else {
            numbers = numbers.slice(0, -1);
            resultName();
        }
        if (result.textContent == '') {
            startz = false;
            numbers = '0';
            resultName();
        }
        console.log(result);
        console.log(numbers);
        if (result.textContent?.includes('**')) {
            result.textContent = result.textContent.replace('**', '^(');
        }
        console.log(result);
        console.log(numbers);
        if (numbers.endsWith(')') || numbers.endsWith('**')) {
            numbers = numbers.slice(0, -2);
            poten = true;
            resultName();
        }
    });
}
function resultName() {
    result.textContent = numbers;
}
