"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var btn = document.getElementById('btn--img');
var inputYear = document.getElementById('input--year');
var outputYear = document.getElementById('output--year');
var inputDay = document.getElementById('input--day');
var outputDay = document.getElementById('output--day');
var inputMonth = document.getElementById('input--month');
var outputMonth = document.getElementById('output--month'); // DOM Selection
// let btn = document.querySelector(".con__btn");
// let input = document.querySelector(".con__input");
// let output = document.querySelector(".heading--2");
// event listener to the button

btn.addEventListener("click", calculate);

function calculate() {
  // collect the input value
  var inputData, inputArray, year, month, day; // store collect the input value

  inputData = inputYear.value; //check the input value is black or not

  if (inputData !== "") {
    //split the input value and store into array
    inputArray = inputData.split("-"); //deconstruct the value into variable

    var _inputArray = inputArray;

    var _inputArray2 = _slicedToArray(_inputArray, 3);

    year = _inputArray2[0];
    month = _inputArray2[1];
    day = _inputArray2[2];
    year = Number(inputYear.value);
    month = Number(inputMonth.value);
    day = Number(inputDay.value); // get the current date from the date constructor

    var current, currentYear, currentMonth, currentDate, Newdate, newMonth; // new date for current date

    current = new Date();
    currentYear = current.getFullYear();
    currentMonth = current.getMonth() + 1; // get month star with 0 // for that 1 added

    currentDate = current.getDate(); // check birthday or not

    if (day === currentDate && month === currentMonth) {
      var birthday = currentYear - year;
      console.log("Congratulation! Today Is your birthday your are <span class=\"year\">".concat(birthday, "</span> Years Old. "));
    } else {
      //  calculate the day 
      if (day > currentDate) {
        Newdate = currentDate + 30;
        day = Newdate - day;
        currentMonth = currentMonth - 1;
      } else {
        day = currentDate - day;
      } // calcuclate the month


      if (month > currentMonth) {
        newMonth = currentMonth + 12;
        month = newMonth - month;
        currentYear = currentYear - 1;
      } else {
        month = currentMonth - month;
      }

      year = currentYear - year;
      output.innerHTML = "Your Age : <span class=\"year\">".concat(year, "</span> Year <span class=\"month\">").concat(month, "</span> Month <span class=\"day\">").concat(day, "</span> Days.");
      outputYear.textContent = year;
      outputMonth.textContent = month;
      outputDay.textContent = day;
    }
  } else {
    alert("Please Input your Birthday");
  }
}