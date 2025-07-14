const apiKey = 'QSKIgohqchgLSzSl5qV76DnlCQPJ0obB';

async function getSearch() {
  const input = document.getElementById('search-input');
  const container = document.getElementById('gif-container');
  const searchTerm = input.value.trim();

  if (!searchTerm) return;

  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=10`, {mode: 'cors'});
  const searchData = await response.json();

  container.innerHTML = '';

  searchData.data.forEach(gif => {
    const img = document.createElement('img');
    img.src = gif.images.original.url;
    container.appendChild(img);
  });
}

document.getElementById('search-btn').addEventListener('click', getSearch);


// fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`, {mode: 'cors'})
//   .then(function(response) {
//     return response.json(); // Step 1: Parse the raw response
//   })
//   .then(function(response) {
//     img.src = response.data.images.original.url; // Step 2: Use the actual parsed data
//   });