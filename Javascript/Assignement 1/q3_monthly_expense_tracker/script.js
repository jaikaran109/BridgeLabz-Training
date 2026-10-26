
// Monthly expenses for five categories
let expenses = [5000, 2000, 10000, 1500, 2500];

let totalExpense = 0;

// Calculate total using the assignment operator
for (let expense of expenses) {
    totalExpense += expense;
}

// Calculate average expense
let averageExpense = totalExpense / expenses.length;

// Add 10% tax to the total
let tax = totalExpense * 0.10;
let finalAmount = totalExpense;
finalAmount += tax;

// Display the results
console.log("Total Expense: ₹" + totalExpense.toFixed(2));
console.log("Average Expense: ₹" + averageExpense.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount: ₹" + finalAmount.toFixed(2));
