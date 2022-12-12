import "./styles/style.css";
import { cars } from "./cars";
console.log(cars);

const commands = {
    createcards: function(){
        carsData.forEach((cars) => {
            DOMselectors.box.insertAdjacentHTML(
              "beforeend",
              `
                <div id="productCard">
                <h2>${cars.name}</h2>
                <p><img src=${cars.imgURL}></p>
                <p>Year: ${cars.year}</p>
                <p>Price: ${cars.cost}</p>
              `
            );
          });
    },

         
}
commands.createcards()