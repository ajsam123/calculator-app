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
  console.log(value);
  value = [];
  screen.value = "";
  console.log(value);
});

deleteKey.addEventListener("click", () => {
  value.pop();
  const formatted = value.join("");
  screen.value = formatted;
});

const evaluator = (value) => {
  const operators = ["/", "x", "+", "-"];
  while (value.includes("/") || value.includes("x")) {
    for (let i = 0; i < value.length; i++) {
      if (value[i] === "/") {
        const beforeNum = Number(value[i - 1]);
        const afterNum = Number(value[i + 1]);
        const divResult = beforeNum / afterNum;
        value.splice(i - 1, 3, divResult);
        break;
      }
      if (value[i] === "x") {
        const beforeNum = Number(value[i - 1]);
        const afterNum = Number(value[i + 1]);
        const divResult = beforeNum * afterNum;
        value.splice(i - 1, 3, divResult);
        break;
      }
    }
  }
};
