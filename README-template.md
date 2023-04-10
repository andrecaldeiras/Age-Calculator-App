# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://andrecaldeiras.github.io/Age-Calculator-App/](https://andrecaldeiras.github.io/Age-Calculator-App/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

Some code snippets:

```pug
.card
  .card__outputs 
            .output
              label years
              p#output--year --
            .output 
              label months
              p#output--month --
            .output 
              label days
              p#output--day --
```
```sass
.card__inputs
        display: flex
        flex-flow: row nowrap
        max-width: 100%
        gap: 10px
        margin-bottom: 5%

        .input
            display: flex
            flex-flow: column
            width: calc((100% / 3) - 7px)
```
```js
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
}
```
