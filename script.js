var heightElement = document.querySelector("#height");
var weightElement = document.querySelector("#weight");
var button = document.querySelector("button");
var bmiElement = document.querySelector(".bmi");
button.addEventListener("click", function () {
    var height = heightElement.value; // height is any cuz, input value may be anything
    var weight = weightElement.value;
    var bmi = weight / (height * height);
    bmiElement.textContent = bmi.toString();
});
