const number1 = document.getElementById("num1") as HTMLInputElement;
const number2 = document.getElementById("num2") as HTMLInputElement;
const button = document.querySelector("button")!; // Tell typescript that wont be null
// const numberArray: number[] = [];
const numberArray: Array<number> = []; // Generic
const stringArray: string[] = [];

// Types and inference // Primitives is created just by types , Generally in Objects types and interface differ
type NumorString = string | number;

type resObj = { value: number; timestamp: Date };
// interface resObj {
//   value: number;
//   timestamp: Date;
// }

const add = (number1: NumorString, number2: NumorString) => {
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 + number2;
  }
  if (typeof number1 === "string" && typeof number2 === "string") {
    return number1 + " " + number2;
  }
  return +number1 + +number2;
};

function printout(resultObj: resObj) {
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

const newPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("It works");
  }, 2000);
});

newPromise.then((resolved) => {
  console.log(resolved.split(" "));
});
