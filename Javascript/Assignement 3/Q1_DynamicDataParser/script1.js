
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14",
    null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (const value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log("\nOriginal Value:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    // Skip blank strings, NaN strings, and values like 100px.
    const isInvalid =
        (typeof value === "string" && value.trim() === "") ||
        (typeof value === "string" && value.trim() === "NaN") ||
        Number.isNaN(numberValue) ||
        (typeof value === "string" &&
            value.trim() !== "" &&
            Number.isNaN(Number(value)));

    if (isInvalid) {
        invalidNumbers.push(value);
        console.log("Status: Invalid number");
    } else if (value === null || value === undefined) {
        // These convert to 0 with Number(), but are not actual numeric data.
        invalidNumbers.push(value);
        console.log("Status: Invalid numeric data");
    } else {
        validNumbers.push(numberValue);
        console.log("Status: Valid number");
    }
}

console.log("\nValid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
