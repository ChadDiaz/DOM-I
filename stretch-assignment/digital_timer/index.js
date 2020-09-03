// creating shortcut for console.log
const log = console.log;

const parentElement = document.querySelector("div");
log(parentElement)

const button = document.createElement("button");
button.textContent = "start"
log(button);
parentElement.append(button);
