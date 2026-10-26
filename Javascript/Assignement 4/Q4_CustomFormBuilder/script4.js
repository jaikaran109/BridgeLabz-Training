"use strict";

class FormBuilder {
    constructor(fields, container) {
        this.fields = fields;
        this.container = container;
    }

    render() {
        const fieldMarkup = this.fields.map((field) => {
            const safeName = escapeHtml(field.name);
            const safeLabel = escapeHtml(field.label);
            const safeType = ["text", "email", "number"].includes(field.type)
                ? field.type
                : "text";

            return `
                <label for="generated-${safeName}">${safeLabel}</label>
                <input id="generated-${safeName}" name="${safeName}" type="${safeType}" required>
            `;
        }).join("");

        this.container.innerHTML = `
            <form id="generated-form" class="form-grid form-grid--narrow">
                ${fieldMarkup}
                <button type="submit">Submit generated form</button>
            </form>
        `;
    }

    getFormData() {
        const form = this.container.querySelector("#generated-form");
        return Object.fromEntries(new FormData(form).entries());
    }
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
    })[character]);
}

const generatedFormContainer = document.querySelector("#dynamic-form-container");
const generatedFormBuilder = new FormBuilder([
    { type: "text", name: "username", label: "Username" },
    { type: "email", name: "email", label: "Email" },
    { type: "number", name: "age", label: "Age" }
], generatedFormContainer);

generatedFormBuilder.render();
generatedFormContainer.querySelector("#generated-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const result = generatedFormBuilder.getFormData();
    document.querySelector("#builder-result").textContent = JSON.stringify(result, null, 2);
    document.querySelector("#builder-result").hidden = false;
    document.querySelector("#builder-message").textContent = "Form data returned as an object.";
});
