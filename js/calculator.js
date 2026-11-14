'use strict';

//output
const output = document.getElementById('calculator__output--input');
let outputValue = output.value;
//output

// replace with position function
function replaceCharAt(str, index, replacement) {
    return str.replace(/./g, function (c, i) {
        return i === index ? replacement : c;
    });
};
// replace with position function

// Correct input cursor postion at relodaing page
output.selectionStart = 1;
// Correct input cursor postion at relodaing page

//AC
const AC = document.getElementById('calculator__key--AC');
//AC

// error
const error = document.getElementById('error');
//error

// errorText
const errorText = document.getElementById('error__content--span');
// errorText

// error Close
const closeError = document.getElementById('error__content--span');
// error Close

// error discription
const errordiscription = document.getElementById('error__description');
// error discription

//delete
const deleteMath = document.getElementById('calculator__key--delete');
//delete

// calculate var
const equal = document.getElementById('calculator__key--equal');
// calculate var

// separation of numbers
let cursorPosition = '';
let newCursorPosition = '';
let formattedValue = '';
function separator() {
    let diff = '';
    cursorPosition = '';
    cursorPosition = output.selectionStart;
    substringOutput();
    if (output.value.match(/[^0-9+\-÷%,.×]/)) {
        const outputTypeNumber = output.value.replace(/[^0-9+\-÷%,.×]/g, '');
        output.value = outputTypeNumber;
        output.selectionStart = cursorPosition - 1;
        output.selectionEnd = cursorPosition - 1;

    } else {
        formattedValue = output.value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        diff = formattedValue.length - output.value.length;
        output.value = formattedValue;
        newCursorPosition = cursorPosition + (diff > 0 ? diff : 0);
        output.selectionStart = newCursorPosition;
        output.selectionEnd = newCursorPosition;
    };

};

//substring input value function
let substringOutputValue1 = '';
let substringOutputValue2 = '';
function substringOutput() {
    substringOutputValue1 = output.value.substring(0, cursorPosition);
    substringOutputValue2 = output.value.substring(cursorPosition, output.value.length);
};
output.addEventListener('input', function () {
    separator();
    numberAfterZero();
});
//substring input value function


// type number after zero
let allNumbers = '';
let findOperator = [];
let numberAfterOperatorsPosition = [];
let numberAfterOperatorsCharacter = '';
function numberAfterZero() {
    // type number after zero first character
    allNumbers = '';
    allNumbers = output.value.substring(1);
    if ((allNumbers.length > 1) && (output.value[0] == '0') && (output.value[1] == '0' || output.value[1] == '1' || output.value[1] == '2' || output.value[1] == '3' || output.value[1] == '4' || output.value[1] == '5' || output.value[1] == '6' || output.value[1] == '7' || output.value[1] == '8' || output.value[1] == '9')) {
        output.value = output.value[0].slice(0, output.value[0]) + output.value[1] + allNumbers;
    } else if ((output.value[0] == '0') && (output.value[1] == '0' || output.value[1] == '1' || output.value[1] == '2' || output.value[1] == '3' || output.value[1] == '4' || output.value[1] == '5' || output.value[1] == '6' || output.value[1] == '7' || output.value[1] == '8' || output.value[1] == '9')) {
        output.value = output.value[0].slice(0, output.value[0]) + output.value[1];
    };
    // type number after zero first character
    findOperator = [];
    numberAfterOperatorsPosition = [];
    numberAfterOperatorsCharacter = '';
    for (let i = 0; i < output.value.length; i++) {
        if ((output.value[i] == '+') || (output.value[i] == '-') || (output.value[i] == '÷') || (output.value[i] == '×')) findOperator.push(i);
    };
    numberAfterOperatorsPosition = findOperator.slice();
    for (let t = 0; t < numberAfterOperatorsPosition.length; t++) {
        numberAfterOperatorsPosition[t] += 1;
        numberAfterOperatorsCharacter = output.value.substring(numberAfterOperatorsPosition[t]);
        if (numberAfterOperatorsCharacter[0] == '0' && (numberAfterOperatorsCharacter[1] == '0' || numberAfterOperatorsCharacter[1] == '1' || numberAfterOperatorsCharacter[1] == '2' || numberAfterOperatorsCharacter[1] == '3' || numberAfterOperatorsCharacter[1] == '4' || numberAfterOperatorsCharacter[1] == '5' || numberAfterOperatorsCharacter[1] == '6' || numberAfterOperatorsCharacter[1] == '7' || numberAfterOperatorsCharacter[1] == '8' || numberAfterOperatorsCharacter[1] == '9')) {
            output.value = output.value.slice(0, numberAfterOperatorsPosition[t]) + numberAfterOperatorsCharacter.slice(1);
        };
    };
};

// keep curser if input focus 
output.addEventListener('focus', function () {
    const diff = formattedValue.length - output.value.length;
    newCursorPosition = cursorPosition + (diff > 0 ? diff : 0);

});
// keep curser if input focus

// type number after zero
//operators and numbers (writing keys)
const writingKeys = document.querySelectorAll('.writing-keys');
writingKeys.forEach(function (numbersOprators) {
    numbersOprators.onclick = function () {
        substringOutput();
        separator();
        output.value = substringOutputValue1 + numbersOprators.textContent + substringOutputValue2;
        output.selectionStart = newCursorPosition + 1;
        output.selectionEnd = newCursorPosition + 1;
        output.focus();
        separator();
        numberAfterZero();
        typeright();
    };
});
//operators and numbers (writing keys)
document.addEventListener('keypress', function (press) {
    if (press.key === '*') {
        substringOutput();
        separator();
        output.value = substringOutputValue1 + '×' + substringOutputValue2;
        output.selectionStart = newCursorPosition + 1;
        output.selectionEnd = newCursorPosition + 1;
    };
});
document.addEventListener('keypress', function (press) {
    if (press.key === '/') {
        substringOutput();
        separator();
        output.value = substringOutputValue1 + '÷' + substringOutputValue2;
        output.selectionStart = newCursorPosition + 1;
        output.selectionEnd = newCursorPosition + 1;
    };
});
// type number & operators keys

// AC input
AC.onclick = function () {
    output.value = 0;
    output.focus();
    numberAfterZero();
};
// AC input

// delete
function deleteC() {
    cursorPosition = output.selectionStart;
    if ((output.value.length > 1)) {
        separator();
        const deleteM = replaceCharAt(output.value, cursorPosition - 1, '');
        output.value = deleteM;
        output.selectionStart = newCursorPosition - 1;
        output.selectionEnd = newCursorPosition - 1;
    } else if (output.value.length == 0 || output.value.length == 1) {
        output.value = 0;
    };
    separator();
    output.focus();
};

deleteMath.onclick = function () {
    deleteC();

};
// delete

//input always focus 
function focusIfNotFocused() {
    if (document.activeElement !== output) {
        output.focus();
    };
};
document.getElementsByClassName('w-100-calculator')[0].addEventListener('click', function (event) {
    if (event.target === document.getElementsByClassName('w-100-calculator')[0]) {
        focusIfNotFocused();
    };
});
window.onscroll = function () {
    scrollFocus();
};
function scrollFocus() {
    if (document.documentElement.scrollTop < 200) {
        output.focus();
    };

};
// input always focus

//special type
let lastchanges = '';
let lastC = '';
let percentForMultiplication = [];
function typeright() {
    cursorPosition = output.selectionStart;
    let diff
    diff = (diff > 0 ? diff : 0);
    newCursorPosition = cursorPosition + (diff > 0 ? diff : 0);
    outputValue = output.value;
    percentForMultiplication = [];
    lastC = '';
    lastchanges = '';
    let newValue = '';
    for (let i = 0; i < output.value.length; i++) {
        if (output.value[i] == '%') percentForMultiplication.push(i);
    };
    for (let t = 0; t < percentForMultiplication.length; t++) {
        const pos = percentForMultiplication[t];
        if (pos < output.value.length - 1 && !isNaN(output.value[pos + 1])) {
            output.value = output.value.slice(0, pos + 1) + '×' + output.value.slice(pos + 1);
        };
    };
    lastchanges = outputValue[output.value.length - 1];
    lastC = outputValue[output.value.length - 2];
    if ((lastchanges == '+' || lastchanges == '-' || lastchanges == '÷' || lastchanges == '×' || lastchanges == '.') && (lastC == '+' || lastC == '-' || lastC == '÷' || lastC == '×' || lastC == '.')) {
        newValue = outputValue.substring(0, outputValue.length - 2) + lastchanges;
        output.value = newValue;
    };
    if (lastchanges == '%' && lastC == '%') {
        newValue = outputValue.substring(0, outputValue.length - 2) + '%';
        output.value = newValue;
    };
    if ((lastC == '+' || lastC == '-' || lastC == '÷' || lastC == '×') && (lastchanges == '%')) {
        output.value = replaceCharAt(output.value, output.value.length - 2, '');
    };
    if (output.value[0] == '+' || output.value[0] == '×' || output.value[0] == '÷' || output.value[0] == '%') {
        output.value = output.value.replace(output.value[0], '');
        output.selectionStart = newCursorPosition;
        output.selectionEnd = newCursorPosition;
    };
};
output.addEventListener('input', function () {
    typeright();
});
// special type

//error computing
let check = '';
function checkOpretors() {
    const operatorsRegex = /[\+\-\×\÷]{2,}/;
    check = operatorsRegex.test(output.value);
};
output.addEventListener('input', function () {
    checkOpretors();
});
function errorCalculation() {
    if (error.style.display == 'none') {
        if ((check == true) && (!output.value.substring(output.value.length))) {
            errorText.textContent = 'لطفا دو oprator (عملگر) را در معادله کنار هم قرار ندهید.';
            output.value = 0;
        } else if ((output.value.substring(output.value.length, output.value.length - 1) == '+' || output.value.substring(output.value.length, output.value.length - 1) == '-' || output.value.substring(output.value.length, output.value.length - 1) == '×' || output.value.substring(output.value.length, output.value.length - 1) == '÷') && (check == false)) {
            errorText.textContent = 'لطفا در آخر معادله oprator (عملگر) قرار ندهید.';
            output.value = 0;
        } else if ((output.value.substring(output.value.length, output.value.length - 1) == '+' || output.value.substring(output.value.length, output.value.length - 1) == '-' || output.value.substring(output.value.length, output.value.length - 1) == '×' || output.value.substring(output.value.length, output.value.length - 1) == '÷') && (check == true)) {
            errorText.textContent = 'لطفا دو oprator (عملگر) را در معادله کنار هم قرار ندهید.' + 'لطفا در آخر معادله oprator (عملگر) قرار ندهید.';
        };
        error.style.display = 'block';
        const timer = 4;
        let showtimer = timer;
        const timerDisplay = document.getElementById('error__content--timer--number');
        const circle = document.getElementById('error__content--timer--work');
        const radius = circle.r.baseVal.value;
        const calculationRadius = 2 * Math.PI * radius;
        circle.style.strokeDasharray = `${calculationRadius} ${calculationRadius}`;
        timerDisplay.textContent = 4;

        function timerF() {
            showtimer--;
            timerDisplay.textContent = showtimer;
            const addWhite = calculationRadius - (showtimer / timer) * calculationRadius;
            circle.style.strokeDashoffset = addWhite;
            if (showtimer > 0) {
                setTimeout(timerF, 1000);
            };
            setTimeout(function () {
                if (showtimer == 0) {
                    error.style.display = 'none';
                }
            }, 2000);
        };
        setTimeout(timerF, 1000);
        function displayNoneError(button) {
            button.onclick = function () {
                error.style.display = 'none';
                showtimer = 0;

            };
        };
        displayNoneError(closeError);
        displayNoneError(errordiscription);
    };
};
//error computing

//computing 
let numberA1 = '';
let numberA2 = '';
let special = '';
const specialsForSeparate = ['+', '-', '×', '÷', '%'];
let answer = '';
//
const operatorsAfterPercentCharacterForCalculation = '';
let outputValueBeforeComputing = '';
let operatorsBeforeComputing = [];
let negativeNumbersCalculation = '';
let opreatorAfterPercentPosition = '';
let opreatorAfterPercentCharacter = '';
let numberAfterPercent = '';
function firstStepOfCalculation() {
    outputValueBeforeComputing = '';
    operatorsBeforeComputing = [];
    numberA1 = '';
    numberA2 = '';
    special = '';
    negativeNumbersCalculation = '';
    outputValueBeforeComputing = output.value;
    opreatorAfterPercentPosition = '';
    opreatorAfterPercentCharacter = '';
    numberAfterOperatorsPosition = '';

    function calcPercent() {
        while (output.value.includes('%')) {
            const findPercent = output.value.search('%');
            let numberAfterPercentReverse = [];

            for (let t = findPercent - 1; t >= 0; t--) {
                if (!specialsForSeparate.includes(output.value[t]) && output.value[t] !== '') {
                    numberAfterPercentReverse.push(output.value[t]);
                } else {
                    break;
                }
            }

            numberAfterPercent = numberAfterPercentReverse.reverse().join('');
            numberAfterPercent = Number(numberAfterPercent) / 100;
            output.value = output.value.replace('%', '');
            const startIndex = findPercent - numberAfterPercentReverse.length;
            output.value = output.value.slice(0, startIndex) + numberAfterPercent + output.value.slice(findPercent);
        };
    };

    calcPercent();
    for (let m = 0; m <= outputValueBeforeComputing.length; m++) {
        if (outputValueBeforeComputing[m] == '+' || outputValueBeforeComputing[m] == '-' || outputValueBeforeComputing[m] == '×' || outputValueBeforeComputing[m] == '÷' || outputValueBeforeComputing[[m]] == '%') operatorsBeforeComputing.push(m);
    };

    if (output.value[0] == '-') {
        negativeNumbersCalculation = '-';
        output.value = output.value.replace('-', '');
    };
    if (negativeNumbersCalculation == '-') {
        numberA1 = '-' + numberA1;
        findOperator.splice(0, 1);
        operatorsBeforeComputing.splice(0, 1);
    };

    function first_step_of_calculation(outputValue) {
        let i;
        for (i = 0; i < output.value.length; i++) {
            if (specialsForSeparate.includes(output.value[i])) {
                special = output.value[i];
                break;
            };
            numberA1 += output.value[i];
        };
        for (let t = i + 1; t < output.value.length; t++) {
            if (specialsForSeparate.includes(output.value[t])) {
                numberA2 += output.value[t];
                break;
            };
            numberA2 += output.value[t];
        };

        if (numberA2[numberA2.length - 1] == '+' || numberA2[numberA2.length - 1] == '-' || numberA2[numberA2.length - 1] == '÷' || numberA2[numberA2.length - 1] == '×') {
            numberA2 = numberA2.slice(0, -1);
        };

        return { extractionN1: Number(numberA1), extractionS: special, extractionN2: Number(numberA2) };

    };
    let { extractionN1, extractionS, extractionN2 } = first_step_of_calculation(outputValue);
    numberA1 = numberA1.replace(/,/g, '');
    numberA2 = numberA2.replace(/,/g, '');
    switch (special) {
        case '+':
            answer = Number(numberA1) + Number(numberA2);
            break;
        case '-':
            answer = Number(numberA1) - Number(numberA2);
            break;
        case '×':
            answer = Number(numberA1) * Number(numberA2);
            break;
        case '÷':
            answer = Number(numberA1) / Number(numberA2);
            break;
    };
    findOperator = [];
    for (let i = 0; i < output.value.length; i++) {

        if ((output.value[i] == '+') || (output.value[i] == '-') || (output.value[i] == '÷') || (output.value[i] == '×')) findOperator.push(i);

    };

    if (findOperator.length == 1) {
        output.value = answer;
        separator();
    } else {
        if (negativeNumbersCalculation == '-') {
            output.value = output.value.replace(output.value.substring(0, findOperator[1] - 1), '');
        } else {
            output.value = output.value.replace(output.value.substring(0, findOperator[1]), '');
        };
        for (let x = 0; x < operatorsBeforeComputing.length - 1; x++) {
            secondStepOfCalculation();
        };
    }
};

function secondStepOfCalculation() {

    numberA1 = '';
    numberA2 = '';
    special = '';
    outputValue = output.value;
    output.value = output.value.replace(/,/g, '');
    second_step_of_calculation(outputValue);

    function second_step_of_calculation(outputValue) {

        if (specialsForSeparate.includes(output.value[0])) {
            special = output.value[0];
            output.value = replaceCharAt(output.value, 0, '');
        };
        for (let i = 0; i < output.value.length; i++) {

            if (specialsForSeparate.includes(output.value[i])) {
                break;
            };

            if (!isNaN(output.value[i]) || output.value[i] == '.') {
                numberA1 += output.value[i];
            };
        };

    };

    findOperator = [];
    for (let t = 0; t < output.value.length; t++) {

        if ((output.value[t] == '+') || (output.value[t] == '-') || (output.value[t] == '÷') || (output.value[t] == '×')) findOperator.push(t);

    };

    function replaceRight() {
        if (findOperator.length >= 1) {
            output.value = output.value.replace(output.value.substring(0, findOperator[0]), '');
        } else {
            output.value = output.value.replace(output.value.substring(0, output.value.length), '');
        };
    };

    switch (special) {

        case '-':
            answer -= Number(numberA1);
            replaceRight();
            break;

        case '+':
            answer += Number(numberA1);
            replaceRight();
            break;

        case '÷':
            answer = Number(answer) / Number(numberA1);
            replaceRight();
            break;
        case '×':
            answer *= Number(numberA1);
            replaceRight();
            break;
    };

    if (output.value.length == 0) {
        output.value = answer;
        separator();
    };
};

function computing() {
    if ((output.value.substring(output.value.length, output.value.length - 1) == '+' || output.value.substring(output.value.length, output.value.length - 1) == '-' || output.value.substring(output.value.length, output.value.length - 1) == '×' || output.value.substring(output.value.length, output.value.length - 1) == '÷') || (check == true)) {
        errorCalculation();
    } else {
        firstStepOfCalculation();
    };
};
equal.onclick = function () {
    computing();

};
document.addEventListener('keydown', function (press) {
    if (press.key === 'Enter') {
        computing();
    };
});
//computing