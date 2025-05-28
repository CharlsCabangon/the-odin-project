export class Book {
    constructor(title, author, pages, hasRead) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead ? 'already read' : 'not read yet'}`;
    }
}