var root = document.querySelector(":root");
var body = document.querySelector("body");
var heightElement = document.querySelector("#height"); // from query selector we can get any HTML element, but to extract value we need it to be an input element
var heightDisplay = document.querySelector(".height .value");
var weightElement = document.querySelector("#weight");
var weightDisplay = document.querySelector(".w .value");
var button = document.querySelector(".btn"); // button is of type HTML button, cuz we explicitly select a button tag in query selector
var bmiElement = document.querySelector(".bmi"); // this returns an (HTML)Element cuz we selected by class
var form = document.querySelector(".form");
var source = document.querySelector(".source");
var results = document.querySelector(".results");
var bmiClass = document.querySelector(".class");
var toggle = document.querySelector(".theme");
var right = document.querySelector(".right");
var left = document.querySelector(".left");
body.addEventListener("load", function () {
    body.setAttribute("style", "height:" + window.innerHeight); // for mobile x PWA synergy
});
toggle.addEventListener("change", function () {
    if (toggle.checked === true) {
        root.setAttribute("style", "--background:#f1f1f1;--foreground:#1f1f1f;--shadow-white:rgba(255, 255, 255, 0.75);");
    }
    else {
        root.setAttribute("style", "--background:#1f1f1f;--foreground:#f1f1f1;--shadow-white:rgba(255, 255, 255, 0.1);");
    }
});
right.addEventListener("click", function () {
    var weight = parseInt(weightDisplay.textContent);
    weight++;
    weightDisplay.textContent = weight.toString();
});
left.addEventListener("click", function () {
    var weight = parseInt(weightDisplay.textContent);
    weight--;
    weightDisplay.textContent = weight.toString();
});
heightElement.addEventListener("change", function () {
    console.log(heightElement.value);
    heightDisplay.textContent = heightElement.value;
});
button.addEventListener("click", function () {
    var height = parseInt(heightDisplay.textContent) / 100; // height is type number, cuz we explicitly take number value from input
    var weight = parseInt(weightDisplay.textContent); // weight is type any cuz input can give us any input
    var bmi = Math.floor(weight / (height * height)); // not annotating a type, cuz typesimp infers it to be a number anyways
    console.log(bmi);
    if (bmi < 19) {
        bmiClass.textContent = "Under Weight";
        root.setAttribute("style", "--foreground:#f16060");
    }
    else if (bmi < 25 && bmi > 19) {
        bmiClass.textContent = "Normal";
        root.setAttribute("style", "--foreground:#40f140");
    }
    else if (bmi < 30 && bmi > 25) {
        bmiClass.textContent = "Over Weight";
        root.setAttribute("style", "--foreground:#f16060");
    }
    else {
        bmiClass.textContent = "Obease";
        root.setAttribute("style", "--foreground:#f14040");
    }
    results.setAttribute("style", "display:flex;");
    source.setAttribute("style", "display:flex;");
    form.setAttribute("style", "display:none;");
    button.setAttribute("style", "display:none;");
    bmiElement.textContent = bmi.toString(); // toString cuz textContent can only be string
});
