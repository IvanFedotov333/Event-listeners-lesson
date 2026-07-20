const btn = document.querySelector("#e_btn");
const circle = document.querySelector("#circle");
const square = document.querySelector("#square");

const toggler = function (event) {
  console.log(
    "Событие сработало на " +
      event.target.id +
      " и перенеслось на " +
      event.currentTarget.id,
  );
  event.target.classList.toggle("green");
};

btn.addEventListener("click", toggler, true);
circle.addEventListener("click", toggler, true);
square.addEventListener("click", toggler, true);
