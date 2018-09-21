


var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=E0rUWkyrlNoHl5oyzGQoWq4ksFpAj0pY";


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(res) {
    console.log(res);
  });