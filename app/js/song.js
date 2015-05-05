var Spotify = Spotify || {};

Spotify.Song = (function(){
  // set the private id variable.
  var _id = 1; 

  // Inner Constructor function for a Song
  function Song(songTitle, songPrice, songDuration, songArtist){
    this.title = songTitle;
    this.price = songPrice;
    this.duration = songDuration;
    this.artist = songArtist;
    this.id = _id++;
  };

  Song.prototype.render = function($playListElement){
    $playListElement.append('<li id="song-' + this.id.toString() + '" >' + this.title + '</li>');
  };

  // return the Constructor function.
  return Song;
})();