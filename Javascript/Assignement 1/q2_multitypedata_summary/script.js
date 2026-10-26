
// Declare variables of different data types
let userName = "Kakul";
let age = 20;
let isStudent = true;
let subjects = ["JavaScript", "Java", "Python"];
let user = { name: "Kakul", age: 20 };
let address = null;
let phoneNumber;

let dataSummary = [
    {
        Label: "User Name",
        Value: userName,
        Type: typeof userName
    },
    {
        Label: "Age",
        Value: age,
        Type: typeof age
    },
    {
        Label: "Is Student",
        Value: isStudent,
        Type: typeof isStudent
    },
    {
        Label: "Subjects",
        Value: subjects.join(", "),
        Type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    {
        Label: "User Object",
        Value: JSON.stringify(user),
        Type: typeof user
    },
    {
        Label: "Address",
        Value: String(address),
        Type: address === null ? "null" : typeof address
    },
    {
        Label: "Phone Number",
        Value: String(phoneNumber),
        Type: typeof phoneNumber
    }
];

// Display all entries in a table
console.table(dataSummary);
