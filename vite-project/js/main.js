import "../styles/style.css";
import { cars } from "./cars";
console.log(cars);
import { DOMselectors } from "./index";

const commands = {
  createcards: function () {
    cars.forEach((cars) => {
      DOMselectors.box.insertAdjacentHTML(
        "beforeend",
        `
                <div id="inner">
                <h2>${cars.name}</h2>
                <p><img class="picture" src=${cars.imgURL}></p>
                <p>Condition: ${cars.year}</p>
                <p>Price: ${cars.cost}</p>
                </div>
              `
      );
    });
  },
  FilterOld: function () {
    cars.filter((cars) => cars.year.includes("Old"))
      .forEach((cars) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `
                <div id="inner">
                <h2>${cars.name}</h2>
                <p><img class="picture" src=${cars.imgURL}></p>
                <p>Condition: ${cars.year}</p>
                <p>Price: ${cars.cost}</p>
                </div>
              `
        );
      });
  },

  FilterNew: function () {
    cars.filter((cars) => cars.year.includes("New"))
      .forEach((cars) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `
                <div id="inner">
                <h2>${cars.name}</h2>
                <p><img class="picture" src=${cars.imgURL}></p>
                <p>Condition: ${cars.year}</p>
                <p>Price: ${cars.cost}</p>
                </div>
              `
        );
      });
  },

  FilterExpensive: function () {
    cars.filter((cars) => cars.cost.includes("Expensive"))
      .forEach((cars) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `
                <div id="inner">
                <h2>${cars.name}</h2>
                <p><img class="picture" src=${cars.imgURL}></p>
                <p>Condition: ${cars.year}</p>
                <p>Price: ${cars.cost}</p>
                </div>
              `
        );
      });
  },
  FilterCheap: function () {
    cars.filter((cars) => cars.cost.includes("Cheap"))
      .forEach((cars) => {
        DOMselectors.box.insertAdjacentHTML(
          "beforeend",
          `
                <div id="inner">
                <h2>${cars.name}</h2>
                <p><img class="picture" src=${cars.imgURL}></p>
                <p>Condition: ${cars.year}</p>
                <p>Price: ${cars.cost}</p>
                </div>
              `
        );
      });
  },
  remove: function () {
    let card = document.querySelectorAll(".inner");
    card.forEach((card) => {
      card.remove();
    });
  },
};


commands.createcards();
DOMSelectors.button3.addEventListener("click", function () {
  commands.remove();
  commands.FilterOld();
});

DOMSelectors.button4.addEventListener("click", function () {
  commands.remove();
  commands.FilterNew();
});
DOMSelectors.button5.addEventListener("click", function () {
  commands.remove();
  commands.FilterExpensive();
});
DOMSelectors.button6.addEventListener("click", function () {
  commands.remove();
  commands.FilterCheap();
});