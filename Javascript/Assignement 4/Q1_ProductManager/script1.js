"use strict";

class Product {
    constructor(id, name, price, stock, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }

    applyDiscount(percent) {
        if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
            throw new RangeError("Discount must be between 0 and 100 percent.");
        }

        this.price = Number((this.price * (1 - percent / 100)).toFixed(2));
    }

    displayDetails() {
        return `${this.name} (${this.id}) | ${this.category} | ${formatCurrency(this.price)} | Stock: ${this.stock}`;
    }
}

const productItems = [
    new Product("P-101", "Wireless Headphones", 2499, 18, "Electronics"),
    new Product("P-102", "Desk Lamp", 850, 24, "Home"),
    new Product("P-103", "Mechanical Keyboard", 1899, 12, "Electronics"),
    new Product("P-104", "Notebook Set", 399, 50, "Stationery"),
    new Product("P-105", "Travel Backpack", 1299, 9, "Accessories")
];

const productForm = document.querySelector("#product-form");
const productList = document.querySelector("#product-list");
const filteredProducts = document.querySelector("#filtered-products");
const discountProduct = document.querySelector("#discount-product");
const productMessage = document.querySelector("#product-message");

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    }).format(amount);
}

function renderProducts() {
    productList.replaceChildren();
    discountProduct.replaceChildren();

    for (const product of productItems) {
        const card = document.createElement("article");
        card.className = "item-card";
        const title = document.createElement("h3");
        title.textContent = product.name;
        const details = document.createElement("p");
        details.textContent = product.displayDetails();
        card.append(title, details);
        productList.append(card);

        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        discountProduct.append(option);
    }
}

function renderFilteredProducts() {
    filteredProducts.replaceChildren();
    const matchingProducts = productItems.filter((product) => product.price > 1000);
    console.log("Products priced above 1000:", matchingProducts);

    for (const product of matchingProducts) {
        const item = document.createElement("li");
        item.textContent = product.displayDetails();
        filteredProducts.append(item);
    }

    if (matchingProducts.length === 0) {
        const item = document.createElement("li");
        item.textContent = "No products currently cost more than 1000.";
        filteredProducts.append(item);
    }
}

productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(productForm);
    const id = String(formData.get("id")).trim();

    if (productItems.some((product) => product.id.toLowerCase() === id.toLowerCase())) {
        productMessage.textContent = "A product with this ID already exists.";
        productMessage.classList.add("message--error");
        return;
    }

    productItems.push(new Product(
        id,
        String(formData.get("name")).trim(),
        Number(formData.get("price")),
        Number(formData.get("stock")),
        String(formData.get("category")).trim()
    ));
    productForm.reset();
    productMessage.textContent = "Product added.";
    productMessage.classList.remove("message--error");
    renderProducts();
    renderFilteredProducts();
});

document.querySelector("#apply-discount").addEventListener("click", () => {
    const product = productItems.find((item) => item.id === discountProduct.value);
    const percent = Number(document.querySelector("#discount-percent").value);

    if (!product || !Number.isFinite(percent) || percent < 0 || percent > 100) {
        productMessage.textContent = "Choose a product and enter a discount from 0 to 100.";
        productMessage.classList.add("message--error");
        return;
    }

    product.applyDiscount(percent);
    productMessage.textContent = `${percent}% discount applied to ${product.name}.`;
    productMessage.classList.remove("message--error");
    renderProducts();
    renderFilteredProducts();
});

document.querySelector("#filter-products").addEventListener("click", renderFilteredProducts);
document.querySelector("#show-all-products").addEventListener("click", () => {
    filteredProducts.replaceChildren();
    for (const product of productItems) {
        const item = document.createElement("li");
        item.textContent = product.displayDetails();
        filteredProducts.append(item);
    }
});

renderProducts();
renderFilteredProducts();
