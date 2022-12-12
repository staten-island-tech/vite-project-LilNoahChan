import "/styles/style.css";
import { cars} from "./js/cars.js";
console.log(cars);


carsData.forEach(cars => {
    document.getElementById("products").insertAdjacentHTML
        ("beforeend",
            `
      <div id="productCard">
      <h2>${cars.name}</h2>
      <p><img src=${cars.imgURL}></p>
      <p>Year: ${cars.year}</p>
      <p>Price: ${cars.cost}</p>
    `
        )
});