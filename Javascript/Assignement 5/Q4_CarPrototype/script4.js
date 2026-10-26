"use strict";

(() => {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    Car.prototype.getDetails = function getDetails() {
        return `${this.brand} ${this.model}`;
    };

    const cars = [
        new Car("Toyota", "Corolla"),
        new Car("Tesla", "Model 3")
    ];

    document.querySelector("#show-cars").addEventListener("click", () => {
        const details = cars.map((car) => car.getDetails());
        document.querySelector("#car-output").textContent =
            `${details.join("\n")}\nBoth cars share getDetails: ${cars[0].getDetails === cars[1].getDetails}`;
    });
})();
