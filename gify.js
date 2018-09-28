$(document).ready(function () {
    var preRenderedGiffs = ["batman", "titanic", "tom hanks", "snakes"];
    renderButtons();
    function renderButtons() {

        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < preRenderedGiffs.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie-btn to our button
          a.addClass("search-button");
          // Adding a data-attribute
          a.attr("data-name", preRenderedGiffs[i]);
          // Providing the initial button text
          a.text(preRenderedGiffs[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
    }

    function Searchgiffs(clickedButton) {
        console.log(Searchgiffs);
        console.log(this);
        var arrayButton = $(clickedButton).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + arrayButton + "&api_key=E0rUWkyrlNoHl5oyzGQoWq4ksFpAj0pY&limit=10";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (responce) {
            var results = responce.data;




            for (var i = 0; i < results.length; i++) {
                var giphyDiv = $("<div class=\"animal-item\">");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animated = results[i].images.fixed_height.url;
                var still = results[i].images.fixed_height_still.url;

                var giphyImage = $("<img>")
                giphyImage.attr("src", still);


                giphyImage.attr("data-still", still);
                giphyImage.attr("data-animate", animated);

                giphyImage.attr("data-state", "still");

                giphyImage.addClass("animal-image");


                giphyDiv.append(p);
                giphyDiv.append(giphyImage);

                $("#animals").append(giphyDiv);
            }
        });

      renderButtons();


    }

    $(document).on("click", ".animal-image", function () {
        console.log("state");
        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    $('.search-button').on('click', function () {
        console.log(this);
        console.log('search button clicked');
        Searchgiffs(this);
    });


});
