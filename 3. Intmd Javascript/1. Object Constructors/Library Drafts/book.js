
function Book(title, author, pages, hasRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    this.info = function() {
        const readStatus = this.hasRead ? "already read" : "not read yet";
        return `${title} by ${author}, ${pages} pages, ${readStatus}`;
    }
}

const harryPotter = new Book("Harry Potter", "J.K. Rowling", 911, false);

console.log(harryPotter.info());


console.log(Object.getPrototypeOf(harryPotter) === Book.prototype);


let y = [];
console.log(y.__proto__ === Array.prototype);
