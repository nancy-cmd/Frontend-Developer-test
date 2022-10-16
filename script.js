document.getElementById("submit").addEventListener("click", searchArt);

async function searchArt() {
    let response = await fetch("https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number");
    let data = await response.json()
    return data;
}
searchArt().then(data => console.log(data));