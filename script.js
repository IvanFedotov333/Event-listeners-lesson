const btn = document.querySelector("#btn");
const textInput = document.querySelector("#text");
const square = document.querySelector("#square");
const eBtn = document.querySelector("#e_btn");
const range = document.querySelector("#range");
const circle = document.querySelector("#circle");
const rangeSpan = document.querySelector("#range-span");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const color = textInput.value.trim();
  if (color) {
    square.style.backgroundColor = color;
  }
});

eBtn.style.display = "none";

range.addEventListener("input", function () {
  const percent = range.value + "%";
  circle.style.width = percent;
  circle.style.height = percent;

  rangeSpan.textContent = range.value + "%";
});
