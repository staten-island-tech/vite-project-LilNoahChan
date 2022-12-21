const DOMselectors ={
button: document.getElementById("b1"),
button2: document.getElementById("b2"),
button3: document.getElementById("b3"),
button4: document.getElementById("b4"),
button5: document.getElementById("b5"),
button6: document.getElementById("b6"),

box: document.getElementById("container"),
};

export { DOMselectors };

DOMselectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("bluemode")) {
    document.body.classList.add("orangemode");
    document.body.classList.remove("bluemode");
    
  } else {
    document.body.classList.add("bluemode");
    document.body.classList.remove("orangemode");
  }
});