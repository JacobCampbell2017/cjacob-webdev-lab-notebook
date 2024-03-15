// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element
// callback function to handle event
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput1");
  const output = document.getElementById("output");
  const copyButton = document.getElementById("copy");
  // when the user clicks the 'copy' button, copy the user input to the output area
  copyButton.addEventListener("click", () => {
    output.textContent = input.value;
  });
});
// Exercise #2:
// when the user enters input text, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element
// callback function to handle event
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("userInput2");
  const output = document.getElementById("output");
  input.addEventListener("input", () => {
    output.textContent = input.value;
  });
});
