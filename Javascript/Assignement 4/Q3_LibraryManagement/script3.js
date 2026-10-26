"use strict";

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return false;
        }
        this.isIssued = true;
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            return false;
        }
        this.isIssued = false;
        return true;
    }
}

const libraryBooks = [
    new Book("The Hobbit", "J. R. R. Tolkien", "978-0547928227"),
    new Book("Pride and Prejudice", "Jane Austen", "978-0141439518"),
    new Book("1984", "George Orwell", "978-0451524935", true),
    new Book("The Blue Umbrella", "Ruskin Bond", "978-8171673407"),
    new Book("The Alchemist", "Paulo Coelho", "978-0061122415")
];

const libraryForm = document.querySelector("#library-form");
const libraryMessage = document.querySelector("#library-message");
const bookList = document.querySelector("#book-list");

function renderBooks() {
    bookList.replaceChildren();
    const availableBooks = libraryBooks.filter((book) => !book.isIssued);

    const availableHeading = document.createElement("p");
    availableHeading.className = "message";
    availableHeading.textContent = `Available books: ${availableBooks.length}`;
    bookList.append(availableHeading);

    for (const book of availableBooks) {
        const card = document.createElement("article");
        card.className = "item-card";
        const title = document.createElement("h3");
        title.textContent = book.title;
        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        const isbn = document.createElement("p");
        isbn.textContent = `ISBN: ${book.ISBN}`;
        const status = document.createElement("p");
        status.textContent = "Available";
        card.append(title, author, isbn, status);
        bookList.append(card);
    }

    if (availableBooks.length === 0) {
        const emptyState = document.createElement("p");
        emptyState.className = "item-card";
        emptyState.textContent = "There are no available books right now.";
        bookList.append(emptyState);
    }
}

libraryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const isbn = libraryForm.elements.namedItem("isbn").value.trim();
    const action = libraryForm.elements.namedItem("action").value;
    const book = libraryBooks.find((item) => item.ISBN.toLowerCase() === isbn.toLowerCase());

    if (!book) {
        libraryMessage.textContent = "No book was found with that ISBN.";
        libraryMessage.classList.add("message--error");
    } else {
        const succeeded = action === "issue" ? book.issueBook() : book.returnBook();
        libraryMessage.textContent = succeeded
            ? `${book.title} has been ${action === "issue" ? "issued" : "returned"}.`
            : action === "issue"
                ? `${book.title} is already issued.`
                : `${book.title} is not currently issued.`;
        libraryMessage.classList.toggle("message--error", !succeeded);
        if (succeeded) {
            libraryForm.reset();
        }
    }

    renderBooks();
});

renderBooks();
