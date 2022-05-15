const number1 = document.getElementById("num1") as HTMLInputElement;
const number2 = document.getElementById("num2") as HTMLInputElement;
const button = document.querySelector("button")!; // Tell typescript that wont be null
const numberArray: number[] = [];
const stringArray: string[] = [];
const add = (number1: number | string, number2: number | String) => {
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 + number2;
  }
  if (typeof number1 === "string" && typeof number2 === "string") {
    return number1 + " " + number2;
  }
  return +number1 + +number2;
};

function printout(resultObj: { value: number; timestamp: Date }) {
  console.log([resultObj.value, resultObj.timestamp]);
}

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
  const numberResult = add(+num1, +num2) as number;
  numberArray.push(numberResult);
  const stringResult = add(num1, num2) as string;
  stringArray.push(stringResult);
  printout({ value: numberResult, timestamp: new Date() });
  console.log(numberArray);
  console.log(stringArray);
});
