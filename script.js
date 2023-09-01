// get elements
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
display.value = "";
// variables
const acceptedChars = [
  "c",
  "/",
  "*",
  "-",
  "7",
  "8",
  "9",
  "+",
  "4",
  "5",
  "6",
  "equals",
  "1",
  "2",
  "3",
  "0",
  ".",
];
// functions
function handleClick(e) {
  const target = e.target.id;
  if (acceptedChars.includes(target)) {
    if (target === "equals") {
      const result = eval(display.value);
      display.value = result;
    } else if (target === "c") {
      display.value = "";
    } else {
      display.value += target;
    }
  } else {
    return;
  }
}
// eventListeners
buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
