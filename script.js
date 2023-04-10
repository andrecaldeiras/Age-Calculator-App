const btn = document.getElementById('btn--img');
const inputYear = document.getElementById('input--year');
const outputYear = document.getElementById('output--year');
const inputDay = document.getElementById('input--day');
const outputDay = document.getElementById('output--day');
const inputMonth = document.getElementById('input--month');
const outputMonth = document.getElementById('output--month');

btn.onclick = function() {
    let year, month, day;
    if (inputYear.value !== "") {
        year = Number(inputYear.value);
        month = Number(inputMonth.value);
        day = Number(inputDay.value);

        let current, currentYear, currentMonth, currentDate, Newdate, newMonth;
        
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
}