// const d = document.querySelector;
const screen = document.querySelector(".result-display");
const key = document.querySelectorAll(".key");
const deleteKey = document.querySelector(".delete-key");
const resetKey = document.querySelector(".reset-key");
const optKey = document.querySelectorAll(".opt-key");

let value = [];

key.forEach((key, index) => {
  key.addEventListener("click", () => {
    const keyValue = key.dataset.value;
    value.push(keyValue);
    const formatted = value.join("");
    screen.value = formatted;
  });
});

optKey.forEach((key, index) => {
  key.addEventListener("click", () => {
    const keyValue = key.dataset.value;
    console.log(keyValue);
    value.push(keyValue);
    console.log(value);
    const formatted = value.join("");
    screen.value = formatted;
  });
});

resetKey.addEventListener("click", () => {
  value = [];
  screen.value = "";
  console.log(value);
});

deleteKey.addEventListener("click", () => {
  value.pop();
  const formatted = value.join("");
  screen.value = formatted;
});
