const root = document.querySelector(":root");
const body = document.querySelector("body");

const heightElement = document.querySelector("#height") as HTMLInputElement; // from query selector we can get any HTML element, but to extract value we need it to be an input element
const heightDisplay = document.querySelector(".height .value");
const weightElement = document.querySelector("#weight") as HTMLInputElement;
const weightDisplay = document.querySelector(".w .value");
const button = document.querySelector(".btn"); // button is of type HTML button, cuz we explicitly select a button tag in query selector
const bmiElement = document.querySelector(".bmi"); // this returns an (HTML)Element cuz we selected by class
const toggle = document.querySelector(".theme") as HTMLInputElement;
const right = document.querySelector(".right");
const left = document.querySelector(".left");

body.addEventListener("load", () => {
  body.setAttribute("style", `height:${window.innerHeight}`); // for mobile x PWA synergy
});

toggle.addEventListener("change", () => {
  if (toggle.checked === true) {
    root.setAttribute(
      "style",
      "--background:#f1f1f1;--foreground:#1f1f1f;--shadow-white:rgba(255, 255, 255, 0.75);"
    );
  } else {
    root.setAttribute(
      "style",
      "--background:#1f1f1f;--foreground:#f1f1f1;--shadow-white:rgba(255, 255, 255, 0.1);"
    );
  }
});

right.addEventListener("click", () => {
  let weight = parseInt(weightDisplay.textContent);
  weight++;
  weightDisplay.textContent = weight.toString();
});

left.addEventListener("click", () => {
  let weight = parseInt(weightDisplay.textContent);
  weight--;
  weightDisplay.textContent = weight.toString();
});

heightElement.addEventListener("change", () => {
  console.log(heightElement.value);
  heightDisplay.textContent = heightElement.value;
});

button.addEventListener("click", () => {
  const height: number = heightElement.valueAsNumber / 100; // height is type number, cuz we explicitly take number value from input
  const weight: any = weightElement.value; // weight is type any cuz input can give us any input

  const bmi = weight / (height * height); // not annotating a type, cuz typesimp infers it to be a number anyways

  bmiElement.textContent = bmi.toString(); // toString cuz textContent can only be string
});
