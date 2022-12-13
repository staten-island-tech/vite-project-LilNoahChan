import "../styles/style.css";
import { cars } from "./cars";
console.log(cars);
import { DOMselectors } from "./index";

const commands = {
    createcards: function(){
        cars.forEach(cars => {DOMselectors.box.insertAdjacentHTML(
              "beforeend",
              `
                <div id="container">
                <h2>${cars.name}</h2>
                <p><img src=${cars.imgURL}></p>
                <p>Year: ${cars.year}</p>
                <p>Cost: ${cars.cost}</p>
                </div>
              `
            );
          });
    },

         
}
commands.createcards()