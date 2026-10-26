
// Original purchase amount
let totalAmount = 7500;
let discountPercentage = 0;

// Determine the discount based on purchase amount
if (totalAmount >= 10000) {
    discountPercentage = 25;
} else if (totalAmount >= 5000) {
    discountPercentage = 15;
} else if (totalAmount >= 2000) {
    discountPercentage = 5;
}

// Calculate discount and final price
let discountAmount = totalAmount * discountPercentage / 100;
let finalPrice = Math.round(totalAmount - discountAmount);

// Display the bill
console.log("Original Total: ₹" + totalAmount);
console.log("Discount Percentage: " + discountPercentage + "%");
console.log("Discount Amount: ₹" + discountAmount.toFixed(2));
console.log("Final Price: ₹" + finalPrice);
