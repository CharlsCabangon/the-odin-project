const STORAGE_KEY = 'myLibrary'; // Unique key used to store and retrieve the book array in localStorage

// Load the book array from localStorage
export function loadLibrary() {
    const data = localStorage.getItem(STORAGE_KEY); // Get the stored string
    return data ? JSON.parse(data) : []; // Parse string to array if exists, else return empty array
}

// Save the book array to localStorage
export function saveLibrary(libraryArray) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(libraryArray)); // Convert array to string and store it
}