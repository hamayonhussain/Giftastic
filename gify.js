$(document).ready(function () {
    function Searchgiffs() {
        var searchbar = $("#Searchbar").val().trim();
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + Searchbar + "&api_key=E0rUWkyrlNoHl5oyzGQoWq4ksFpAj0pY&limit=10";

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
                giphyImage.attr("src", animated);


                giphyImage.attr("data-still", still);
                giphyImage.attr("data-animate", animated);

                giphyImage.attr("data-state", "still");

                giphyImage.addClass("animal-image");


                giphyDiv.append(p);
                giphyDiv.append(giphyImage);

                $("#animals").append(giphyDiv);
            }
        });




    }

    $("animal-image").on("click", function () {
        var state = $(this).attr("data-state");

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    $('.btn').click(function () {
        Searchgiffs();
    });


});
