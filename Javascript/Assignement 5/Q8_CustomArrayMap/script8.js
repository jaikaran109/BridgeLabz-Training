"use strict";

(() => {
    Object.defineProperty(Array.prototype, "myMap", {
        configurable: true,
        writable: true,
        value: function myMap(callback, thisArg) {
            if (this == null || typeof callback !== "function") {
                throw new TypeError("myMap needs an array and a callback function.");
            }

            const source = Object(this);
            const result = new Array(source.length);

            for (let index = 0; index < source.length; index += 1) {
                if (Object.prototype.hasOwnProperty.call(source, index)) {
                    result[index] = callback.call(thisArg, source[index], index, source);
                }
            }

            return result;
        }
    });

    document.querySelector("#run-my-map").addEventListener("click", () => {
        const values = [1, 2, 3];
        const doubled = values.myMap((number) => number * 2);
        document.querySelector("#my-map-output").textContent =
            `[${values.join(", ")}].myMap(num => num * 2)\n[${doubled.join(", ")}]`;
    });
})();
