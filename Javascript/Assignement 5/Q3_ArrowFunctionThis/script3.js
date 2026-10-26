"use strict";

(function runArrowThisExample() {
    "use strict";

    const user = {
        name: "Aarav",
        showName: () => `Arrow method: this.name is ${String(this?.name)} (undefined).`
    };

    document.querySelector("#show-arrow-name").addEventListener("click", () => {
        document.querySelector("#this-output").textContent =
            `${user.showName()}\nThe arrow function captures the outer this instead of the user object.`;
    });

    document.querySelector("#fix-user-method").addEventListener("click", () => {
        user.showName = function showName() {
            return `Normal method: this.name is "${this.name}".`;
        };
        document.querySelector("#this-output").textContent =
            `${user.showName()}\nA normal method receives the user object as this.`;
    });
}).call(undefined);
