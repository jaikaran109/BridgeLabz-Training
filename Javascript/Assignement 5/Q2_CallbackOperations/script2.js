"use strict";

(() => {
    const numbers = [1, 2, 3, 4];

    function applyOperation(values, operation) {
        if (!Array.isArray(values) || typeof operation !== "function") {
            throw new TypeError("Pass an array and an operation callback.");
        }

        return values.map(operation);
    }

    document.querySelector("#double-numbers").addEventListener("click", () => {
        const result = applyOperation(numbers, (number) => number * 2);
        document.querySelector("#operation-output").textContent =
            `Double: [${result.join(", ")}]`;
    });

    document.querySelector("#square-numbers").addEventListener("click", () => {
        const result = applyOperation(numbers, (number) => number ** 2);
        document.querySelector("#operation-output").textContent =
            `Square: [${result.join(", ")}]`;
    });
})();
