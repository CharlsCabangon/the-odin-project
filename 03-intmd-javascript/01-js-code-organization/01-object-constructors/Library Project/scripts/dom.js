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

            <div class="book-info">
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
            </div>

            <div class="book-actions">
                <label class="checkbox-container">
                    <input type="checkbox" class="read-unread" data-id="${book.id}" ${book.hasRead ? 'checked' : ''}>
                    <div class="checkmark"></div>

                </label>

                <span class="read-label">${book.hasRead ? 'Done!' : 'Unread'}</span>

                <div data-id="${book.id}" class="btn-remove">
                    <div class="lid"></div>
                    <div class="lid-cap"></div>
                    <div class="bin">
                        <div class="c cut-1"></div>
                        <div class="c cut-2"></div>
                    </div>
                </div>
            </div>
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
    const toggleButtons = document.querySelectorAll('.read-unread');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const bookId = button.getAttribute('data-id');
            const book = library.find(book => book.id === bookId);

            if (book) {
                book.hasRead = !book.hasRead; // Toggle the boolean
                localStorage.setItem('myLibrary', JSON.stringify(library)); // Save changes
                setTimeout(() => renderLibrary(library), 500); // Re-render updated list
            }
        });
    });
}