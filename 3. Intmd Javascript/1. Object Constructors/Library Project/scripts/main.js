import { Book } from './book.js';
import { saveLibrary, loadLibrary } from './storage.js';
import { renderLibrary } from './dom.js';
import { setupFormHandlers } from './handlers.js';

// Load saved books from localStorage and assign to a constant
// This is our main data structure holding the book collection
// It is passed around to other modules to maintain consistency
export const myLibrary = loadLibrary();

// Render the library immediately when the page loads
// We pass the `myLibrary` array to `renderLibrary` so it can show each book visually
renderLibrary(myLibrary);

// Set up event listeners for the form and buttons
// Note: we're passing the actual *function references* (not calling them here)
// These functions will be used *later* inside setupFormHandlers
setupFormHandlers(myLibrary, renderLibrary, saveLibrary);