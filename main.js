// const d = document.querySelector;
const screen = document.querySelector(".result-display");
const key = document.querySelectorAll(".key");
const deleteKey = document.querySelector(".delete-key");

const showNumbers = () => {};
let value = "";

key.forEach((key, index) => {
  key.addEventListener("click", () => {
    const keyValue = key.dataset.value;
    value = value + keyValue;
    screen.value = value;
  });
});

deleteKey.addEventListener("click", () => {
  screen.value = "me";
});
// screen.textContent = 2;
