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
const c = document.querySelector('.C');
const colorContainer = document.querySelector('.color-section');
let eq = false;
let startz = false;
let final;
let numbers = '0';
let temp1;
let poten = false;
let numberIndicator;
let arithmeticIndicator;
let negative = false;
const arithmeticArr = ['+', '-', '*', '/', '(', '.', '^'];
const numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
        numbers = numberIndicator;
        startz = true;
        eq = false;
        poten = true;
        resultName();
    }
    else if (numbers.slice(-3).startsWith('**')) {
        return;
    }
    else {
        numbers += numberIndicator;
        eq = false;
        poten = true;
        resultName();
    }
    if (numbers[numbers.length - 2].endsWith('(')
        || numbers[numbers.length - 3].endsWith('(')) {
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
}
function arithmeticsOperation() {
    if (numbers.length > 24)
        return;
    const tempArr = ['/', '+', '-', '*'];
    for (let i = 0; i < tempArr.length; i++) {
        if (numbers.endsWith(tempArr[i]))
            return;
    }
    numbers += arithmeticIndicator;
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
        for (let i = 0; i < arithmeticArr.length; i++) {
            if (numbers.endsWith(arithmeticArr[i]) || numbers.endsWith(')'))
                return;
        }
        for (let i = 0; i < 10; i++) {
            if (numbers.endsWith(`**${JSON.stringify(i)}`))
                return;
        }
        numbers += '.';
        resultName();
        poten = false;
    });
    equal?.addEventListener('click', () => {
        negative = false;
        if (!eq) {
            if (numbers.includes('^(') && numbers.includes(')')) {
                temp1 = numbers.replace('^(', '**');
                numbers = temp1.replace(')', '');
                final = Function('return ' + numbers)();
                numbersReset();
                eq = true;
                result.textContent = final;
                return;
            }
            for (let i = 0; i < arithmeticArr.length; i++) {
                if (numbers.startsWith(arithmeticArr[i])
                    || numbers.endsWith(arithmeticArr[i])) {
                    result.textContent = 'Error';
                    numbersReset();
                    return;
                }
            }
            final = Function('return ' + numbers)();
            result.textContent = final;
            numbersReset();
            eq = true;
        }
        else
            return;
    });
    ce?.addEventListener('click', () => {
        negative = false;
        startz = false;
        numbers = '0';
        resultName();
    });
    potency?.addEventListener('click', () => {
        if (poten) {
            numbers += '^(';
            resultName();
            poten = false;
        }
    });
    c?.addEventListener('click', () => {
        if (!startz)
            return;
        else {
            numbers = numbers.slice(0, -1);
            resultName();
        }
        if (result.textContent == '') {
            startz = false;
            numbers = '0';
            resultName();
        }
        if (numbers.endsWith(')')) {
            numbers = numbers.slice(0, -2);
            poten = true;
            resultName();
        }
        else if (numbers.endsWith('(')) {
            numbers = numbers.slice(0, -2);
            poten = true;
            resultName();
        }
        if (numbers.endsWith('*') || numbers.endsWith('^')) {
            numbers = numbers.slice(0, -1);
        }
        if (result.textContent?.includes('**')) {
            result.textContent = result.textContent.replace('**', '^(');
        }
    });
    negate?.addEventListener('click', () => {
        if (numbers.endsWith('.'))
            return;
        if (negative == true) {
            numbers = numbers.slice(0, -4);
            numbers += numberIndicator;
            resultName();
            negative = false;
            console.log(numbers);
            return;
        }
        if (numbers.endsWith('1') ||
            numbers.endsWith('2') ||
            numbers.endsWith('3') ||
            numbers.endsWith('4') ||
            numbers.endsWith('5') ||
            numbers.endsWith('6') ||
            numbers.endsWith('7') ||
            numbers.endsWith('8') ||
            numbers.endsWith('9')) {
            numbers = numbers.slice(0, -1);
            numbers += `(-${numberIndicator})`;
            resultName();
            negative = true;
        }
        else
            return;
    });
}
function resultName() { result.textContent = numbers; }
function numbersReset() { numbers = ''; }
colorContainer?.addEventListener('click', (e) => {
    const clickedDiv = e.target;
    selected(clickedDiv);
});
function selected(div) {
    const selectedElms = colorContainer?.querySelectorAll('.selected');
    selectedElms?.forEach((elm) => {
        elm.classList.remove('selected');
    });
    div.classList.add('selected');
}
