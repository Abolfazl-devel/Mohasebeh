'use strict';
// مقدار اولیه
var money = document.getElementById('input_money');
// مقدار اولیه

// درصد افزایش
var percent = document.getElementById('input_percent');
// درصد افزایش

//تعداد دفعات
var time = document.getElementById('input_time');
// تعداد دفعات

// تایپ اعداد
//تفکیک اعداد
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
// تایپ اعداد
// تفکیک اعداد

//محاسبه
var computing = document.getElementsByClassName('compound-calculator__button')[0];
var output_div = document.getElementById('calculator__output');

computing.onclick = function () {
  calculation();
};

function calculation() {
  var notseparationO = money.value.replace(/,/g, '');
  var discharging = Number(notseparationO);
  var notseparationP = percent.value.replace(/,/g, '');
  var percentage = Number(notseparationP);
  var notseparationT = time.value.replace(/,/g, '');
  var excretion = Number(notseparationT);
  output_div.innerHTML = "";
  for (var i = 1; i <= excretion; i++) {
    var output = document.createElement('p');
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
//محاسبه