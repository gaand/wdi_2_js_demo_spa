$(document).ready(function(){
  var pl = Spotify.PlayList()
  pl.init($('#spotify-songs'));
  pl.render();
});


