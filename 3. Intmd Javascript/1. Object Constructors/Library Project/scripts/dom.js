// Render the list of books into the DOM
export function renderLibrary(library) {
    const container = document.getElementById("bookDisplay"); // Get display container
    container.innerHTML = ''; // Clear previous content

    // Loop through each book in the library array
    library.forEach((book) => {
        const bookCard = document.createElement("div"); // Create a card element
        bookCard.classList.add("book-card"); // Add CSS class

        // Fill in the book details using template literals
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <button data-id="${book.id}" class="btn-toggle-read">Mark as ${book.hasRead ? 'Not Read' : 'Read'}</button>
            <button data-id="${book.id}" class="btn-remove">Remove</button>
        `;

        container.appendChild(bookCard); // Add to the page
    });

    addRemoveButtonListeners(library); // Enable remove button behavior
    addToggleReadButtonListeners(library);
}

// Hook up click events to each "Remove" button
function addRemoveButtonListeners(library) {
    const buttons = document.querySelectorAll('.btn-remove'); // Get all remove buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const bookId = button.getAttribute('data-id'); // Get the book's ID
            const index = library.findIndex(book => book.id === bookId); // Find it in the array

            if (index !== -1) {
                library.splice(index, 1); // Remove from array
                localStorage.setItem('myLibrary', JSON.stringify(library)); // Save updated array
                renderLibrary(library); // Re-render the display
            }
        });
    });
}

function addToggleReadButtonListeners(library) {
    const toggleButtons = document.querySelectorAll('.btn-toggle-read');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const bookId = button.getAttribute('data-id');
            const book = library.find(book => book.id === bookId);

            if (book) {
                book.hasRead = !book.hasRead; // Toggle the boolean
                localStorage.setItem('myLibrary', JSON.stringify(library)); // Save changes
                renderLibrary(library); // Re-render updated list
            }
        });
    });
}