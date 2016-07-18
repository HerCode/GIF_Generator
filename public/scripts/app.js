$(function() {
  var randomgif = response.data;
  var imgRandomGif = response.data.image_url;
/*event handler*/
	  $('button').on('click', function() {
	      $.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmz").then(function(response) {

/*append GIF to DOM*/
	      $('#insertRandomGif').html("<img src=" + imgRandomGif + "></img>");
	                console.log(imgRandomGif);

        });
    });





  });
