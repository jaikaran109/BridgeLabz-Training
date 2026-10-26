"use strict";

const bookingForm = document.querySelector("#booking-form");
const bookingMessage = document.querySelector("#booking-message");
const bookingTicket = document.querySelector("#booking-ticket");
const bookingRules = {
    name: {
        pattern: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
        message: "Use letters only, with spaces allowed between names."
    },
    email: {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email address."
    },
    seats: {
        pattern: /^(?:[1-9]|10)$/,
        message: "Choose a whole number of seats from 1 to 10."
    }
};

function validateBookingField(name) {
    const input = bookingForm.elements.namedItem(name);
    const error = document.querySelector(`#booking-${name}-error`);
    const value = input.value.trim();
    const valid = bookingRules[name].pattern.test(value);

    input.classList.toggle("is-invalid", !valid);
    input.classList.toggle("is-valid", valid);
    input.setAttribute("aria-invalid", String(!valid));
    error.textContent = valid ? "" : bookingRules[name].message;
    return valid;
}

for (const name of Object.keys(bookingRules)) {
    bookingForm.elements.namedItem(name).addEventListener("input", () => {
        if (bookingForm.dataset.submitted === "true") {
            validateBookingField(name);
        }
    });
}

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    bookingForm.dataset.submitted = "true";
    const valid = Object.keys(bookingRules)
        .map(validateBookingField)
        .every(Boolean);

    if (!valid) {
        bookingMessage.textContent = "Please correct the highlighted fields.";
        bookingMessage.classList.add("message--error");
        bookingTicket.hidden = true;
        return;
    }

    const booking = {
        name: bookingForm.elements.namedItem("name").value.trim(),
        email: bookingForm.elements.namedItem("email").value.trim(),
        seats: Number(bookingForm.elements.namedItem("seats").value)
    };

    bookingMessage.textContent = "Booking confirmed.";
    bookingMessage.classList.remove("message--error");
    bookingTicket.textContent = `Movie ticket booking\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
    bookingTicket.hidden = false;
});
