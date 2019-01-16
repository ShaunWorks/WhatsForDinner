//let flickrQuery = prompt("Name a food");
const flickrEndpoint = `https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&extras=url_o&sort=relevance&content_type=1`;

//let query = "";

//query = prompt("Search for recipes").trim();
//getFlickrData();

function getFlickrData(query) {
    $.ajax({
        url: flickrEndpoint + `&text=${query}+food&api_key=${FLICKR_APIKEY}`,
        method: "GET"
    }).done(function(response){
        console.log(response);
        let photo = response.photos.photo[0];
        let url = parsePhotoURL(photo.farm, photo.server, photo.id, photo.secret);
        recipeResponse(url);
        console.log(url);
    }).fail(function(error){
        console.log(error);
    })
}

function parsePhotoURL (farmID, serverID, ID, secret) {
    return `https://farm${farmID}.staticflickr.com/${serverID}/${ID}_${secret}.jpg`;
}