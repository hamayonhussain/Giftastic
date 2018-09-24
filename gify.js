$(document).ready(function () {
    function Searchgiffs() {
        var Searchbar = document.getElementById("Searchbar").value;
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

                var giphyImage = $("<img>");
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




    }

    $("Searchgiffs").on("click", function () {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");

        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }

        // ($(this).attr("data-state") === "still") 
        //     ? $(this).attr({"src": $(this).attr("data-animate"), "data-state": "animate"})
        //     : $(this).attr({"src": $(this).attr("data-still"), "data-state": "still"});
    });

    $('.btn').click(function () {
        Searchgiffs();
    });


});
