document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

const DOMselectors ={
button: document.getElementById("b1"),
button2: document.getElementById("b2"),
button3: document.getElementById("b3"),
button4: document.getElementById("b4"),
button5: document.getElementById("b5"),
box: document.getElementById("container"),
};