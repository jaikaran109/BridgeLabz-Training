
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedTotal = 0;

// Calculate discounted price of each item
for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    let finalPrice = product.price -
        (product.price * discount / 100);

    discountedTotal += finalPrice;

    console.log(
        product.item + ": ₹" + finalPrice.toFixed(2)
    );
}

// Calculate original cart value using reduce()
let totalCartValue = cart.reduce(
    (sum, product) => sum + product.price,
    0
);

// Apply extra 5% discount if original cart value exceeds ₹50,000
if (totalCartValue > 50000) {
    discountedTotal -= discountedTotal * 0.05;
}

console.log("Original Cart Value: ₹" + totalCartValue);
console.log("Final Cart Total: ₹" + discountedTotal.toFixed(2));
