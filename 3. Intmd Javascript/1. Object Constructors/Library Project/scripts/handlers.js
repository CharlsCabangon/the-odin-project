import { Book } from './book.js'; // Needed to create new book objects

// Sets up form event listeners: open dialog, close dialog, handle submit
export function setupFormHandlers(library, renderLibrary, saveLibrary) {
    const dialog = document.getElementById("addBookDialog"); // <dialog> element for form
    const form = document.getElementById("bookForm"); // Book form
    const openBtn = document.getElementById("openDialogBtn"); // Button to show dialog
    const cancelBtn = document.getElementById("cancelBtn"); // Button to close dialog

    openBtn.addEventListener('click', () => {
        dialog.showModal(); 
        document.getElementById("title").focus(); // UX purposes
    });

    cancelBtn.addEventListener('click', () => {
        dialog.close();
    });

    dialog.addEventListener('close', () => {
        form.reset(); 
        openBtn.focus(); // UX purposes
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = form.title.value.trim();
        const author = form.author.value.trim();
        const pages = parseInt(form.pages.value, 10);
        const readStatus = form.readStatus.value;

        // Simple validation
        if (!title || !author || isNaN(pages) || !readStatus) {
            alert("Please fill out all fields.");
            return false;
        }

        // Create new book and add to library
        const newBook = new Book(title, author, pages, readStatus === 'yes');
        library.push(newBook);
        saveLibrary(library); // Store updated library
        renderLibrary(library); // Update UI
        dialog.close(); // Close the dialog
    });
}