"use strict";

(() => {
    function makeMultiplier(multiplier) {
        return function multiply(number) {
            return number * multiplier;
        };
    }

    const triple = makeMultiplier(3);

    document.querySelector("#multiplier-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const number = Number(document.querySelector("#multiplier-value").value);

        if (!Number.isFinite(number)) {
            document.querySelector("#multiplier-output").textContent =
                "Enter a finite number.";
            return;
        }

        document.querySelector("#multiplier-output").textContent =
            `triple(${number}) = ${triple(number)}\nThe returned function remembers multiplier = 3 from makeMultiplier's scope.`;
    });
})();
