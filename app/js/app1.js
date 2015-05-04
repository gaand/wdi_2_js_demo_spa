$(document).ready(function(){
  var songs = Spotify.PlayList.init($('#spotify-songs'));
  Spotify.PlayList.render(songs);
});


