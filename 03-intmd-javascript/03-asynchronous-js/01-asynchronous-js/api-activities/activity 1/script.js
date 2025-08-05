const apiKey = 'QSKIgohqchgLSzSl5qV76DnlCQPJ0obB';

async function getSearch() {
  const input = document.getElementById('search-input');
  const container = document.getElementById('gif-container');
  
  const searchTerm = input.value.trim();

  if (!searchTerm) return;

  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10`, {
      mode: 'cors',
    });

    // .ok is a property of the Response object returned by the fetch() API in JavaScript
    // It tells you whether the response was successful based on the HTTP status code
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const searchData = await response.json();
    container.innerHTML = '';

    // Check if any GIFs were found
    if (!searchData.data || searchData.data.length === 0) {
      const errorMsg = document.createElement('p');
      errorMsg.textContent = `No GIFs found for "${searchTerm}". Try something else.`;
      container.appendChild(errorMsg);

      // Optionally show a default image
      const fallbackImg = document.createElement('img');
      fallbackImg.src = 'https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif'; // a shrug or 404 GIF
      fallbackImg.alt = 'No results';
      container.appendChild(fallbackImg);
      return;
    }

    // if results are found, display them
    searchData.data.forEach((gif) => {
      const img = document.createElement('img');
      img.src = gif.images.original.url;
      img.alt = gif.title || 'GIF result';
      container.appendChild(img);
    });

  } catch (error) {
    console.error('Fetch error:', error);
    const errorMsg = document.createElement('p');
    errorMsg.textContent = `Something went wrong. Please try again later.`;
    container.appendChild(errorMsg);
  }
}

document.getElementById('search-btn').addEventListener('click', getSearch);