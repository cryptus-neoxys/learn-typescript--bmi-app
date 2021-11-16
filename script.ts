const heightElement = document.querySelector("#height") as HTMLInputElement; // from query selector we can get any HTML element, but to extract value we need it to be an input element
const weightElement = document.querySelector("#weight") as HTMLInputElement;
const button = document.querySelector("button"); // button is of type HTML button, cuz we explicitly select a button tag in query selector
const bmiElement = document.querySelector(".bmi"); // this returns an (HTML)Element cuz we selected by class

button.addEventListener("click", () => {
  const height: number = heightElement.valueAsNumber / 100; // height is type number, cuz we explicitly take number value from input
  const weight: any = weightElement.value; // weight is type any cuz input can give us any input

  const bmi = weight / (height * height); // not annotating a type, cuz typesimp infers it to be a number anyways

  bmiElement.textContent = bmi.toString(); // toString cuz textContent can only be string
});
