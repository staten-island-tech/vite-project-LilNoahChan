/* 

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

export { }
 */

const DOMSelectors = {
  button: document.getElementById("theme"),
  button2: document.getElementById("htl"),
  button3: document.getElementById("lth"),
  button4: document.getElementById("amd"),
  button5: document.getElementById("nividia"),
  box: document.getElementById("container"),
};
export {DOMSelectors};

DOMSelectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});