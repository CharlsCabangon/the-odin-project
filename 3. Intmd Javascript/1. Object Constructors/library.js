
const myLibrary = [];

function Book(title, author, pages, hasRead) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    this.info = function() {
        const readStatus = hasRead ? "already read" : "not read yet";
        return `${title} by ${author}, ${pages} pages, ${readStatus}`;
    }
}

// let toKillAMockingBird = new Book("To Kill a Mockingbird", "Harper Lee", 336, true);
// console.log(toKillAMockingBird.info());

function addBookToLibrary() {

}