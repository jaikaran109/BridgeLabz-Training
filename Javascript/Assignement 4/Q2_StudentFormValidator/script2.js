"use strict";

const studentForm = document.querySelector("#student-form");
const studentMessage = document.querySelector("#student-message");
const studentRules = {
    name: {
        pattern: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
        message: "Use letters only, with spaces allowed between names."
    },
    email: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email address, such as name@example.com."
    },
    phone: {
        pattern: /^\d{10}$/,
        message: "Enter exactly 10 digits."
    },
    password: {
        pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
        message: "Include at least one uppercase letter, one number, and one special character."
    }
};

function validateStudentField(name) {
    const input = studentForm.elements.namedItem(name);
    const error = document.querySelector(`#student-${name}-error`);
    const rule = studentRules[name];
    const value = input.value.trim();
    const valid = rule.pattern.test(value);

    input.classList.toggle("is-invalid", !valid);
    input.classList.toggle("is-valid", valid);
    input.setAttribute("aria-invalid", String(!valid));
    error.textContent = valid ? "" : rule.message;
    return valid;
}

for (const name of Object.keys(studentRules)) {
    studentForm.elements.namedItem(name).addEventListener("input", () => {
        if (studentForm.dataset.submitted === "true") {
            validateStudentField(name);
        }
    });
}

studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    studentForm.dataset.submitted = "true";
    const valid = Object.keys(studentRules)
        .map(validateStudentField)
        .every(Boolean);

    studentMessage.textContent = valid
        ? "Registration details are valid."
        : "Please correct the highlighted fields.";
    studentMessage.classList.toggle("message--error", !valid);
});
