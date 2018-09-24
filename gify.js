function Searchgiffs() {
    var Searchbar = document.getElementById("Searchbar").value;
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + Searchbar + "&api_key=E0rUWkyrlNoHl5oyzGQoWq4ksFpAj0pY&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (responce) { 
        var results = responce.data;

        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div class=\"animal-item\">");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;

            var animalImage = $("<img>");
            animalImage.attr("src", animated);
            animalImage.attr("data-still", still);
            animalImage.attr("data-animate", animated);
            animalImage.attr("data-state", "still");
            animalImage.addClass("animal-image");

            animalDiv.append(p);
            animalDiv.append(animalImage);

            $("#animals").append(animalDiv);
        }
    });

    console.log(document.getElementById("Searchbar").value);
}