"use strict";
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const button = document.querySelector("button"); // Tell typescript that wont be null
const add = (number1, number2) => {
    return number1 + number2;
};
console.log(add(1, 5));
// if (button) {
//   button.addEventListener("click", () => {
//     const num1 = number1.value;
//     const num2 = number2.value;
//     const result = add(+num1, +num2);
//     console.log(result);
//   });
// }
button.addEventListener("click", () => {
    const num1 = number1.value;
    const num2 = number2.value;
    const result = add(+num1, +num2);
    console.log(result);
});
