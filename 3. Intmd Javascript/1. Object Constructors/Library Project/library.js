
const myLibrary = [];

function Book(title, author, pages, hasRead) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

Book.prototype.info = function() {
    const readStatus = this.hasRead ? "already read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
}

function addBookToLibrary() {

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = parseInt(document.getElementById("pages").value, 10);
    const selectedStatus = document.querySelector("input[name='read-status']:checked")

    if (!title || !author || isNaN(pages)) {
        alert("Please fill in all the fields correctly.");
        return;
    }

    if (!selectedStatus) {
        alert("Please select a read status.");
        return;
    }

    const hasRead = selectedStatus.value === "yes";
    const newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);

    console.log("Book added:", newBook);
}

document.getElementById("btn-submit").addEventListener('click', () => {
    addBookToLibrary();
    console.log(myLibrary);
})