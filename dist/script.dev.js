"use strict";

var btn = document.getElementById('btn--img');
var inputYear = document.getElementById('input--year');
var outputYear = document.getElementById('output--year');
var inputDay = document.getElementById('input--day');
var outputDay = document.getElementById('output--day');
var inputMonth = document.getElementById('input--month');
var outputMonth = document.getElementById('output--month');

btn.onclick = function () {
  var year, month, day;

  if (inputYear.value !== "") {
    year = Number(inputYear.value);
    month = Number(inputMonth.value);
    day = Number(inputDay.value);
    var current, currentYear, currentMonth, currentDate, Newdate, newMonth;
    current = new Date();
    currentYear = current.getFullYear();
    currentMonth = current.getMonth() + 1;
    currentDate = current.getDate();

    if (day === currentDate && month === currentMonth) {
      outputMonth.textContent = "0";
      outputDay.textContent = "0";
    } else {
      if (day > currentDate) {
        Newdate = currentDate + 30;
        day = Newdate - day;
        currentMonth = currentMonth - 1;
      } else {
        day = currentDate - day;
      }

      if (month > currentMonth) {
        newMonth = currentMonth + 12;
        month = newMonth - month;
        currentYear = currentYear - 1;
      } else {
        month = currentMonth - month;
      }

      year = currentYear - year;
      outputYear.textContent = year;
      outputMonth.textContent = month;
      outputDay.textContent = day;
    }
  } else {
    outputYear.textContent = "--";
    outputMonth.textContent = "--";
    outputDay.textContent = "--";
    alert("Input your age please.");
  }
};