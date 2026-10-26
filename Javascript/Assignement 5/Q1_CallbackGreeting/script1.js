"use strict";

(() => {
    function showEndMessage() {
        return "Welcome to the course!";
    }

    function greetUser(name, callback) {
        if (typeof callback !== "function") {
            throw new TypeError("greetUser requires a callback function.");
        }

        return `Hello ${name}\n${callback()}`;
    }

    document.querySelector("#greeting-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.querySelector("#greeting-name").value.trim();
        document.querySelector("#greeting-output").textContent = greetUser(name, showEndMessage);
    });
})();
