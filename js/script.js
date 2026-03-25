console.log("script.js loaded");

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

async function getGifs() {
    const searchTerm = searchInput.value.trim() || "cats"; // Default to "cats" if input is empty
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=kGZcEAGsKKQPd8QTlC8Whof9qrp3vJWO&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`;

    const response = await fetch(endpoint);
    const data = await response.json();
    const images = data.data.map(gif => gif.images.original.url);
    
    gifContainer.innerHTML = "";
    images.forEach(url => {
        gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    });
    
}

button.addEventListener("click", function() {
    getGifs();  
});