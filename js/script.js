console.log("script.js loaded");
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=kGZcEAGsKKQPd8QTlC8Whof9qrp3vJWO&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function getCats() {
    const response = await fetch(endpoint);
    const data = await response.json();
    const images = data.data.map(gif => gif.images.original.url);
    console.log(images);

    const output = document.getElementById("cat-images");
    output.textContext = images;

}

getCats();
const button = document.getElementById("fetch-cat-button");

button.addEventListener("click", function() {
    getCats();
});
