console.log("script.js loaded");
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=kGZcEAGsKKQPd8QTlC8Whof9qrp3vJWO&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
constsearchInput = document.querySelector("#search-input");

async function getGifs() {
    const response = await fetch(endpoint);
    const data = await response.json();
    const images = data.data.map(gif => gif.images.original.url);
    
    gifContainer.innerHTML = "";
    images.forEach(url => {
        gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    });
    
}

button.addEventListener("click", function() {
    getCats();  
});