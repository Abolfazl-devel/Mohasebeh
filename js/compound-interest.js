'use strict';
// input
const money = document.getElementById('input_money');
// input

// percent
const percent = document.getElementById('input_percent');
// percent

//time
const time = document.getElementById('input_time');
//time

//Seperate numbers
function sanitizeInput(inputElement) {
  inputElement.oninput = function () {
    inputElement.value = inputElement.value.replace(/[^0-9.,]/g, '').replace(/(\..*?)\..*/g, '$1');
    inputElement.value = inputElement.value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    console.log(inputElement.value);
  };

};
sanitizeInput(money);
sanitizeInput(percent);
sanitizeInput(time);
//Seperate numbers


//Calculate
const computing = document.getElementsByClassName('compound-calculator__button')[0];
const output_div = document.getElementById('calculator__output');

computing.onclick = function () {
  calculation();
};

function calculation() {
  let notseparationO = money.value.replace(/,/g, '');
  let discharging = Number(notseparationO);
  let notseparationP = percent.value.replace(/,/g, '');
  let percentage = Number(notseparationP);
  let notseparationT = time.value.replace(/,/g, '');
  let excretion = Number(notseparationT);
  output_div.innerHTML = "";
  for (let i = 1; i <= excretion; i++) {
    let output = document.createElement('p');
    output_div.appendChild(output);
    discharging = (discharging * percentage / 100) + discharging;
    output.textContent = (i + ' ' + '-' + ' ' + discharging);
    output.textContent = output.textContent.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
};
document.addEventListener('keyup', function (press) {
  if (press.key === 'Enter') {
    calculation();
  };
});
//Calculate